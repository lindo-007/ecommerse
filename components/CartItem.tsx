import React from "react";
import { Product } from "../types/products.type";
import styled from "styled-components";
import Image from "next/image";
import AddToCart from "./AddToCart";

type CartItemProps = {
  product: Product;
};

export default function CartItem({ product }: CartItemProps) {
  return (
    <div>
      <h3>{product?.title.slice(0, 47)}</h3>
      <div>
        <Image
          src={product?.image}
          width={50}
          height={50}
          alt={`picture of ${product?.title}`}
        />
        <p>{product.cartQuantity}</p>
        <p>R{product?.price}</p>
      </div>
      <AddToCart product={product} />
    </div>
  );
}

const CartItemContent = styled.div`
  /* padding-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%; */
`;

const CartItemContainer = styled.div`
  /* padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 5px 1px 0px rgba(215, 215, 215, 0.75); */
`;

const ChangeQuantity = styled.div`
  /* display: flex;
  align-items: center; */
`;

const ActionButton = styled.button`
  /* margin: 1rem;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  } */
`;
