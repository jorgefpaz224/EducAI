import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { createContext, useState } from "react";

export const Context = createContext();

function MainContent() {
  const location = useLocation();

  const user = location.state.user;

  return (
    <div>
      <Context.Provider value={user}>
        <Navbar />
        <Outlet />
      </Context.Provider>
    </div>
  );
}

export default MainContent;
