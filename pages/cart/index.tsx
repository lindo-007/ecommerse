"use client";
import { useState, useEffect } from "react";
import { Product } from "../../types/products.type";
import CartItem from "../../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../types/store.type";
import styled from "styled-components";
import { Dispatch } from "redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../store/cart";

const currency = "R";

export default function Cart() {
  const { items } = useSelector((store: Store) => store.cart);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (items.length > 0) {
      handleQuantityChange("", items[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch: Dispatch = useDispatch();

  function handleQuantityChange(action: string, product: Product) {
    if (action === REMOVE_FROM_CART) {
      dispatch({ type: REMOVE_FROM_CART, payload: { product } });
    } else if (action === ADD_TO_CART) {
      dispatch({ type: ADD_TO_CART, payload: { product } });
    }

    const cost = items.reduce((total: number, item: Product) => {
      return total + Number(item.price) * Number(item.cartQuantity);
    }, 0);

    setTotalCost(() => cost);
  }

  return (
    <CartWrapper>
      <CartHeader>Cart</CartHeader>
      {items.length === 0 ? (
        <EmptyCartMessage>Nothing here</EmptyCartMessage>
      ) : (
        <>
          {items.map((item) => (
            <CartItem
              handleChange={handleQuantityChange}
              key={item?.id}
              product={item}
            />
          ))}
          <TotalCost>
            Total: {currency} {totalCost.toFixed(2)}
          </TotalCost>
        </>
      )}
    </CartWrapper>
  );
}

const CartWrapper = styled.section`
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
