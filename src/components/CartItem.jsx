"use client";

import { useRouter } from "next/navigation";

export default function CartItem({
  item,
}) {
  const router = useRouter();

  const updateQuantity =
    async (quantity) => {
      await fetch(
        `/api/cart/${item._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            quantity,
          }),
        }
      );

      router.refresh();
    };

  const removeItem = async () => {
    await fetch(
      `/api/cart/${item._id}`,
      {
        method: "DELETE",
      }
    );

    router.refresh();
  };

  return (
    <div className="border p-4 rounded">
      <h3>{item.title}</h3>

      <p>${item.price}</p>

      <div className="flex gap-2 mt-2">
        <button
          onClick={() =>
            updateQuantity(
              item.quantity - 1
            )
          }
        >
          -
        </button>

        <span>
          {item.quantity}
        </span>

        <button
          onClick={() =>
            updateQuantity(
              item.quantity + 1
            )
          }
        >
          +
        </button>
      </div>

      <button
        onClick={removeItem}
        className="mt-2"
      >
        Remove
      </button>
    </div>
  );
}