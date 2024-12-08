import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { createContext } from "react";
import Chatbot from "./components/Chatbot";

export const Context = createContext();

function MainContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, userType } = location.state || JSON.parse(localStorage.getItem('userState')) || {};

  useEffect(() => {
    if (!user || !userType) {
      navigate("/");
    } else {
      localStorage.setItem('userState', JSON.stringify({ user, userType }));
    }
  }, [user, userType, navigate]);

  return (
    <div>
      <Context.Provider value={{ user, userType }}>
        <Navbar />
        <Outlet />
        <Chatbot />
      </Context.Provider>
    </div>
  );
}

export default MainContent;