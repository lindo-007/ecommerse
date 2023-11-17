import { useSelector } from "react-redux";
import { Store } from "../../types/store.type";
import { useEffect, useState } from "react";
import { Product } from "../../types/products.type";

export default function useCart() {
  const { items } = useSelector((store: Store) => store.cart);
  const [totalCost, setTotalCost] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [isfull, setIsFull] = useState(false);

  function isInCart(product: Product) {
      return items.filter((item) => item.id === product.id).length > 0;
    }

  useEffect(() => {

    let totalItems = items.reduce((total: number, item: Product) => {
      return total + Number(item.cartQuantity);
    }, 0);

    const cost = items.reduce((total: number, item: Product) => {
      return total + Number(item.price) * Number(item.cartQuantity);
    }, 0);
    setTotalCost(cost);
    setNumberOfItems(totalItems);
  }, [items]);

  

  return { items, totalCost, numberOfItems, isfull, isInCart };
}

