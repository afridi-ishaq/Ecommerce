"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      price: "",
      category: "",
      image: "",
      stock: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    const response = await fetch(
      "/api/products",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(
          formData
        ),
      }
    );

    if (response.ok) {
      alert(
        "Product Added Successfully"
      );

      router.push(
        "/admin/products"
      );
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}