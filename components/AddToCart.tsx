import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { Product } from "../types/products.type";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../store/cart";
import { Store } from "../types/store.type";
import { useEffect, useState } from "react";

type AddToCartProps = {
  product: Product;
};

const cartLimit = 20;

export default function AddToCart({ product }: AddToCartProps) {
  const dispatch: Dispatch = useDispatch();
  const items = useSelector((store: Store) => store.cart.items);
  const [isRemoveDisabled, setIsRemoveDisabled] = useState(true);
  const [isAddDisabled, setIsAddDisabled] = useState(true);

  useEffect(() => {
    function isInCart(product: Product) {
      return items.filter((item) => item.id === product.id).length > 0;
    }
    function countItemsInCart() {
      return items.reduce((total, item) => {
        return total + item.cartQuantity;
      }, 0);
    }
    setIsRemoveDisabled(!isInCart(product));

    setIsAddDisabled(countItemsInCart() >= 20);
  }, [items, product]);

  const handleAddToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: { product } });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: REMOVE_FROM_CART, payload: { product } });
  };

  return (
    <div className="w-14 flex justify-between">
       <button className="bg-blue-300 py-3 px-5 my-3 mr-5"  disabled={isAddDisabled} onClick={handleAddToCart}>
        +
      </button>
      <button className="bg-blue-300 py-3 px-5 my-3 mr-5"  disabled={isRemoveDisabled} onClick={handleRemoveFromCart}>
        -
      </button>
    </div>
  );
}

const Cart = styled.div`
  /* display: flex;
  align-items: center; */
`;

const ActionButton = styled.button`
  /* margin: 1rem 1rem 1rem 0rem;
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
