import clientPromise from "@/lib/mongodb";

export async function GET(req) {
  try {
    const client = await clientPromise;

    const db = client.db("Ecommerce");

    const { searchParams } = new URL(req.url);

    const search =
      searchParams.get("search") || "";

    const category =
      searchParams.get("category") || "";

    let query = {};

    if (search) {
      query.title = {
        $regex: search,
        $options: "i",
      };
    }

    if (category) {
      query.category = category;
    }

    const products = await db
      .collection("products")
      .find(query)
      .toArray();

    return Response.json(products);
  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 500 }
    );
  }
}