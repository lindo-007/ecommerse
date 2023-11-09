import React from "react";
import { Product, Products } from "../types/products.type";
import styled from "styled-components";
import Image from "next/image";
import AddToCart from "./AddToCart";

type CartItemProps = {
  product: Product;
};

export default function CartItem({ product }: CartItemProps) {
  return (
    <CartItemWrapper>
      <h3>{product?.title.slice(0, 47)}</h3>
      <Image
        src={product?.image}
        width={50}
        height={50}
        alt={`picture of ${product?.title}`}
      />
      <p>{product.cartQuantity}</p>
      <p>{product?.price}</p>
      <AddToCart product={product}></AddToCart>
    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.div`
  padding-bottom:1rem ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 5px 5px 1px 0px rgba(202, 199, 199, 0.75);
`;
