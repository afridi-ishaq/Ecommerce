import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const token =
    request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  try {
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET
    );

    const { payload } =
      await jwtVerify(
        token,
        secret
      );

    const { pathname } =
      request.nextUrl;

    if (
      pathname.startsWith("/admin")
    ) {
      if (
        payload.role !==
        "admin"
      ) {
        return NextResponse.redirect(
          new URL(
            "/",
            request.url
          )
        );
      }
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/cart/:path*",
    "/orders/:path*",
  ],
};