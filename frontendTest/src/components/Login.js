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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
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
    setError(true);
    return;
  };

  return (
    <div id="content">
      <div id="login-page">
        <img id="logo" src={logo} />

        <form id="contenido-login" onSubmit={handleSubmit}>
          <h1 id="texto">Iniciar Sesion</h1>
          <div className="field" id="email-input">
            <label>Correo Electronico</label>
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

          <button id="iniciarSesionbtn">Iniciar Sesion</button>
        </form>
        {error && <p>Ha ocurrido un error al iniciar sesion!!!</p>}
      </div>

      <img id="vector" src={vector} />
      <img id="gatito" src={gatito} />
    </div>
  );
}
