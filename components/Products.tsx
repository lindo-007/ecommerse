import React from "react";
import { styled } from "styled-components";
import { Product, Products } from "../types/products.type";
import ProductCard from "./ProductCard";

type ProductProps = {
  products: Products;
};
function DisplayProducts({ products }: ProductProps) {
  products.length;
  return (
    <ProductsContainer>
      <h2>products</h2>

      <ProductsSection>
        {products.map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </ProductsSection>
    </ProductsContainer>
  );
}

const ProductsSection = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 90%;
`;

export default DisplayProducts;
