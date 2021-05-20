import initialState from "./initalState/initialState";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default userReducer;
