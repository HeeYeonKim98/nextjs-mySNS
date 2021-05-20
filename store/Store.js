import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

const Store = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(compose(applyMiddleware(...middlewares)));
  const store = createStore(rootReducer, enhancer);
  return store;
};

const wrapper = createWrapper(Store, { debug: process.env.NODE_ENV === "development" });

export default wrapper;
