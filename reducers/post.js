import * as Constants from "../constants";

import { commentDummy, postDummy, postState } from "./initalState";

import produce from "immer";

const reducer = (state = postState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      //? 게시글 조회
      case Constants.VIEW_POST_REQUEST:
        draft.viewPostLoading = true;
        break;
      case Constants.VIEW_POST_SUCCESS:
        draft.viewPostLoading = false;
        // draft.mainPosts;
        break;
      case Constants.VIEW_POST_FAILURE:
        draft.viewPostLoading = false;
        draft.viewPostError = action.error;
        break;

      //? 게시글 추가
      case Constants.ADD_POST_REQUEST:
        draft.addPostLoading = true;
        break;
      case Constants.ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(postDummy(action.data));
        break;
      case Constants.ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      //? 게시글 삭제
      case Constants.DELETE_POST_REQUEST:
        draft.deletePostLoading = true;
        break;
      case Constants.DELETE_POST_SUCCESS:
        draft.deletePostLoading = false;
        draft.deletePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(
          (value) => value.id !== action.data.id
        );
        break;
      case Constants.DELETE_POST_FAILURE:
        draft.deletePostLoading = false;
        draft.deletePostError = action.error;
        break;

      //? 댓글 추가
      case Constants.ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        break;
      case Constants.ADD_COMMENT_SUCCESS:
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        const post = draft.mainPosts.find(
          (value) => value.id === action.data.postId
        );
        post.Comments.unshift(commentDummy(action.data.content));
        break;
      case Constants.ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;
