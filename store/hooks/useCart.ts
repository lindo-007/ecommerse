import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../types/store.type";
import { useEffect, useState } from "react";
import { Product } from "../../types/products.type";
import { Dispatch } from "redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../cart";
import data from "../../data";

export default function useCart() {
  const { items } = useSelector((store: Store) => store.cart);
  const [totalCost, setTotalCost] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cartIsfull, setCartIsFull] = useState(false);
  const [cartIsEmpty, setCartIsEmpty] = useState(true);

  const dispatch: Dispatch = useDispatch();

  const addToCart = (product: Product) => {
    dispatch({ type: ADD_TO_CART, payload: { product } });
  };

  const removeFromCart = (product: Product) => {
    dispatch({ type: REMOVE_FROM_CART, payload: { product } });
  };

  function isInCart(product: Product) {
    return items.filter((item) => item.id === product.id).length > 0;
  }

  useEffect(() => {
    const totalItems = items.reduce((total: number, item: Product) => {
      return total + Number(item.cartQuantity);
    }, 0);

    const cost = items.reduce((total: number, item: Product) => {
      return total + Number(item.price) * Number(item.cartQuantity);
    }, 0);

    setTotalCost(cost);
    setNumberOfItems(totalItems);
    setCartIsEmpty(numberOfItems === 0);
    setCartIsFull(numberOfItems >= data.cartMax);
  }, [items, numberOfItems]);

  return {
    items,
    totalCost,
    numberOfItems,
    cartIsEmpty,
    cartIsfull,
    isInCart,
    addToCart,
    removeFromCart,
  };
}
