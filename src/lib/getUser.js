import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getUser() {
  try {
    const cookieStore =
      await cookies();

    const token =
      cookieStore.get("token")?.value;

    console.log("TOKEN:", token);

    if (!token) {
      return null;
    }

    const decoded =
      jwt.verify(
        token,
        process.env.JWT_SECRET
      );

    console.log(
      "DECODED:",
      decoded
    );

    return decoded;
  } catch (error) {
    console.log(
      "GETUSER ERROR:",
      error.message
    );

    return null;
  }
}