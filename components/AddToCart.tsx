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

  const isInCart = cartItems.some((item) => item?.id === product.id);

  const handleAddToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: { product } });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: REMOVE_FROM_CART, payload: { product } });
  };

  return (
    <Cart>
      <ActionButton onClick={handleAddToCart}>+</ActionButton>
      <span>Add to Cart</span>
      <ActionButton onClick={handleRemoveFromCart} disabled={!isInCart}>
        -
      </ActionButton>
    </Cart>
  );
}

const Cart = styled.div`
  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem;
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
