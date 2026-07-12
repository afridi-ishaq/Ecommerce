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
  const products =
    await getProducts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

      <Link href="/admin/products/add"
      
        className="bg-green-500 text-white px-4 py-2 rounded-md mb-4 inline-block">
        Add Product
      </Link>
      <div className="grid grid-cols-3 gap-8">
        {products.map((product) => (
          <div className="grid grid-cols-2 border-2 rounded-xl border-gray-700 gap-4" key={product._id}>
            <div key={product._id} className="w-80 h-80 border-2 border-gray-50 rounded-lg p-2 m-5 mb-18 ">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover mb-3" />
              <h3 className="p-2 bg-gray-800 rounded-md">{product.title}</h3>
                 
                 <div className="flex justify-between mt-1">
                  <Link
                href={`/admin/products/edit/${product._id}`}
                className="bg-blue-500 w-34 text-white px-4 py-2 rounded-md inline-block"
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