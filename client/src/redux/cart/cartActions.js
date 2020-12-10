import * as actionTypes from "./cartTypes";

export const addToCart = (item) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: item,
  };
};

export const adjusQuantity = (id, qty) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: id,
    qty,
  };
};
