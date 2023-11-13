import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { Product } from "../types/products.type";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../store/cart";
import { CartState } from "../types/store.type";

type AddToCartProps = {
  product: Product;
};

export default function AddToCart({ product }: AddToCartProps) {
  const dispatch: Dispatch = useDispatch();
  const items = useSelector((state: CartState) => state.items);

  function isInCart() {
    const cartItems = items.filter((item) => item.id === product.id);

    const isInCart = cartItems.length > 0;
    console.log(cartItems, isInCart);

    return isInCart;
  }

  const handleAddToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: { product } });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: REMOVE_FROM_CART, payload: { product } });
  };

  return (
    <Cart>
      <ActionButton onClick={handleAddToCart}>+</ActionButton>
      <ActionButton disabled={!isInCart} onClick={handleRemoveFromCart}>
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
  margin: 1rem 1rem 1rem 0rem;
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
