import { CartAction, CartState } from "../types/store.type";
import { Product } from "../types/products.type";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const initialState: CartState = {
  items: [],
};

function addToCart(state: CartState, product: Product) {
  if (state.items.length < 1) return [{ ...product, cartQuantity: 1 }];

  let newItem = true;
  const itemsInCart = state.items.map((item) => {
    if (item?.id === product.id) {
      newItem = false;
      return {
        ...item,
        cartQuantity: item.cartQuantity + 1,
      };
    }
    return item;
  });

  if (newItem) {
    itemsInCart.push({
      ...product,
      cartQuantity: 1,
    });
  }

  return itemsInCart;
}

function removeFromCart(state: CartState, product: Product) {
  if (state.items.length < 1) return [];

  const itemsInCart = state.items
    .map((item) => {
      if (item?.id === product.id) {
        if (item.cartQuantity === 1) return;

        return {
          ...item,
          cartQuantity: item.cartQuantity - 1,
        };
      }
      return item;
    })
    .filter((item) => item !== undefined);

  return itemsInCart;
}

const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: addToCart(state, action.payload.product),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: removeFromCart(state, action.payload.product),
      };

    default:
      return state;
  }
};

export default cartReducer;
