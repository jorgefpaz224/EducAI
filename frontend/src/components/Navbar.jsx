import React from "react";
import "./Navbar.css";
import { navbarItems } from "./NavbarConfig";

import { NavLink } from "react-router-dom";

/*Import Assets */
import logo from "../assets/EducAIlogo.png";


const Navbar = () => {

  return (
    <nav className="navbar">
      <div id="logo">
        <img id="logonav" src={logo} alt="EducAI Logo" />
      </div>

      <div id="menuItems">
        {navbarItems["alumno@unitec.edu"]?.map((item, index) => (
          <NavLink
            key={index}
            to = {item.path}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <div id="cerrarSesion">
        <button>Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
