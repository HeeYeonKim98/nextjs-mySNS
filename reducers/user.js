import { userState } from "./initalState";
import * as Constants from "../constants";

const reducer = (state = userState, action) => {
  switch (action.type) {
    //? 로그인
    case Constants.LOG_IN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
      };
    case Constants.LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        user: action.data,
      };
    case Constants.LOG_IN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
      };

    //? 회원가입
    case Constants.SIGN_UP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
      };
    case Constants.SIGN_UP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: true,
      };
    case Constants.SIGN_UP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
      };

    //? 로그아웃
    case Constants.LOG_OUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
      };
    case Constants.LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        user: null,
      };
    case Constants.LOG_OUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
      };
    default:
      return state;
  }
};

export default reducer;
