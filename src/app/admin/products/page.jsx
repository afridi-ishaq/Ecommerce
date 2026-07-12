import Link from "next/link";
import DeleteProductButton from "@/components/DeleteProductButton";

async function getProducts() {
  const response = await fetch(
    "http://localhost:3000/api/products",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function AdminProductsPage() {
  const products =
    await getProducts();

  return (
    <div>
      <h1>Manage Products</h1>

      <Link href="/admin/products/add">
        Add Product
      </Link>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div className="grid grid-cols-2 gap-4" key={product._id}>
            <div key={product._id} className="w-80 h-80 border-2 border-gray-50 rounded-lg p-2 m-5 mb-18 ">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover mb-3" />
              <h3 className="p-2 bg-gray-800 rounded-md">{product.title}</h3>

              <Link
                href={`/admin/products/edit/${product._id}`}
                className="pb-5 mb-3"
              >
                Edit
              </Link>

              <DeleteProductButton
                id={product._id}
              />
            </div>
          </div>

        ))}
      </div>
    </div>

  );
}