import * as Constants from "../constants";

export const addPostRequestAction = (data) => ({
  type: Constants.ADD_POST_REQUEST,
  data,
});

export const deletePostRequestAction = (data) => ({
  type: Constants.DELETE_POST_REQUEST,
  data,
});

export const addCommentRequestAction = (data) => ({
  type: Constants.ADD_COMMENT_REQUEST,
  data,
});
