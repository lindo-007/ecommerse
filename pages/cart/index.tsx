import React from "react";
import { Products } from "../../types/products.type";
import CartItem from "../../components/CartItem";
import { useSelector } from "react-redux";
import { Store } from "../../types/store.type";

// make currency global

export default function Cart() {
  const cartItems: Products = useSelector((store :Store)=> store.cart.items);
  
  return (
    <div>
      <h2>cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
      <p>total = R 0:00</p>
    </div>
  );
}
