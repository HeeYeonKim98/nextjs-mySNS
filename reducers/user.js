import { userState } from "./initalState/initialState";
import * as Constants from "../constants/constants";

const reducer = (state = userState, action) => {
  switch (action.type) {
    case Constants.LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case Constants.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
