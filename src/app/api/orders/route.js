import clientPromise from "@/lib/mongodb";


export async function POST(req) {

  const body = await req.json();

  const client = await clientPromise;

  const db = client.db("Ecommerce");

  const result = await db
    .collection("orders")
    .insertOne({
      ...body,
      status: "Pending",
      createdAt: new Date(),
    });

  return Response.json(result);
}
export async function GET() {
  const client = await clientPromise;

  const db = client.db("Ecommerce");

  const orders = await db
    .collection("orders")
    .find()
    .toArray();

  return Response.json(orders);
}