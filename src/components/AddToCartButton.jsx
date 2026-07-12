"use client";

export default function AddToCartButton({
  product,
}) {
  const addToCart = async () => {
    const item = {
      productId: product._id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    const response = await fetch(
      "/api/cart",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(item),
      }
    );

    const data = await response.json();

    alert("Added to cart");
  };

  return (
    <button onClick={addToCart}
    className="bg-gray-300 text-gray-700 p-3 cursor-pointer rounded-2xl px-7 hover:bg-gray-400 transition-colors duration-300">
      Add To Cart
    </button>
  );
}