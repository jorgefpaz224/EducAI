import { useContext } from "react";
import { Context } from "../MainContent";
import imgUser from "../assets/userLogo.png";
import "./Bienvenida.css";
import CursosList from "../components/CursosList"; // Import the CursosList component

function Bienvenida() {
  const { user, userType } = useContext(Context);

  return (
    <div>
      <div>
        <div id="bienvenido">
          <img id="userImg" src={imgUser} alt="User" />
          <h1>Bienvenido {user.PrimerNombre} {user.Apellido}</h1>
        </div>

        <div id="contenido-bienvenida">
          <h1>Mis Clases</h1>
          <div id="clasesContenedores">
            {userType === 'Maestro' ? (
              <CursosList id_maestro={user.id_maestro} userType={userType} />
            ) : (
              <CursosList id_estudiante={user.id_estudiante} userType={userType} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bienvenida;