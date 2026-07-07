"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();

  const [search, setSearch] =
    useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    router.push(
      `/products?search=${search}`
    );
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mb-6"
    >
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-black text-white rounded"
      >
        Search
      </button>
    </form>
  );
}