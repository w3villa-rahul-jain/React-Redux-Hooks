import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter <= 0 ? state.firstCounter = 0 :state.firstCounter - action.value };
    case "Reset":
      return { firstCounter: state.firstCounter = 0 };
    default:
      return state;
  }
};

export default function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Counter 2 - {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement", value: 1})}>Decrement</button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>Increment 5</button>
      <button onClick={() => dispatch({ type: "decrement", value: 5})}>Decrement 5</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}
