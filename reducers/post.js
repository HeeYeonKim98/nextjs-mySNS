import { postState, postDummy } from "./initalState";
import * as Constants from "../constants";

const reducer = (state = postState, action) => {
  switch (action.type) {
    //? 게시글 추가
    case Constants.ADD_POST_REQUEST:
      return {
        ...state,
        mainPosts: [postDummy, ...state.mainPosts],
        postAdded: true,
      };
    case Constants.ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [postDummy, ...state.mainPosts],
        postAdded: true,
      };
    case Constants.ADD_POST_FAILURE:
      return {
        ...state,
        mainPosts: [postDummy, ...state.mainPosts],
        postAdded: true,
      };

    //? 댓글 추가
    case Constants.ADD_COMMENT_REQUEST:
      return {
        ...state,
        isCommented: true,
      };
    case Constants.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isCommented: true,
      };
    case Constants.ADD_COMMENT_FAILURE:
      return {
        ...state,
        isCommented: true,
      };
    default: {
      return { ...state };
    }
  }
};

export default reducer;
