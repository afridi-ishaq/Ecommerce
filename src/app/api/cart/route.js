export async function POST(req) {
  const body = await req.json();

  const client = await clientPromise;
  const db = client.db("Ecommerce");

  const result = await db
    .collection("cart")
    .insertOne(body);

  return Response.json(result);
}
export async function GET() {
  const client = await clientPromise;

  const db = client.db("Ecommerce");

  const cart = await db
    .collection("cart")
    .find()
    .toArray();

  return Response.json(cart);
}