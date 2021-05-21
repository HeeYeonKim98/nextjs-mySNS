import * as Constants from "../constants/constants";

export const loginAction = (data) => {
  return {
    type: Constants.LOG_IN,
    data,
  };
};

export const logoutAction = () => {
  return {
    type: Constants.LOG_OUT,
  };
};
