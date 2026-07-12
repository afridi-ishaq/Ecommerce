import CartItem from "@/components/CartItem";
import clientPromise from "@/lib/mongodb";
import { getUser } from "@/lib/getUser";

export default async function CartPage() {
  const user = await getUser();

  if (!user) {
    return (
      <p className="text-center mt-10">
        Please login first
      </p>
    );
  }

  const client = await clientPromise;

  const db = client.db("Ecommerce");

  const items = await db
    .collection("cart")
    .find({
      userId: user.id,
    })
    .toArray();

  const total = items.reduce(
    (sum, item) =>
      sum +
      Number(item.price) *
        Number(item.quantity),
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {items.length === 0 ? (
        <div className="bg-gray-100 p-10 rounded-xl text-gray-700 text-center">
          <h2 className="text-2xl font-semibold">
            Your cart is empty
          </h2>

          <p className="text-gray-700 mt-2">
            Add some products to get
            started.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <CartItem
                key={item._id.toString()}
                item={{
                  ...item,
                  _id:
                    item._id.toString(),
                }}
              />
            ))}
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 h-fit">
            <h2 className="text-2xl text-gray-700 font-bold mb-4">
              Order Summary
            </h2>

            <div className="flex text-gray-600 justify-between mb-3">
              <span>Total Items</span>
              <span>
                {items.length}
              </span>
            </div>

            <div className="flex justify-between text-gray-600 mb-5">
              <span>Total Price</span>
              <span className="font-bold">
                PKR {total}
              </span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}