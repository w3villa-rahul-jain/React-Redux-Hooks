import React, { useState } from "react";
import { format } from "date-fns";
import "./App.css";
import FetchData from "./data/FetchData";

const App = () => {
  return (
    <>
      <div className="text-center">
        <FetchData />
        {/* <h2>Welcome to Redux</h2>
        {format(new Date(), "p, MM/dd/yyyy")} */}
      </div>
    </>
  );
};
export default App;
