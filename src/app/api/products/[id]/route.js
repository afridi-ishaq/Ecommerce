import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const body = req.json();
    const { id } = await params;

    const client = await clientPromise;
    const db = client.db("Ecommerce")

    const product = await db
        .collection("products")
        .findOne({
            _id: new ObjectId(id),
        })

    if (!product) {
        return Response.json(
            { message: "No product is available" },
            { status: 400 }
        )
    }
    return Response.json(product)
}

export async function PUT(req, { params }) {
    const body = req.json();

    const { id } = await params;
    const client = await clientPromise;

    const db = client.db("Ecommerce")

    const result = await db
        .collection("products")
        .updateOne(
            { _id: new ObjectId(id) },
            { $set: body }
        );

    return Response.json({ message: "Product updated", result })
}

export async function DELETE(req,{params}){
    const body = req.json();
    const {id} = await params;
    const client = await clientPromise;
    const db = client.db("Ecommerce");

    await db.collection("products").deleteOne({
        _id: new ObjectId(id)
    })


    return Response.json({
        message:"product deleted"
    })
}