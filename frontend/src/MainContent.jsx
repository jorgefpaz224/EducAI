import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { createContext, useState } from "react";
import Chatbot from "./components/Chatbot";

export const Context = createContext();

function MainContent() {
  const location = useLocation();

  const user = 'alumno@unitec.edu';//location.state.user;

  return (
    <div>
      <Context.Provider value={user}>
        <Navbar />
        <Outlet />
        <Chatbot />
      </Context.Provider>
    </div>
  );
}

export default MainContent;
