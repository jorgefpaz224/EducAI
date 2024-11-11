import React from "react";
import Navbar from "./Navbar";

const Calificaciones = ({ user, setUser }) => {
  return (
    <div>
      <Navbar setUser={setUser} />
      <h1>Bienvenido Alumno {user}</h1>
    </div>
  );
}

export default Calificaciones;