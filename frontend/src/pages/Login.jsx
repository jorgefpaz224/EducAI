import React, { useState } from "react";
import InputGroup from "../components/InputGroup";
import "./Login.css";

/*Import Assets*/
import gatito from "../assets/GatitoAkshually.png";
import logo from "../assets/EducAIlogo.png";
import vector from "../assets/loginVector.png";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === "" || password === "") {
      return;
    } else if (email === "alumno@unitec.edu" && password === "password") {
      setEmail(email);
      console.log("Iniciado sesion como ALUMNO");
      navigate("/main", { state: { user: email } });
      return;
    } else if (email === "docente@unitec.edu" && password === "password") {
      setEmail(email);
      console.log("Iniciado sesion como DOCENTE");
      navigate("/main", { state: { user: email } });
      return;
    }
    return;
  };

  return (
    <div id="content">
      <div id="login-page">
        <img id="logo" src={logo} alt=""/>

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
      </div>

      <img id="vector" src={vector} alt="" />
      <img id="gatito" src={gatito} alt="" />
    </div>
  );
}

export default Login;
