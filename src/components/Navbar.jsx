import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold hover:text-3xl hover:text-gray-200 hover:-translate-y-1.5 transition-all duration-300"
        >
          Ishaq Store
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="hover:text-gray-300 hover:text-lg transition-all duration-300"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="hover:text-gray-300 hover:text-lg transition-all duration-300"
          >
            Products
          </Link>

          <Link
            href="/cart"
            className="hover:text-gray-300 hover:text-lg transition-all duration-300"
          >
            Cart
          </Link>

          <Link
            href="/orders"
            className="hover:text-gray-300 hover:text-lg transition-all duration-300"
          >
            Orders
          </Link>

          <Link
            href="/login"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 "
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}