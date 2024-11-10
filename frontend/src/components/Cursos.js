import React from "react";
import Navbar from "./Navbar";

const Cursos = ({ user, setUser }) => {
  return (
    <div>
      <Navbar setUser={setUser} />
      <h1>Bienvenido Docente {user}</h1>
    </div>
  );
}

export default Cursos;