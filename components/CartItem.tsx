import React from "react";
import { Product } from "../types/products.type";
import styled from "styled-components";
import Image from "next/image";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../store/cart";

type CartItemProps = {
  product: Product;
  handleChange: (action: string, product: Product) => void;
};

export default function CartItem({ product, handleChange }: CartItemProps) {
  return (
    <CartItemContainer>
      <h3>{product?.title.slice(0, 47)}</h3>
      <CartItemContent>
        <Image
          src={product?.image}
          width={50}
          height={50}
          alt={`picture of ${product?.title}`}
        />
        <p>{product.cartQuantity}</p>
        <p>R{product?.price}</p>
      </CartItemContent>
      <ChangeQuantity>
        <ActionButton onClick={() => handleChange(ADD_TO_CART, product)}>
          +
        </ActionButton>
        <ActionButton onClick={() => handleChange(REMOVE_FROM_CART, product)}>
          -
        </ActionButton>
      </ChangeQuantity>
    </CartItemContainer>
  );
}

const CartItemContent = styled.div`
  padding-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
`;

const CartItemContainer = styled.div`
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 5px 1px 0px rgba(215, 215, 215, 0.75);
`;

const ChangeQuantity = styled.div`
  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  margin: 1rem;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
