import clientPromise from "@/lib/mongodb";
import { getUser } from "@/lib/getUser";

export async function GET() {
  try {
    const user =
      await getUser();

    if (!user) {
      return Response.json(
        {
          message:
            "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const client =
      await clientPromise;

    const db =
      client.db("Ecommerce");

    const cart =
      await db
        .collection("cart")
        .find({
          userId: user.id,
        })
        .toArray();

    return Response.json(cart);
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

export async function POST(req) {
  try {
    const user =
      await getUser();

    if (!user) {
      return Response.json(
        {
          message:
            "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const body =
      await req.json();

    const client =
      await clientPromise;

    const db =
      client.db("Ecommerce");

    const result =
      await db
        .collection("cart")
        .insertOne({
          ...body,
          userId: user.id,
        });

    return Response.json(
      {
        message:
          "Item added to cart",
        insertedId:
          result.insertedId,
      },
      {
        status: 201,
      }
    );
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