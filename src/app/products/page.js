import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
async function getProducts(
  search,
  category
) {
  const response = await fetch(
    `https://ecommerce-afridi.vercel.app/api/products?search=${search}&category=${category}`,
    {
      cache: "no-store",
    }
  );

  return response.json();
}



export default async function ProductsPage({
  searchParams,
}) {
  const params = await searchParams;

  const search = params.search || "";
  const category = params.category || "";

  const products = await getProducts(
    search,
    category
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        Products
      </h1>

      <SearchBar />

      <CategoryFilter />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}