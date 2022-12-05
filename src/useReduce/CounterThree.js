import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state === 0 ? 0 : state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

export default function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Counter Three - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>

      <div>Counter Three 2 - {count2}</div>
      <button onClick={() => dispatch2("increment")}>Increment</button>
      <button onClick={() => dispatch2("decrement")}>Decrement</button>
      <button onClick={() => dispatch2("Reset")}>Reset</button>
    </div>
  );
}
