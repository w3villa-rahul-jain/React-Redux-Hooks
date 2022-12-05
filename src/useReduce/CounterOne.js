import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state === 0 ? 0 :state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

export default function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
}
