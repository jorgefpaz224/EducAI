import React, { useState } from "react";
import gatito from "../assets/GatitoAkshually.png";
import logo from "../assets/EducAIlogo.png";
import vector from "../assets/loginVector.png";
import "./Login.css";
import InputGroup from "./InputGruop";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    if (email === "" || password === "") {
      setError("Por favor, complete todos los campos.");
      setError(true);
      return;
    } else if (email === "alumno@unitec.edu" && password === "password") {
      setError(false);
      setUser(email);
      console.log("Iniciado sesion como ALUMNO");
      return;
    } else if (email === "docente@unitec.edu" && password === "password") {
      setError(false);
      setUser(email);
      console.log("Iniciado sesion como DOCENTE");
      return;
    }

    try {
      let response;

      response = await fetch("http://localhost:5000/api/verificar-estudiante", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo: email, contrasena: password }),
      });

      if (response.ok) {
        const estudiante = await response.json();
        setUser(estudiante.PrimerNombre);
        console.log("Iniciado sesión como ALUMNO");
        return;
      }

      response = await fetch("http://localhost:5000/api/verificar-maestro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo: email, contrasena: password }),
      });

      if (response.ok) {
        const maestro = await response.json();
        setUser(maestro.PrimerNombre);
        console.log("Iniciado sesión como DOCENTE");
        return;
      }

      setError("Credenciales incorrectas.");
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError("Error al conectar con el servidor.");
    }
  };

  return (
    <div id="content">
      <div id="login-page">
        <img id="logo" src={logo} alt="Logo" />

        <form id="contenido-login" onSubmit={handleSubmit}>
          <h1 id="texto">Iniciar Sesión</h1>
          <div className="field" id="email-input">
            <label>Correo Electrónico</label>
            <InputGroup
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@edu.com"
            />
          </div>

          <div className="field" id="password-input">
            <label>Contraseña</label>
            <InputGroup
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="***********"
            />
          </div>

          <button id="iniciarSesionbtn">Iniciar Sesión</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>

      <img id="vector" src={vector} alt="Vector" />
      <img id="gatito" src={gatito} alt="Gatito" />
    </div>
  );
}
