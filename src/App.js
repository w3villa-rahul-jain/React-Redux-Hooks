import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, dec5Number } from "./redux/Actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-center">
        <h2>Welcome to Redux</h2>
        <button onClick={() => dispatch(incNumber())}>Add + </button>
        <button onClick={() => dispatch(dec5Number(5))}>Dec 5 - </button>
        <span>{myState}</span>
        <button onClick={() => dispatch(decNumber())}>Sub - </button>
      </div>
    </>
  );
};
export default App;
