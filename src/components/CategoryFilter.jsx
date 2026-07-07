"use client";

import { useRouter } from "next/navigation";

export default function CategoryFilter() {
  const router = useRouter();

  const categories = [
    "All",
    "Phones",
    "Laptops",
    "Watches",
  ];

  const handleCategory = (
    category
  ) => {
    if (category === "All") {
      router.push("/products");
      return;
    }

    router.push(
      `/products?category=${category}`
    );
  };

  return (
    <div className="flex gap-4 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            handleCategory(category)
          }
          className="px-4 py-2 border rounded"
        >
          {category}
        </button>
      ))}
    </div>
  );
}