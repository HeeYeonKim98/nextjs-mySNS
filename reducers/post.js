import { postState, dummyPost } from "./initalState/initialState";
import * as Constants from "../constants/constants";

const reducer = (state = postState, action) => {
  switch (action.type) {
    case Constants.ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
