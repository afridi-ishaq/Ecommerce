"use client";

import { useRouter } from "next/navigation";

export default function DeleteProductButton({
  id,
}) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete =
      confirm(
        "Delete this product?"
      );

    if (!confirmDelete) return;

    await fetch(
      `/api/products/${id}`,
      {
        method: "DELETE",
      }
    );

    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 cursor-pointer w-34 text-white py-2 rounded-md"
    >
      Delete
    </button>
  );
}