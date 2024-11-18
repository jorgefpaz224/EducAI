import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function MainContent() {

  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  );
}

export default MainContent;
