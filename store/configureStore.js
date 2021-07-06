import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(compose(applyMiddleware(...middlewares)));
  const store = createStore(rootReducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
