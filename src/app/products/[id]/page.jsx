import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link"; // 1. Import Link from next/link

async function getProduct(id) {
  const response = await fetch(
    `http://localhost:3000/api/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return ( 
    <div className="flex flex-col items-center justify-center p-5 m-5 border-gray-200 border-2 border-solid rounded-lg shadow-md">
      
      {/* 2. Changed from <button> to <Link> and onClick to href */}
      <Link 
        href="/products" 
        className="bg-blue-500 text-white px-4 py-2 rounded-md top-10 left-1 absolute mt-2 inline-block"
      >
        Back to Products
      </Link>

      <img
        src={product.image}
        alt={product.title}
        width="300"
        className="mb-5 rounded-lg"
      />

      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      <p>Stock: {product.stock}</p>

      <AddToCartButton product={product} />
    </div>
  );
}