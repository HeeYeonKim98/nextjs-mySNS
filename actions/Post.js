import * as Constants from "../constants/constants";

export const postAction = (data) => {
  return {
    type: Constants.POST,
    data,
  };
};
