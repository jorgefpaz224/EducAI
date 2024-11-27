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

        {/* FIN IF PARA LOS COMPONENTES DE CLASES O CURSOS */}

        {user === "alumno@unitec.edu" ? (
          <div id="contenido-bienvenida">
            <h2>Mis Clases</h2>
            <div id="clasesContenedores">
              <Contenedor
                tipo="claseContenedor"
                image={imgContenedor}
                porcentaje="0%"
                puntosEvaluados="0 puntos evaluados"
                nombreClase="Tecnologías Emergentes"
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
                nombreClase="Compuertas Lógicas"
              />
              <Contenedor
                tipo="claseContenedor"
                image={imgContenedor}
                porcentaje="0%"
                puntosEvaluados="0 puntos evaluados"
                nombreClase="Lenguajes de Programación"
              />
            </div>
          </div>
        ) : user === "docente@unitec.edu" ? (
          <div id="contenido-bienvenida">
            <h2>Mis Cursos</h2>
            <div id="clasesContenedores">
              <Contenedor
                tipo="cursoContenedor"
                image={imgContenedor}
                nombreClase="Tecnologías Emergentes"
              />
              <Contenedor
                tipo="cursoContenedor"
                image={imgContenedor}
                nombreClase="Experiencia de Usuario"
              />
              <Contenedor
                tipo="cursoContenedor"
                image={imgContenedor}
                nombreClase="Compuertas Lógicas"
              />
              <Contenedor
                tipo="cursoContenedor"
                image={imgContenedor}
                nombreClase="Lenguajes de Programación"
              />
            </div>
          </div>
        ) : null}
      </div>

      {/* FIN IF PARA LOS COMPONENTES */}
    </div>
  );
}

export default Bienvenida;
