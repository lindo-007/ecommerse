"use client";
import CartItem from "../../components/CartItem";
import { FaShoppingCart } from "react-icons/fa";
import data from "../../data";
import useCart from "../../store/hooks/useCart";

export default function Cart() {
  const { items, totalCost, numberOfItems } = useCart();

  return (
    <section className="flex flex-col justify-between w-full ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-blue-300 p-5">Cart</h2>
        {numberOfItems === 9 && (
          <div className="text-red-600 text-2xl p-5"> cart is full</div>
        )}
      </div>
      {numberOfItems === 0 ? (
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
