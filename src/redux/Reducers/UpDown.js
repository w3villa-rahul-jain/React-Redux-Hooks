const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Decrement5":
        return state - 5;
    default:
      return state;
  }
};

export default changeTheNumber;
