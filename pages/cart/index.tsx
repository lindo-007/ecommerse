"use client";
import { useState, useEffect } from "react";
import { Product } from "../../types/products.type";
import CartItem from "../../components/CartItem";
import { useSelector } from "react-redux";
import { Store } from "../../types/store.type";
import styled from "styled-components";

const currency = "R";

export default function Cart() {
  const { items } = useSelector((store: Store) => store.cart);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const cost = items.reduce((total: number, item: Product) => {
      return total + Number(item.price) * Number(item.cartQuantity);
    }, 0);
    setTotalCost(cost);
  }, [items]);

  return (
    <section className="flex flex-col justify-between w-11/12">
      <h2 className="text-2xl text-blue-300">Cart</h2>
      {items.length === 0 ? (
        <div>Nothing here</div>
      ) : (
        <section className="flex flex-col">
          {items.map((item) => (
            <CartItem key={item?.id} product={item} />
          ))}
          <p>
            Total: {currency} {totalCost.toFixed(2)}
          </p>
        </section>
      )}
    </section>
  );
}

const CartContainer = styled.section`
  /* display: flex;
  flex-direction: column;
  flex: 1; */
`;

const CartHeader = styled.h2`
  /* font-size: 1.5rem;
  margin-bottom: 1rem; */
`;

const EmptyCartMessage = styled.div`
  /* font-size: 1rem;
  margin: 2rem 0;
  color: #555; */
`;

const TotalCost = styled.p`
  /* font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem; */
`;
