import HYDRATE from "next-redux-wrapper";

/**
 *
 * @param {prev state} state
 * @param {action} action
 */
const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default rootReducer;
