import React from "react";
import styled from "styled-components";
import { Products } from "../types/products.type";
import ProductCard from "./ProductCard";

type ProductProps = {
  products: Products;
};

function DisplayProducts({ products }: ProductProps) {
  return (
    <section>
      <h2>Products</h2>
      <section>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </section>
  );
}

const ProductsSection = styled.section`
  /* display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center; */
`;

const ProductsContainer = styled.section`
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 90%;
  padding: 2rem; */
`;

const ProductsHeader = styled.h2`
  /* text-transform: capitalize; */
`;

export default DisplayProducts;
