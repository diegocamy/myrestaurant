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
    payload: id,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: actionTypes.INCREASE_QUANTITY,
    payload: id,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: actionTypes.DECREASE_QUANTITY,
    payload: id,
  };
};
