import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-6xl font-bold">
        Welcome to MyStore
      </h1>

      <p className="mt-4 text-xl">
        Buy the latest products
      </p>

      <Link
        href="/products"
        className="inline-block mt-8 bg-black text-white px-6 py-3 rounded"
      >
        Shop Now
      </Link>
    </div>
  );
}