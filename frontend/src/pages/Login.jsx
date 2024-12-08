import React, { useState } from "react";
import InputGroup from "../components/InputGroup";
import "./Login.css";
import axios from 'axios';
/*Import Assets*/
import gatito from "../assets/GatitoAkshually.png";
import logo from "../assets/EducAIlogo.png";
import vector from "../assets/loginVector.png";

import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const estudianteResponse = await axios.post('http://localhost:5000/users/verificar-estudiante', { correo: email, contrasena: password });
      if (estudianteResponse.data) {
        console.log("Iniciado sesion como ESTUDIANTE");
        const userState = { user: estudianteResponse.data, userType: 'Alumno' };
        localStorage.setItem('userState', JSON.stringify(userState));
        navigate("/main", { state: userState });
        return;
      }
    } catch (error) {
      // Handle error
    }

    try {
      const maestroResponse = await axios.post('http://localhost:5000/users/verificar-maestro', { correo: email, contrasena: password });
      if (maestroResponse.data) {
        console.log("Iniciado sesion como DOCENTE");
        const userState = { user: maestroResponse.data, userType: 'Maestro' };
        localStorage.setItem('userState', JSON.stringify(userState));
        navigate("/main", { state: userState });
        return;
      }
    } catch (error) {
      // Handle error
    }

    setError('Correo o contraseña incorrectos');
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
          {error && <p>{error}</p>}
        </form>
      </div>

      <img id="vector" src={vector} alt="" />
      <img id="gatito" src={gatito} alt="" />
    </div>
  );
}

export default Login;