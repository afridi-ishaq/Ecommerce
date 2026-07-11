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

export async function PUT(
  req,
  { params }
) {
  try {
    const { id } = await params;

    const body = await req.json();

    const client = await clientPromise;

    const db = client.db("Ecommerce");

    await db.collection("products")
      .updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: body,
        }
      );

    return Response.json({
      message:
        "Product updated",
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

    await db.collection("products")
      .deleteOne({
        _id: new ObjectId(id),
      });

    return Response.json({
      message:
        "Product deleted",
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