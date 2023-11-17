"use client";
import { useState, useEffect } from "react";
import { Product } from "../../types/products.type";
import CartItem from "../../components/CartItem";
import { useSelector } from "react-redux";
import { Store } from "../../types/store.type";
import { FaShoppingCart } from "react-icons/fa";
import data from "../../data";

export default function Cart() {
  const { items } = useSelector((store: Store) => store.cart);
  const [totalCost, setTotalCost] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);

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

  return (
    <section className="flex flex-col justify-between w-full ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-blue-300 p-5">Cart</h2>
        {numberOfItems === 9 && (
          <div className="text-red-600 text-2xl p-5"> cart is full</div>
        )}
      </div>
      {items.length === 0 ? (
        <div className="flex flex-1 items-center justify-center">
          <FaShoppingCart size={120} />
        </div>
      ) : (
        <>
          <section className="flex-1 flex flex-col  mx-4">
            {items.map((item) => (
              <CartItem key={item?.id} product={item} />
            ))}
          </section>
          <div className="flex p-5 text-xl text-blue-300 justify-between">
            <p className="">
              Total:
              <span className="text-black">
                {" " + data.currency}
                {totalCost.toFixed(2)}
              </span>
            </p>
            <p className="text-black">
              {numberOfItems} <span>items</span>
            </p>
          </div>
        </>
      )}
    </section>
  );
}
