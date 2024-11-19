import { useOutlet, useOutletContext } from "react-router-dom";
import { Context } from "../MainContent";
import { useContext } from "react";
import imgUser from "../assets/userLogo.png";
import imgContenedor from "../assets/imgContenedor.png";

import "./Bienvenida.css";
import Contenedor from "../components/Contenedor";

function Bienvenida() {
  const user = useContext(Context);

  return (
    <div>
      <div>
        <div id="bienvenido">
          <img id="userImg" src={imgUser} alt="User" />
          <h1>Bienvenido {user}</h1>
        </div>

        <div id="contenido-bienvenida">
          <h1>Mis Clases</h1>
          <div id="clasesContenedores">
            <Contenedor
              tipo="claseContenedor"
              image={imgContenedor}
              porcentaje="0%"
              puntosEvaluados="0 puntos evaluados"
              nombreClase="Tecnologias Emergentes"
            />
            <Contenedor
              tipo="claseContenedor"
              image={imgContenedor}
              porcentaje="0%"
              puntosEvaluados="0 puntos evaluados"
              nombreClase="Experiencia de Usuario"
            />
            <Contenedor
              tipo="claseContenedor"
              image={imgContenedor}
              porcentaje="0%"
              puntosEvaluados="0 puntos evaluados"
              nombreClase="Compuertas Logicas"
            />
            <Contenedor
              tipo="claseContenedor"
              image={imgContenedor}
              porcentaje="0%"
              puntosEvaluados="0 puntos evaluados"
              nombreClase="Lenguajes de Programacion"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bienvenida;
