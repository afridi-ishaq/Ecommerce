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
      className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded"
    >
      Delete
    </button>
  );
}