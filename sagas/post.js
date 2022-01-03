/**
 * @module Sagas/Post
 * @desc Post
 */

import * as Constants from "../constants";

import { all, fork, put, takeLatest } from "redux-saga/effects";

// import axios from "axios"; // call import
import shortid from "shortid";

/**
 * @desc Post/add
 */
// function addPostAPI(data) {
//   return axios.post("/api/post/add", data);
// }

function* addPost(action) {
  // const res = yield call(addPostAPI, action.data);
  const id = shortid.generate();
  try {
    yield put({
      type: Constants.ADD_POST_SUCCESS,
      data: { id, content: action.data },
    });
    yield put({
      type: Constants.ADD_POST_COUNT,
      data: id,
    });
  } catch (err) {
    yield put({
      type: Constants.ADD_POST_FAILURE,
      data: err.message,
    });
  }
}

/**
 * @desc Post/add
 */
// function deletePostAPI(data) {
//   return axios.post("/api/post/delete", data);
// }

function* deletePost(action) {
  // const res = yield call(addPostAPI, action.data);
  try {
    yield put({
      type: Constants.DELETE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: Constants.DELETE_POST_COUNT,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: Constants.DELETE_POST_FAILURE,
      data: err.message,
    });
  }
}

// function addCommentAPI(data) {
//   return axios.post("/api/post/comment/add", data);
// }

function* addComment(action) {
  // const res = yield call(addCommentAPI, action.data);
  try {
    yield put({
      type: Constants.ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: Constants.ADD_COMMENT_FAILURE,
      data: err.message,
    });
  }
}

//? 비동기 action creator(직접 실행이 아닌 이벤트 리스너 같은 역할)
function* watchAddPost() {
  yield takeLatest(Constants.ADD_POST_REQUEST, addPost);
}

function* watchDeletePost() {
  yield takeLatest(Constants.DELETE_POST_REQUEST, deletePost);
}

function* watchAddComment() {
  yield takeLatest(Constants.ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchDeletePost), fork(watchAddComment)]);
}
