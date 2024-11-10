import React from "react";
import Calificaciones from "./Calificaciones";
import Cursos from "./Cursos";
import Navbar from "./Navbar";

const MainContent = ({ user, setUser }) => {
  let section = "";

  if (user === "alumno@unitec.edu") {
    section = "Calificaciones";
    console.log("Hola ALUMNO");
  } else if (user === "profe@unitec.edu") {
    section = "Cursos";
    console.log("Hola DOCENTE");
  } else {
    console.log("QUIEN CHOTA SOS");
  }

  const renderSection = () => {
    switch (section) {
      case "Calificaciones":
        return <Calificaciones user={user} setUser={setUser} />;
      case "Tutorias":
        return <h1>BIENVENIDO A TUTORIAS {user}</h1>;
      case "Nuestros Servicios":
        return <h1>BIENVENIDO A NUESTROS SERVICIOS {user}</h1>;
      case "Cursos":
        return <Cursos user={user} setUser={setUser} />;
      default:
        return <h1>error404-Seccion no encontrada</h1>;
    }
  };

  return <div>{renderSection()}</div>;
};

export default MainContent;
