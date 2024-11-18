import React from "react";
import "./Navbar.css";
import { navbarItems } from "./NavbarConfig";
import { useContext } from "react";
import { Context } from "../MainContent";

import { NavLink, useNavigate } from "react-router-dom";

/*Import Assets */
import logo from "../assets/EducAIlogo.png";

const Navbar = () => {
  const user = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/", { state: { user: undefined } });
    localStorage.clear();
  };

  return (
    <nav className="navbar">
      <div id="logo">
        <img id="logonav" src={logo} alt="EducAI Logo" />
      </div>

      <div id="menuItems">
        {navbarItems[user]?.map((item, index) => (
          <NavLink key={index} to={item.path} state={{ user: user }}>
            {item.label}
          </NavLink>
        ))}
      </div>

      <div id="cerrarSesion">
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
