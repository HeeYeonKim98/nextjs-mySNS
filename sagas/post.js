/**
 * @module Sagas/Post
 * @desc Post
 */

import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import * as Constants from "../constants";

/**
 * @desc Post/add
 */
function addPostAPI(data) {
  return axios.post("/api/post/add", data);
}

function* addPost(action) {
  const res = yield call(addPostAPI, action.data);
  try {
    yield put({
      type: "ADD_POST_SUCCESS",
      data: res.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.message,
    });
  }
}

//? 비동기 action creator(직접 실행이 아닌 이벤트 리스너 같은 역할)
function* watchAddPost() {
  yield takeLatest(Constants.ADD_POST_REQUEST, addPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
