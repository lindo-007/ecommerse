import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { Product, Products } from "../types/products.type";
import { Store } from "../types/store.type";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../store/cart";

type AddToCartProps = {
  product: Product;
};
export default function AddToCart({ product }: AddToCartProps) {
  const dispatch: Dispatch = useDispatch();

  const cartItems: Products = useSelector((store: Store) => store.cart.items);

  function isInCart(product: Product) {
    return cartItems.filter((item) => item?.id === product.id).length > 0;
  }

  function handleAddProduct(product: Product) {
    dispatch({ type: ADD_TO_CART, payload: { product: product } });
  }

  function handleRemoveProduct(product: Product) {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { product: product },
    });
  }
  return (
    <Cart>
      <button onClick={() => handleAddProduct(product)}>+</button>
      add to cart
      <button
        disabled={!isInCart(product)}
        onClick={() => handleRemoveProduct(product)}
      >
        -
      </button>
    </Cart>
  );
}
const Cart = styled.div``;
