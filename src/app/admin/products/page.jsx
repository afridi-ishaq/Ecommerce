
import Link from "next/link";
import DeleteProductButton from "@/components/DeleteProductButton";

async function getProducts() {
  const response = await fetch(
    "https://ecommerce-afridi.vercel.app/api/products",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Manage Products
      </h1>

      <Link
        href="/admin/products/add"
        className="bg-green-500 text-white px-4 py-2 rounded-md mb-6 inline-block"
      >
        Add Product
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border-2 rounded-xl border-gray-700 p-4"
          >
            <div className="w-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 sm:h-72 object-cover rounded-lg mb-3"
              />

              <h3 className="p-3 bg-gray-800 rounded-md text-center">
                {product.title}
              </h3>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Link
                  href={`/admin/products/edit/${product._id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md text-center flex-1"
                >
                  Edit
                </Link>

                <DeleteProductButton
                  id={product._id}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

