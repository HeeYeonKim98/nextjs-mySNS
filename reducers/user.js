import * as Constants from "../constants";

import { userDummy, userState } from "./initalState";

//! 비동기 요청은 3가지씩 1쌍 (request-success-failure)
const reducer = (state = userState, action) => {
  switch (action.type) {
    //? 로그인
    case Constants.LOG_IN_REQUEST:
      return {
        ...state,
        loginLoading: true,
      };
    case Constants.LOG_IN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginDone: true,
        user: {
          ...action.data,
          ...userDummy,
        },
      };
    case Constants.LOG_IN_FAILURE:
      return {
        loginLoading: false,
        loginError: action.error,
      };

    //? 회원가입
    case Constants.SIGN_UP_REQUEST:
      return {
        ...state,
        signupLoading: true,
      };
    case Constants.SIGN_UP_SUCCESS:
      return {
        ...state,
        signupLoading: false,
        signupDone: true,
      };
    case Constants.SIGN_UP_FAILURE:
      return {
        signupLoading: false,
        signupError: action.error,
      };

    //? 로그아웃
    case Constants.LOG_OUT_REQUEST:
      return {
        ...state,
        logoutLoading: true,
      };
    case Constants.LOG_OUT_SUCCESS:
      return {
        ...state,
        logoutLoading: false,
        loginDone: false,
        user: null,
      };
    case Constants.LOG_OUT_FAILURE:
      return {
        logoutLoading: false,
        logoutError: action.error,
      };

    //? 게시물 수 증가
    case Constants.ADD_POST_COUNT:
      return {
        ...state,
        user: {
          ...state.user,
          Posts: [{ id: action.data }, ...state.user.Posts],
        },
      };

    //? 게시물 수 감소
    case Constants.DELETE_POST_COUNT:
      return {
        ...state,
        user: {
          ...state.user,
          Posts: state.user.Posts.filter(
            (value) => value.id !== action.data.id
          ),
        },
      };

    //? default
    default:
      return state;
  }
};

export default reducer;
