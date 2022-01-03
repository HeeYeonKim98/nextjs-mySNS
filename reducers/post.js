import * as Constants from "../constants";

import { commentDummy, postDummy, postState } from "./initalState";

const reducer = (state = postState, action) => {
  switch (action.type) {
    //? 게시글 조회
    case Constants.VIEW_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
      };
    case Constants.VIEW_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [postDummy, ...state.mainPosts],
        postAdded: true,
      };
    case Constants.VIEW_POST_FAILURE:
      return {
        addPostLoading: false,
        addPostError: action.error,
      };

    //? 게시글 추가
    case Constants.ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
      };
    case Constants.ADD_POST_SUCCESS:
      return {
        ...state,
        addPostLoading: false,
        addPostDone: true,
        mainPosts: [postDummy(action.data), ...state.mainPosts],
      };
    case Constants.ADD_POST_FAILURE:
      return {
        addPostLoading: false,
        addPostError: action.error,
      };

    //? 게시글 삭제
    case Constants.DELETE_POST_REQUEST:
      return {
        ...state,
        deletePostLoading: true,
      };
    case Constants.DELETE_POST_SUCCESS:
      return {
        ...state,
        deletePostLoading: false,
        deletePostDone: true,
        mainPosts: state.mainPosts.filter(
          (value) => value.id !== action.data.id
        ),
      };
    case Constants.DELETE_POST_FAILURE:
      return {
        deletePostLoading: false,
        deletePostError: action.error,
      };

    //? 댓글 추가
    case Constants.ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
      };
    case Constants.ADD_COMMENT_SUCCESS: {
      const post = state.mainPosts.find((value) => value.id === action.data.id);
      post.Comments = [commentDummy(action.data), ...post.Comments];
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    }
    case Constants.ADD_COMMENT_FAILURE:
      return {
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default: {
      return { ...state };
    }
  }
};

export default reducer;
