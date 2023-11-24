import ProductCard from "./ProductCard";
import { Product } from "../types/products.type";
import useProducts from "../helper/hooks/useProducts";

export default function FeaturedProducts() {
  const { products, isError, isLoading } = useProducts("/products?limit=10");

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className=" ">
      <h2 className="text-2xl text-blue-300 p-5">Featured Products</h2>

      <section className="flex overflow-scroll w-screen">
        {products.map((product: Product) => (
          <div className=" mx-7" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </section>
    </div>
  );
}
