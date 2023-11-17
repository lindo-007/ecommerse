import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { Product } from "../types/products.type";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../store/cart";
import { Store } from "../types/store.type";
import { useEffect, useState } from "react";
import data from "../data";
import useCart from "../store/hooks";

type AddToCartProps = {
  product: Product;
};

export default function AddToCart({ product }: AddToCartProps) {
  const { items, numberOfItems,isInCart } = useCart();
  const dispatch: Dispatch = useDispatch();
  
  const [isRemoveDisabled, setIsRemoveDisabled] = useState(true);
  const [isAddDisabled, setIsAddDisabled] = useState(true);

  useEffect(() => {
    setIsRemoveDisabled(!isInCart(product));
    setIsAddDisabled(numberOfItems >= data.cartMax);
  }, [items, product, numberOfItems,isInCart]);

  const handleAddToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: { product } });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: REMOVE_FROM_CART, payload: { product } });
  };

  return (
    <div className=" flex items-end">
      <button
        className="bg-blue-300 py-3 px-5 my-3 mr-5 disabled:opacity-25 "
        disabled={isAddDisabled}
        onClick={handleAddToCart}
      >
        +
      </button>
      <button
        className="bg-blue-300 py-3 px-5 my-3 disabled:opacity-25 "
        disabled={isRemoveDisabled}
        onClick={handleRemoveFromCart}
      >
        -
      </button>
    </div>
  );
}
