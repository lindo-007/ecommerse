import React from "react";
import ProductCard from "./ProductCard";
import useSWR from "swr";
import fetcher from "../helper/API";
import { Product } from "../types/products.type";

export default function ProductList() {
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <section className="flex flex-wrap justify-center">
      {data.map((product:Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
}
