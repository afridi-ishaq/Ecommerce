import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="p-6">
        <h1 className="text-3xl font-bold">
          Welcome to My Ecommerce Store
        </h1>

        <p className="mt-4">
          Buy the best products online.
        </p>
      </main>
    </>
  );
}
