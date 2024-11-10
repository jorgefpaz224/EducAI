import React from "react";
import Navbar from "./Navbar";

export default function Calificaciones({ user, setUser }) {
  return (
    <div>
      <Navbar setUser={setUser}/>
      <h1>Bienvenido a CALIFICACIONES {user}</h1>
    </div>
  );
}
