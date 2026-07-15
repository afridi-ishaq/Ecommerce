async function getOrders() {
  const response = await fetch(
    "https://ecommerce-afridi.vercel.app/api/orders",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-300 mb-8 text-center">
          My Orders
        </h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
            >
              <p className="mb-2">
                <span className="font-semibold text-gray-700">
                  Address:
                </span>{" "}
                <span className="text-gray-600">{order.address}</span>
              </p>

              <p className="mb-2">
                <span className="font-semibold text-gray-700">
                  City:
                </span>{" "}
                <span className="text-gray-600">{order.city}</span>
              </p>

              <p className="mb-2">
                <span className="font-semibold text-gray-700">
                  Phone:
                </span>{" "}
                <span className="text-gray-600">{order.phone}</span>
              </p>

              <p>
                <span className="font-semibold text-gray-700">
                  Status:
                </span>{" "}
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                  {order.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}