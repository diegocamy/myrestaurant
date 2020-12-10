import * as actionTypes from "./cartTypes";

const INITIAL_STATE = {
  cart: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //check if item is already in cart
      const exist = state.includes(action.payload.id);

      if (!exist) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) =>
            item.id === action.payload.id
              ? { ...item, qty: (item.qty += 1) }
              : item
          ),
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case actionTypes.ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.filter((item) => {
          if (item.qty + action.qty >= 1) {
            return { ...item, qty: (item.qty += action.qty) };
          }

          return item;
        }),
      };

    default:
      return state;
  }
};
