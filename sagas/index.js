import { all, fork } from "redux-saga/effects";

import userSaga from "./user";
import postSaga from "./post";

/**
 * rootSaga
 */
export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
