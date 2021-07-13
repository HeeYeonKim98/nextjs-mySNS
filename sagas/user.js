/**
 * @module Sagas/User
 * @desc User
 */

import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import * as Constants from "../constants";

/**
 * @desc User/login
 */
function loginAPI(data) {
  return axios.post("/api/user/login", data);
}

function* login(action) {
  try {
    const res = yield call(loginAPI, action.data);
    yield put({
      type: Constants.LOG_IN_SUCCESS,
      data: res.data,
    });
  } catch (err) {
    yield put({
      type: Constants.LOG_IN_FAILURE,
      data: err.message,
    });
  }
}

/**
 * @desc User/signup
 */
function signUpAPI(data) {
  return axios.post("/api/user/signup", data);
}

function* signUp(action) {
  try {
    const res = yield call(signUpAPI, action.data);
    yield;
    yield put({
      type: Constants.SIGN_UP_SUCCESS,
      data: res.data.message,
    });
  } catch (err) {
    yield put({
      type: Constants.SIGN_UP_FAILURE,
      data: err.message,
    });
  }
}

/**
 * @desc User/logout
 */
function logoutAPI(data) {
  return axios.post("/api/user/logout", data);
}

function* logout() {
  const res = yield call(logoutAPI);
  try {
    yield put({
      type: Constants.LOG_OUT_SUCCESS,
      data: res.data,
    });
  } catch (err) {
    yield put({
      type: Constants.LOG_OUT_FAILURE,
      data: err.message,
    });
  }
}

//? 비동기 action creator(직접 실행이 아닌 이벤트 리스너 같은 역할)
function* watchLogin() {
  yield takeLatest(Constants.LOG_IN_REQUEST, login);
}

function* watchSignUp() {
  yield takeLatest(Constants.SIGN_UP_REQUEST, signUp);
}

function* watchLogout() {
  yield takeLatest(Constants.LOG_OUT_REQUEST, logout);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchSignUp)]);
}
