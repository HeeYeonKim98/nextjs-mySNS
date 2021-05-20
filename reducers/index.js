import dummyData from "../data/dummy.json";

/**
 *
 * @param {prev state} state
 * @param {action} action
 */
const Reducer = (state = dummyData, action) => {
  switch (action.type) {
    case "LOGIN":
      return state;
    default:
      state;
  }
};

export default Reducer;
