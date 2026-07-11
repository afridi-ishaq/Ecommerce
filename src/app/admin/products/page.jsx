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

      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.title}</h3>

          <Link
            href={`/admin/products/edit/${product._id}`}
          >
            Edit
          </Link>

          <DeleteProductButton
            id={product._id}
          />
        </div>
      ))}
    </div>
  );
}