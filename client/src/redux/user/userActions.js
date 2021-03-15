import api from "../../api/axios";
import {
  GOOGLE_LOGIN_ERROR,
  GOOGLE_LOGIN_STARTED,
  GOOGLE_LOGIN_SUCCESS,
} from "./userTypes";

export const loginWithGoogle = (history, tokenId) => async (dispatch) => {
  try {
    dispatch({ type: GOOGLE_LOGIN_STARTED, payload: null });
    await api.post("/user/googlelogin", { tokenId });
    const { data: user_id } = await api.get("/user/me");
    dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload: user_id });
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GOOGLE_LOGIN_ERROR,
      payload: error.response.data.message,
    });
  }
};
