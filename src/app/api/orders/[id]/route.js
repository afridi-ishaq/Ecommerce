import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(
  req,
  { params }
) {
  const { id } = params;

  const body = await req.json();

  const client = await clientPromise;

  const db = client.db("Ecommerce");

  await db.collection("orders").updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: {
        status: body.status,
      },
    }
  );

  return Response.json({
    message: "Order updated",
  });
}