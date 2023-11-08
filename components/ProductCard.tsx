import React from "react";
import { Product } from "../types/products.type";
import styled from "styled-components";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  const currency = 'R'
  return (
    <ProductContainer>
      <Image
        src={product.image}
        width={200}
        height={200}
        alt={`picture of ${product.title}`}
      />
      <p>{`${product.title.slice(0,16)}...`}</p>
      <p>{currency}{product.price}</p>
    </ProductContainer>
  );
}

const ProductContainer = styled.figure`
height: 20rem;
  display: flex;
  flex-direction: column;
  max-width: 90%;
  align-items: center;
  overflow-x: scroll;
`;
