import * as Constants from "../constants/constants";

// export const addPostAction = () => {
//   return {
//     type: Constants.ADD_POST,
//   };
// };

export const addPostAction = {
  type: Constants.ADD_POST,
};

export const addCommentAction = (data) => {
  return {
    type: Constants.ADD_COMMENT,
    data,
  };
};
