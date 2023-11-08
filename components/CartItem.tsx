import React from "react";
import { Product, Products } from "../types/products.type";
import styled from "styled-components";
import Image from "next/image";

type CartItemProps = {
  product: Product;
};


export default function CartItem({ product }: CartItemProps) {
  return (
    <CartItemWrapper>
      <h3>{product.title.slice(0,47)}</h3>
      <Image
        src={product.image}
        width={50}
        height={50}
        alt={`picture of ${product.title}`}
      />
      <p>1</p>
      <p>{product.price}</p>

    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 5px 5px 1px 0px rgba(202, 199, 199, 0.75);
`;
