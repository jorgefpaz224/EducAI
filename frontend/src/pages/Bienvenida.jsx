import { useOutlet, useOutletContext } from "react-router-dom";
import { Context } from "../MainContent";
import { useContext } from "react";

function Bienvenida() {

  const user = useContext(Context);

  return (
    <div>
      <div>
        <div id="Bienvenido">
          <h1>Bienvenido {user}</h1>
        </div>

        <div id = "contenido-bienvenida">
            <h1>Mis Clases</h1>
        </div>
      </div>
    </div>
  );
}

export default Bienvenida;
