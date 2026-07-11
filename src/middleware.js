import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request) {
  const token =
    request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  // Protect admin routes
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      if (decoded.role !== "admin") {
        return NextResponse.redirect(
          new URL("/", request.url)
        );
      }
    } catch {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }
  }

  // Protect user routes
  if (
    pathname.startsWith("/cart") ||
    pathname.startsWith("/orders")
  ) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/cart/:path*",
    "/orders/:path*",
  ],
};