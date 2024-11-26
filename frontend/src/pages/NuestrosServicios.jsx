import React from "react";
/*Import Assets*/ 
import logo from "../assets/EducAIlogo.png";
import notas from "../assets/notas.png";
import tutoria from "../assets/tutorias.png";
import chatbot from "../assets/GatitoAkshually.png";

import './NuestrosServicios.css'

function NuestrosServicios() {
  return (
    <div>
      <div id="banner">
        <img id="logo-nuestros-servicios" src={logo} alt="" />
        <h1 className="headline">Servicios</h1>
      </div>

      <div id="todo">
        <div className="contenido-NuestrosServicios" id="chatbot">
          <div className="contenido-texto">
            <h1 className="headline">AI-Chatbot</h1>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="contenido-imagen">
            <button className="boton-ns" id="boton-chatbot">
              Abrir Chatbot
            </button>
            <img src={chatbot} alt=''/>
          </div>
        </div>

        <div
          className="contenido-NuestrosServicios"
          id="calificaciones-automaticas"
        >
          <div className="contenido-texto">
            <h1 className="headline">Calificaciones Automaticas</h1>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="contenido-imagen">
            <button className="boton-ns" id="boton-notas">
              Ver mis notas
            </button>
            <img src={notas} alt=''/>
          </div>
        </div>

        <div className="contenido-NuestrosServicios" id="tutorias">
          <div className="contenido-texto">
            <h1 className="headline">Acceso a Tutorias</h1>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="contenido-imagen">
            <button className="boton-ns" id="boton-tutorias">
              Agendar Tutorias
            </button>
            <img src={tutoria} alt=''/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuestrosServicios;
