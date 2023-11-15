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
    <div className="flex  my-5 justify-between  ">
      <div className="flex items-center justify-center ">
        <Image
          src={product?.image}
          width={50}
          height={50}
          alt={`picture of ${product?.title}`}
        />
      </div>
      <div className="flex-1 ml-5">
        <h3 className="text-xl text-blue-300">{product?.title}</h3>
        <p>{product.cartQuantity} {product.cartQuantity > 1 ? 'Items' : 'Item'}</p>
        <p>R{product?.price}</p>
      </div>

      <div className="">
        <AddToCart product={product} />
      </div>
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
