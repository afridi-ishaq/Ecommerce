import Link from "next/link";

export default function ProductCard({
  product,
}) {
  return (
    <Link
      href={`/products/${product._id}`}
    >
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-52 object-cover rounded"
        />

        <h2 className="text-lg font-semibold mt-3">
          {product.title}
        </h2>

        <p className="text-gray-600">
          {product.description}
        </p>

        <h3 className="text-xl font-bold mt-2">
          ${product.price}
        </h3>

        <button className="mt-3 bg-black text-white px-4 py-2 rounded">
          View Product
        </button>
      </div>
    </Link>
  );
}