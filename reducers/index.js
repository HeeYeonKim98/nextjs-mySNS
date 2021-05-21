import { combineReducers } from "redux";
import HYDRATE from "next-redux-wrapper";

import User from "./User";
import Post from "./Post";

/**
 *
 * @param {prev state} state
 * @param {action} action
 */
const rootReducer = combineReducers({
  //? server side rendering을 위해 필요한 index(HYDRATE)
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  User,
  Post,
});

export default rootReducer;
