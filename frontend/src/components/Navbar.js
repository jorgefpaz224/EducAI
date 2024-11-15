import React from "react";
import "./Navbar.css";
import logo from "../assets/EducAIlogo.png";
import { navbarItems } from "./navbarConfig";

const Navbar = ({ user, setCurrentView, setUser }) => {
  const handleLogout = () => {
    setUser("");
    localStorage.clear();
  };

  return (
    <nav className="navbar">
      <div id="logo">
        <img id="logonav" src={logo} alt="EducAI Logo" />
      </div>

      <div id="menuItems">
        {navbarItems[user]?.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentView(item.path)} // Cambia la vista actual según el ítem seleccionado
            className="navbar-button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div id="cerrarSesion">
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
