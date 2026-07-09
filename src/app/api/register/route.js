import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const client = await clientPromise;
    const db = client.db("Ecommerce");

    const existingUser = await db
      .collection("users")
      .findOne({ email });

    if (existingUser) {
      return Response.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const result = await db
      .collection("users")
      .insertOne({
        name,
        email,
        password: hashedPassword,
        role: "user",
      });

    return Response.json({
      message: "User registered",
      id: result.insertedId,
    });
  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
