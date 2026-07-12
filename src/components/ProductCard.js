import Link from "next/link";

export default function ProductCard({
  product,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <Link
        href={`/products/${product._id}`}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-cover"
        />
      </Link>

      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">
          {product.category}
        </p>

        <h2 className="text-xl font-bold mb-2 text-gray-600 line-clamp-1">
          {product.title}
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <h3 className="text-2xl text-gray-600 font-bold">
            Rs:{product.price}
          </h3>

          <span className="text-green-600 text-sm font-medium">
            In Stock
          </span>
        </div>

        <Link
          href={`/products/${product._id}`}
          className="block mt-4 text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}