"use client";

import { useRouter } from "next/navigation";

export default function CartItem({
  item,
}) {
  const router = useRouter();

  const updateQuantity =
    async (quantity) => {
      if (quantity < 1) return;

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
    <div className="bg-white shadow-md rounded-xl p-4 flex gap-5 items-center">
      <img
        src={item.image}
        alt={item.title}
        className="w-28 h-28 object-cover text-gray-600 rounded-lg"
      />

      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-600">
          {item.title}
        </h3>

        <p className="text-gray-600">
          PKR {item.price}
        </p>

        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() =>
              updateQuantity(
                item.quantity - 1
              )
            }
            className="bg-gray-200 px-3 text-gray-600 py-1 rounded"
          >
            -
          </button>

          <span className="font-semibold text-gray-600">
            {item.quantity}
          </span>

          <button
            onClick={() =>
              updateQuantity(
                item.quantity + 1
              )
            }
            className="bg-gray-200 text-gray-600 px-3 py-1 rounded"
          >
            +
          </button>
        </div>
      </div>

      <div className="text-right">
        <p className="font-bold text-lg text-gray-600">
          PKR{" "}
          {Number(item.price) *
            Number(item.quantity)}
        </p>

        <button
          onClick={removeItem}
          className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
}