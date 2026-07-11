import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { email, password } =
      await req.json();

    const client = await clientPromise;

    const db = client.db("Ecommerce");

    const user = await db
      .collection("users")
      .findOne({ email });

    if (!user) {
      return Response.json(
        {
          message:
            "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const match =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!match) {
      return Response.json(
        {
          message:
            "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const token = jwt.sign(
      {
        id: user._id.toString(),
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const cookieStore =
      await cookies();

    cookieStore.set(
      "token",
      token,
      {
        httpOnly: true,
        secure:
          process.env
            .NODE_ENV ===
          "production",
        sameSite: "lax",
        maxAge:
          60 * 60 * 24 * 7,
        path: "/",
      }
    );

    return Response.json({
      message:
        "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return Response.json(
      {
        message:
          error.message,
      },
      {
        status: 500,
      }
    );
  }
}