import { Product } from "../types/products.type";
import { useEffect, useState } from "react";
import useCart from "../store/hooks/useCart";

type AddToCartProps = {
  product: Product;
  type: "TOGGLE" | "ADD";
};

export default function AddToCart({ product, type }: AddToCartProps) {
  const { items, cartIsfull, isInCart, addToCart, removeFromCart } = useCart();

  const [addButtonDisabled, setAddButtonDisabled] = useState(true);

  const [removeButtonDisabled, setRemoveButtonDisabled] = useState(true);

  useEffect(() => {
    setRemoveButtonDisabled(!isInCart(product));
    setAddButtonDisabled(isInCart(product) || cartIsfull);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  if (type === "ADD") {
    return (
      <button
        className="bg-blue-300 w-full py-2 my-3 disabled:opacity-25"
        onClick={handleAddToCart}
        disabled={addButtonDisabled}
      >
        {cartIsfull
          ? "Cart Is Full"
          : isInCart(product)
          ? "Added"
          : "Add To Cart"}
      </button>
    );
  }

  return (
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
  );
}
