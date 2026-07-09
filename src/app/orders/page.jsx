async function getOrders() {
  const response = await fetch(
    "http://localhost:3000/api/orders",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div>
      <h1>My Orders</h1>

      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p>
            Address:
            {order.address}
          </p>

          <p>
            City:
            {order.city}
          </p>

          <p>
            Phone:
            {order.phone}
          </p>

          <p>
            Status:
            {order.status}
          </p>
        </div>
      ))}
    </div>
  );
}