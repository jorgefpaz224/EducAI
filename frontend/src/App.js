import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Calificaciones from "./components/Calificaciones";
import Tutorias from "./components/Tutorias";
import NuestrosServicios from "./components/NuestrosServicios";
import Cursos from "./components/Cursos";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState("");
  const [currentView, setCurrentView] = useState("NuestrosServicios");

  const renderView = () => {
    if (user === "alumno@unitec.edu") {
      switch (currentView) {
        case "Calificaciones":
          return <Calificaciones />;
        case "Tutorias":
          return <Tutorias />;
        case "NuestrosServicios":
          return <NuestrosServicios />;
        default:
          return <h2>Bienvenido, selecciona una opción del menú</h2>;
      }
    } else if (user === "docente@unitec.edu") {
      switch (currentView) {
        case "Cursos":
          return <Cursos />;
        case "Tutorias":
          return <Tutorias />;
        case "NuestrosServicios":
          return <NuestrosServicios />;
        default:
          return <h2>Bienvenido, selecciona una opción del menú</h2>;
      }
    } else {
      return <h2>Acceso no autorizado</h2>;
    }
  };

  return (
    <div className="App">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <Navbar user={user} setCurrentView={setCurrentView} setUser={setUser} />
          <div className="main-content">{renderView()}</div>
        </>
      )}
    </div>
  );
}

export default App;
