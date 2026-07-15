"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold hover:text-gray-200 transition-all duration-300"
        >
          Ishaq Store
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/orders">Orders</Link>

          <Link
            href="/login"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
          >
            Login
          </Link>
          <Link href="/register" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
            Register
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/orders">Orders</Link>

          <Link
            href="/login"
            className="bg-white text-black px-4 py-2 rounded text-center"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}