import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  req,
  { params }
) {
  try {
    const { id } = await params;

    const client = await clientPromise;

    const db = client.db("Ecommerce");

    const product = await db
      .collection("products")
      .findOne({
        _id: new ObjectId(id),
      });

    return Response.json(product);
  } catch (error) {
    return Response.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
