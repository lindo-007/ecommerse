import React from "react";
import { Product } from "../types/products.type";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { ADD_TO_CART } from "../store/cart";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const currency = "R";

  const dispatch: Dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: { product } });
  };

  return (
    <div>
      <Link href={`/product/${product.id}`}>
        <div>
          <Image
            src={product.image}
            width={200}
            height={200}
            alt={`picture of ${product.title}`}
          />
          <p>{`${product.title.slice(0, 16)}...`}</p>
          <p>
            {currency}
            {product.price}
          </p>
        </div>
      </Link>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
}

const AddToCartButton = styled.button`
  /* padding: 0.5rem 1rem; */
  /* color: #e28743; */
  /* background-color:#eeeee4; */
`
const ProductContent = styled.div``;

const ProductContainer = styled.figure`
  /* height: 20rem;
  display: flex;
  flex-direction: column;
  max-width: 90%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
  margin: 2rem; */
`;
