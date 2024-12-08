import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import { navbarItems } from "./navbarConfig";
import { Context } from "../MainContent";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/EducAIlogo.png";

const Navbar = () => {
  const { user, userType } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user && userType) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userType", userType);
    }
  }, [user, userType]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedUserType = localStorage.getItem("userType");
    if (!user && storedUser && storedUserType) {
      navigate(location.pathname, {
        state: { user: JSON.parse(storedUser), userType: storedUserType },
      });
    }
  }, [navigate, location.pathname, user]);

  const handleLogout = () => {
    navigate("/", { state: { user: undefined } });
    localStorage.clear();
  };

  return (
    <nav className="navbar">
      <div id="logo">
        <img id="logonav" src={logo} alt="EducAI Logo" />
      </div>

      {navbarItems[userType]?.map((item, index) => (
        <NavLink key={index} to={item.path} state={{ user: user, userType: userType }}>
          {item.label}
        </NavLink>
      ))}

      <div id="cerrarSesion">
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;