import useSWR from "swr";
import ProductCard from "./ProductCard";
import { Product } from "../types/products.type";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function FeaturedProducts() {
  const [showfeaturedProducts, setShowfeaturedProducts] = useState(false);
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products?limit=10",
    fetcher
  );

  function handleClick() {
    setShowfeaturedProducts(!showfeaturedProducts);
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <button onClick={handleClick}>Get More products</button>
      {showfeaturedProducts && (
        <section className="flex flex-wrap justify-center">
          {data.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </section>
      )}
    </>
  );
}
