'use client'
import  { useState, useEffect } from "react";
import { Products } from "../../types/products.type";
import CartItem from "../../components/CartItem";
import { useSelector } from "react-redux";
import { Store } from "../../types/store.type";
import styled from "styled-components";

const currency = "R";

export default function Cart() {
  const cartItems: Products = useSelector((store: Store) => store.cart.items);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setTotalCost(
      cartItems.reduce((total, item) => total + Number(item.cartQuantity), 0)
    );
  }, [cartItems]);

  return (
    <CartWrapper>
      <CartHeader>Cart</CartHeader>
      {cartItems.length === 0 ? (
        <EmptyCartMessage>Nothing here</EmptyCartMessage>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item?.id} product={item} />
          ))}
          <TotalCost>Total: {currency} {totalCost}</TotalCost>
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

const CartHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const EmptyCartMessage = styled.div`
  font-size: 1rem;
  margin: 2rem 0;
  color: #555;
`;

const TotalCost = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
`;
