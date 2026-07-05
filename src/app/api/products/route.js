import clientPromise from "@/lib/mongodb";

export async function GET() {
    try {
        

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

export async function POST(req) {
    try {
        
        const client = await clientPromise;

        const db = client.db("Ecommerce");

        const result = await db
            .collection("products")
            .insertOne(body)

        return Response.json(
            {
                message: "Product has beeen inserrted",
                id: result.insertedId,
            },
            { status: 200 }
        )
    } catch (error) {
        return Response.json(
            { message: error.message },
            { status: 500 }
        )
    }
}