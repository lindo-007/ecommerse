import { Product } from "../types/products.type";
import { useEffect, useState } from "react";
import useCart from "../store/hooks/useCart";

type AddToCartProps = {
  product: Product;
  component?: "PRODUCT_CARD" | "CART_ITEM " | "PRODUCT_PAGE";
};

export default function AddToCart({ product }: AddToCartProps) {
  const { items, cartIsfull, isInCart, addToCart, removeFromCart } = useCart();

  const [removeButtonDisabled, setRemoveButtonDisabled] = useState(true);

  useEffect(() => {
    setRemoveButtonDisabled(!isInCart(product));
  }, [product, isInCart, items]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <>
      {/* {component === PRODUCT_CARD} */}
      {/* <button className="bg-blue-300 px-14 py-2 my-3" onClick={handleAddToCart}>
        Add To Cart
      </button> */}
      <div className=" flex items-end">
        <button
          className="bg-blue-300 py-3 px-5 my-3 mr-5 disabled:opacity-25 "
          disabled={cartIsfull}
          onClick={handleAddToCart}
        >
          +
        </button>
        <button
          className="bg-blue-300 py-3 px-5 my-3 disabled:opacity-25 "
          disabled={removeButtonDisabled}
          onClick={handleRemoveFromCart}
        >
          -
        </button>
      </div>
    </>
  );
}
