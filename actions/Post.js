import * as Constants from "../constants";

// TODO: 12, data 연결 다시 확인

export const addPostRequestAction = (data) => {
  return {
    type: Constants.ADD_POST_REQUEST,
    data,
  };
};

export const addCommentRequestAction = (data) => {
  return {
    type: Constants.ADD_COMMENT_REQUEST,
    data,
  };
};
