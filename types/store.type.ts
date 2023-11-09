import { Product, Products } from "./products.type";

export type Store = {
  cart: CartState;
};

export type CartState = {
  items: Products;
};

export type CartAction = {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART";
  payload: { product: Product };
};
