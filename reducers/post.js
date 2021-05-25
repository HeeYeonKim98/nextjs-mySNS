import { postState, postDummy } from "./initalState/initialState";
import * as Constants from "../constants/constants";

const reducer = (state = postState, action) => {
  switch (action.type) {
    case Constants.ADD_POST:
      return {
        ...state,
        mainPosts: [postDummy, ...state.mainPosts],
        postAdded: true,
      };
    case Constants.ADD_COMMENT:
      return {
        ...state,
      };
    default: {
      return { ...state };
    }
  }
};

export default reducer;
