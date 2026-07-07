"use client";

export default function AddToCartButton({
  product,
}) {
  const addToCart = async () => {
    const item = {
      productId: product._id,
      title: product.title,
      price: product.price,
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
    <button onClick={addToCart}>
      Add To Cart
    </button>
  );
}