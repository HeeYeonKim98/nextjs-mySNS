import * as Constants from "../constants";

export const loginRequestAction = (data) => {
  return {
    type: Constants.LOG_IN_REQUEST,
    data,
  };
};

export const logoutRequestAction = () => {
  return {
    type: Constants.LOG_OUT_REQUEST,
  };
};
