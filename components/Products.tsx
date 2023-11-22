import React from "react";
import { Products } from "../types/products.type";
import ProductCard from "./ProductCard";

type ProductProps = {
  products: Products;
};

function DisplayProducts({ products }: ProductProps) {
  return (
    <section className="flex-col ">
      <h2 className="text-2xl text-blue-300 p-5">Products</h2>
      <section className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </section>
  );
}

export default DisplayProducts;
