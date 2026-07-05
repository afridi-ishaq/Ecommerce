import clientPromise from "@/lib/mongodb";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db("Ecommerce");

    const products = await db
      .collection("products")
      .find({})
      .toArray();

    return Response.json(products);
  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const authHeader =
            req.headers.get("authorization");

        if (!authHeader) {
            return Response.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        const token =
            authHeader.split(" ")[1];

        const user = verifyToken(token);

        if (!user) {
            return Response.json(
                { message: "Invalid token" },
                { status: 401 }
            );
        }
        if (user.role !== "admin") {
            return Response.json(
                { message: "Access denied" },
                { status: 403 }
            );
        }

        const client = await clientPromise;

        const db = client.db("Ecommerce");

        const result = await db
            .collection("products")
            .insertOne(body)

        return Response.json(
            {
                message: "Product has beeen inserrted",
                id: result.insertedId,
            },
            { status: 200 }
        )
    } catch (error) {
        return Response.json(
            { message: error.message },
            { status: 500 }
        )
    }
}