import { CartAction, CartState } from "../types/store.type";
import { Product } from "../types/products.type";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const initialState: CartState = {
  items: [],
};

function addToCart(state: CartState, product: Product) {
  const existingItem = state.items.find((item) => item?.id === product.id);

  if (existingItem) {
    const newData = state.items.map((item) =>
    item?.id === product.id
    ? { ...item, cartQuantity: item.cartQuantity + 1 }
    : item
    );
    Object.assign(state.items, newData);

    return {
      ...state,
      items: newData,
    };
  }

  return {
    ...state,
    items: [...state.items, { ...product, cartQuantity: 1 }],
  };
}

function removeFromCart(state: CartState, product: Product) {
  return {
    ...state,
    items: state.items
      .map((item) =>
        item?.id === product.id
          ? { ...item, cartQuantity: item.cartQuantity - 1 }
          : item
      )
      .filter((item) => item !== undefined && item.cartQuantity !== 0),
  };
}

const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload.product);
    case REMOVE_FROM_CART:
      return removeFromCart(state, action.payload.product);
    default:
      return state;
  }
};

export default cartReducer;
