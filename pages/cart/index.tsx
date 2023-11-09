"use client";

import React, { useState } from "react";
import { Products } from "../../types/products.type";
import CartItem from "../../components/CartItem";
import { useSelector } from "react-redux";
import { Store } from "../../types/store.type";
import styled from "styled-components";

// make currency global

export default function Cart() {
  const cartItems: Products = useSelector((store: Store) => store.cart.items);
  const [totalCost, setTotalCost] = useState(0);

  function getTotalCost() {
    setTotalCost(
      cartItems.reduce((total, item) => total + Number(item.cartQuantity), 0)
    );
  }

  return (
    <CartWrapper>
      <h2>cart</h2>
      {cartItems.length === 0 ? (
        <div>nothing here</div>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item?.id} product={item} />
          ))}
          <p>total = R {totalCost}</p>
        </>
      )}
    </CartWrapper>
  );
}

const CartWrapper = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
`;
