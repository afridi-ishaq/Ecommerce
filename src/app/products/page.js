import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
async function getProducts(
  search,
  category
) {
  const response = await fetch(
    `http://localhost:3000/api/products?search=${search}&category=${category}`,
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

      <div className="grid md:grid-cols-3 gap-6">
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