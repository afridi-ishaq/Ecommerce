import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl text-gray-900 font-bold mb-6">
            Welcome to Ishaq Storeee
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Shop the latest Phones, Laptops,
            Headphones, Watches, and more at
            affordable prices.
          </p>

          <Link
            href="/products"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <Link
            href="/products?category=Phones"
            className="border p-6 text-center rounded-lg hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">
              📱 Phones
            </h3>
          </Link>

          <Link
            href="/products?category=Laptops"
            className="border p-6 text-center rounded-lg hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">
              💻 Laptops
            </h3>
          </Link>

          <Link
            href="/products?category=HeadPhone"
            className="border p-6 text-center rounded-lg hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">
              🎧 Headphones
            </h3>
          </Link>

          <Link
            href="/products?category=Watches"
            className="border p-6 text-center rounded-lg hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">
              ⌚ Watches
            </h3>
          </Link>
        </div>
      </section>
    </div>
  );
}