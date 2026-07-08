import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(
  req,
  { params }
) {
  try {
    const { id } = await params;

    const body = await req.json();

    const client = await clientPromise;

    const db = client.db("Ecommerce");

    await db.collection("cart").updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          quantity: body.quantity,
        },
      }
    );

    return Response.json({
      message: "Cart updated",
    });
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
export async function DELETE(
  req,
  { params }
) {
  try {
    const { id } = await params;

    const client = await clientPromise;

    const db = client.db("Ecommerce");

    await db.collection("cart").deleteOne({
      _id: new ObjectId(id),
    });

    return Response.json({
      message: "Item removed",
    });
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