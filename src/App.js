import React, { useState } from "react";
import { format } from "date-fns";
import "./App.css";
import FetchData from "./data/FetchData";
import Products from "./Crud/Products";

const App = () => {
  return (
    <>
      <div className="text-center">
        <Products />
        {/* {format(new Date(), "p, MM/dd/yyyy")} */}
      </div>
    </>
  );
};
export default App;
