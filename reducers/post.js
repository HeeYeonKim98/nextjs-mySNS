import initialState from "./initalState/initialState";

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST":
      return state;
    default:
      return state;
  }
};

export default postReducer;
