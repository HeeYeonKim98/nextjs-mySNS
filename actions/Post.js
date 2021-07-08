import * as Constants from "../constants";

export const addPostRequestAction = {
  type: Constants.ADD_POST_REQUEST,
};

export const addCommentRequestAction = (data) => {
  return {
    type: Constants.ADD_COMMENT_REQUEST,
    data,
  };
};
