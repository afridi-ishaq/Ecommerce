import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db("Ecommerce");

    const cart = await db
      .collection("cart")
      .find()
      .toArray();

    return Response.json(cart);
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


export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;

    const db = client.db("Ecommerce");

    const result = await db
      .collection("cart")
      .insertOne(body);

    return Response.json(
      {
        message: "Item added to cart",
        insertedId: result.insertedId,
      },
      {
        status: 201,
      }
    );
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
