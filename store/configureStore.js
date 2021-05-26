import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "../reducers";

const ConfigureStore = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(compose(applyMiddleware(...middlewares)));
  const store = createStore(rootReducer, enhancer);
  return store;
};

const wrapper = createWrapper(ConfigureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
