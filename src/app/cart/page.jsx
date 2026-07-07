async function getCartItems() {
  const response = await fetch(
    "http://localhost:3000/api/cart",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  return response.json();
}

export default async function CartPage() {
  const items = await getCartItems();

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #ddd",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}

          <h2>Total: ${total}</h2>
        </>
      )}
    </div>
  );
}