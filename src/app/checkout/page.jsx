"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    address: "",
    city: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "/api/orders",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          ...formData,
          status: "Pending",
        }),
      }
    );

    if (response.ok) {
      alert("Order Placed");

      router.push("/orders");
    }
  };

  return (
    <div>
      <h1>Checkout</h1>

      <form onSubmit={placeOrder}>
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}
