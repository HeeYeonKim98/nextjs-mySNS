import * as Constants from "../constants";

export const loginRequestAction = (data) => ({
  type: Constants.LOG_IN_REQUEST,
  data,
});

export const signUpRequestAction = (data) => ({
  type: Constants.SIGN_UP_REQUEST,
  data,
});

export const logoutRequestAction = () => ({
  type: Constants.LOG_OUT_REQUEST,
});
