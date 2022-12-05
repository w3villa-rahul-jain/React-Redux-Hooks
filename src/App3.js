import "./App.css";
import React from "react";
// import React, { useState, useEffect } from "react";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Outlet,
// } from "react-router-dom";

// import FetchData from "./data/FetchData";
// import SinglePost from "./data/SinglePost";
// import PostByCategory from "./data/PostByCategory";
// import Products from "./pages/Products/Products";
import CompA from "./contextHook/CompA";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <>
      <p> main component </p>
      <UserContext.Provider value={"Rahul"}>
          <ChannelContext.Provider value={'Jain'}>
                <CompA />
          </ChannelContext.Provider>
      </UserContext.Provider>
    </>
  );
}
export default App;
