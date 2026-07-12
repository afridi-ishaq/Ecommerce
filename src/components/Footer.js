export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-bold">
            Ishaq Store
          </h2>
          <p className="mt-2 text-gray-300">
            Your one-stop shop for electronics,
            phones, laptops, and accessories.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold">
            Quick Links
          </h2>

          <ul className="mt-2 space-y-2">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/products">
                Products
              </a>
            </li>

            <li>
              <a href="/cart">
                Cart
              </a>
            </li>

            <li>
              <a href="/orders">
                Orders
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold">
            Contact
          </h2>

          <p className="mt-2">
            Email:
            support@ishaqstore.com
          </p>

          <p>
            Phone:
            +92 300 1234567
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4">
        © {new Date().getFullYear()} Ishaq Store. All rights reserved.
      </div>
    </footer>
  );
}