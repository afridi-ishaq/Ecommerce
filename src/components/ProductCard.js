import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product._id}`}>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          width="200"
        />

        <h2>{product.title}</h2>

        <p>{product.description}</p>

        <h3>${product.price}</h3>

        <p>Stock: {product.stock}</p>
      </div>
    </Link>
  );
}