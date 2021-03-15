import {
  GOOGLE_LOGIN_ERROR,
  GOOGLE_LOGIN_STARTED,
  GOOGLE_LOGIN_SUCCESS,
} from "./userTypes";

const INITIAL_STATE = {
  user: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOOGLE_LOGIN_STARTED:
      return { ...state, user: null };
    case GOOGLE_LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case GOOGLE_LOGIN_ERROR:
      console.log(action.payload);
      return { ...state, user: null };
    default:
      return state;
  }
};
