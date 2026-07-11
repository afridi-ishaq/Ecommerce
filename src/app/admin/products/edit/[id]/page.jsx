"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProductPage({
params,
}) {
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

useEffect(() => {
async function getProduct() {
const { id } = await params;


  const response = await fetch(
    `/api/products/${id}`
  );

  const data =
    await response.json();

  setFormData({
    title: data.title || "",
    description:
      data.description || "",
    price: data.price || "",
    category:
      data.category || "",
    image: data.image || "",
    stock: data.stock || "",
  });
}

getProduct();


}, [params]);

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


const { id } = await params;

const response = await fetch(
  `/api/products/${id}`,
  {
    method: "PUT",
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
    "Product Updated Successfully"
  );

  router.push(
    "/admin/products"
  );
}


};

return ( <div className="max-w-xl mx-auto mt-10"> <h1 className="text-3xl font-bold mb-6">
Edit Product </h1>


  <form
    onSubmit={handleSubmit}
    className="space-y-4"
  >
    <input
      name="title"
      value={
        formData.title || ""
      }
      onChange={handleChange}
      className="border p-2 w-full"
      placeholder="Title"
    />

    <input
      name="description"
      value={
        formData.description ||
        ""
      }
      onChange={handleChange}
      className="border p-2 w-full"
      placeholder="Description"
    />

    <input
      name="price"
      value={
        formData.price || ""
      }
      onChange={handleChange}
      className="border p-2 w-full"
      placeholder="Price"
    />

    <input
      name="category"
      value={
        formData.category ||
        ""
      }
      onChange={handleChange}
      className="border p-2 w-full"
      placeholder="Category"
    />

    <input
      name="image"
      value={
        formData.image || ""
      }
      onChange={handleChange}
      className="border p-2 w-full"
      placeholder="Image URL"
    />

    <input
      name="stock"
      value={
        formData.stock || ""
      }
      onChange={handleChange}
      className="border p-2 w-full"
      placeholder="Stock"
    />

    <button
      type="submit"
      className="bg-black text-white px-4 py-2 rounded"
    >
      Update Product
    </button>
  </form>
</div>


);
}
