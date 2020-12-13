import * as actionTypes from "./cartTypes";

const INITIAL_STATE = {
  cart: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //check if item is already in cart
      const exist = state.cart.find((item) => item.id === action.payload.id);

      if (!exist) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => {
            if (item.id === action.payload.id) {
              return { ...item, qty: item.qty++ };
            }

            return item;
          }),
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case actionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        }),
      };
    case actionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            if (item.qty > 1) {
              return { ...item, qty: item.qty - 1 };
            }
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
