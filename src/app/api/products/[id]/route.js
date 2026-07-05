import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const authHeader =
        req.headers.get("authorization");

    if (!authHeader) {
        return Response.json(
            { message: "Unauthorized" },
            { status: 401 }
        );
    }

    const token =
        authHeader.split(" ")[1];

    const user = verifyToken(token);

    if (!user) {
        return Response.json(
            { message: "Invalid token" },
            { status: 401 }
        );
    }
    if (user.role !== "admin") {
        return Response.json(
            { message: "Access denied" },
            { status: 403 }
        );
    }
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
    const authHeader =
        req.headers.get("authorization");

    if (!authHeader) {
        return Response.json(
            { message: "Unauthorized" },
            { status: 401 }
        );
    }

    const token =
        authHeader.split(" ")[1];

    const user = verifyToken(token);

    if (!user) {
        return Response.json(
            { message: "Invalid token" },
            { status: 401 }
        );
    }
    if (user.role !== "admin") {
        return Response.json(
            { message: "Access denied" },
            { status: 403 }
        );
    }
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

export async function DELETE(req, { params }) {
    const authHeader =
        req.headers.get("authorization");

    if (!authHeader) {
        return Response.json(
            { message: "Unauthorized" },
            { status: 401 }
        );
    }

    const token =
        authHeader.split(" ")[1];

    const user = verifyToken(token);

    if (!user) {
        return Response.json(
            { message: "Invalid token" },
            { status: 401 }
        );
    }
    if (user.role !== "admin") {
        return Response.json(
            { message: "Access denied" },
            { status: 403 }
        );
    }
    const body = req.json();
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db("Ecommerce");

    await db.collection("products").deleteOne({
        _id: new ObjectId(id)
    })


    return Response.json({
        message: "product deleted"
    })
}