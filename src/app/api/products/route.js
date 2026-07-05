import clientPromise from "@/lib/mongodb";

export async function GET() {
    try {
        await client.connect();

        const client = await clientPromise;

        const db = client.db("Ecommerce")

        const products = await db
            .collection("products")
            .find({})
            .toArray()

        return Response.json(products);
    } catch (error) {
        return Response.json(
            { message: error.message },
            { status: 500 }
        )
    }
}