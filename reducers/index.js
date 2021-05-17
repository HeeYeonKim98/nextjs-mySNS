const initalState = {
  name: "heeyeon",
  age: "24",
  password: "heeyeon",
};

/**
 *
 * @param {prev state} state
 * @param {action} action
 */
const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case "LOGIN":
      return state;
    default:
      state;
  }
};

export default Reducer;
