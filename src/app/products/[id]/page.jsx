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
    <div>
      <img
        src={product.image}
        alt={product.title}
        width="300"
      />

      <h1>{product.title}</h1>

      <p>{product.description}</p>

      <h2>${product.price}</h2>

      <p>Stock: {product.stock}</p>

      <button>Add To Cart</button>
    </div>
  );
}