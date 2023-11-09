import { type } from "os";
import { CartAction, CartState } from "../types/store.type";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const initialState: CartState = {
  items: [],
};

type

const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload,action],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.product.id),
      };

    default:
      return state;
  }
};

export default cartReducer;
