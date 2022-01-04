import * as Constants from "../constants";

import { userDummy, userState } from "./initalState";

import produce from "immer";

//! 비동기 요청은 3가지씩 1쌍 (request-success-failure)
const reducer = (state = userState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      //? 로그인
      case Constants.LOG_IN_REQUEST:
        draft.loginLoading = true;
        break;
      case Constants.LOG_IN_SUCCESS:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.user = userDummy(action.data);
        break;
      case Constants.LOG_IN_FAILURE:
        draft.loginLoading = false;
        draft.loginError = action.error;
        break;

      //? 회원가입
      case Constants.SIGN_UP_REQUEST:
        draft.signupLoading = true;
        break;
      case Constants.SIGN_UP_SUCCESS:
        draft.signupLoading = false;
        draft.signupDone = true;
        break;
      case Constants.SIGN_UP_FAILURE:
        draft.signupLoading = false;
        draft.signupError = action.error;
        break;

      //? 로그아웃
      case Constants.LOG_OUT_REQUEST:
        draft.logoutLoading = true;
        break;
      case Constants.LOG_OUT_SUCCESS:
        draft.logoutLoading = false;
        draft.loginDone = false;
        draft.user = null;
        break;
      case Constants.LOG_OUT_FAILURE:
        draft.logoutLoading = false;
        draft.logoutError = action.error;
        break;

      //? 게시물 수 증가
      case Constants.ADD_POST_COUNT:
        draft.user.Posts.unshift({ id: action.data });
        break;

      //? 게시물 수 감소
      case Constants.DELETE_POST_COUNT:
        draft.user.Posts = draft.user.Posts.filter(
          (value) => value.id !== action.data.id
        );
        break;

      default:
        break;
    }
  });

export default reducer;
