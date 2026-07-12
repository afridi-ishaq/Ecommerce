import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";

async function getProduct(id) {
  const response = await fetch(
    `http://localhost:3000/api/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch product"
    );
  }

  return response.json();
}

export default async function ProductPage({
  params,
}) {
  const { id } = await params;

  const product =
    await getProduct(id);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Link
        href="/products"
        className="inline-block mb-8 text-gray-600 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
      >
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-400 mb-6">
            {product.description}
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Rs:{product.price}
          </h2>

          <p className="mb-6">
            <span className="font-semibold">
              Stock:
            </span>{" "}
            {product.stock}
          </p>

          <div className="mb-6">
            <AddToCartButton
              product={product}
            />
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-2">
              Product Details
            </h3>

            <p>
              Category:{" "}
              {product.category}
            </p>

            <p>
              Availability:{" "}
              {Number(
                product.stock
              ) > 0
                ? "In Stock"
                : "Out of Stock"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}