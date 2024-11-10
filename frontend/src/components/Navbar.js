import React from "react";
import "./Navbar.css";
import logo from "../assets/EducAIlogo.png";

export default function Navbar({setUser}) {
  const handleLogout = () => {
    setUser([]);
  };

  return (
    <nav>
      <div id="logo">
        <img id="logonav" src={logo} />
      </div>
      <a>Calificaciones</a>
      <a>Tutorias</a>
      <a>Nuestros Servicios</a>
      <div id="cerrarSesion">
        <button onClick={handleLogout}>Cerrar Sesion</button>
      </div>
    </nav>
  );
}
