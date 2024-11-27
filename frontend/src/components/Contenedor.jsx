import "./Contenedor.css";

const Contenedor = ({
  tipo,
  image,
  porcentaje,
  puntosEvaluados,
  nombreProf,
  nombreClase,
  profClases = [],
  carrera,
  horarios,
}) => {

  if (tipo === "claseContenedor") {
    return (
      <div className={tipo}>
        <img id="imgClase" src={image} alt=""></img>
        <h1>{porcentaje}</h1>
        <label>{puntosEvaluados}</label>
        <h2>{nombreClase}</h2>
      </div>
    );
  } else if (tipo === "personaContenedor") {
    return (
      <div className={tipo}>
        <img src={image} alt=""></img>
        <h3>{nombreProf}</h3>
        <p>{carrera}</p>
        <br></br>
        <p>Clases:</p>
        {profClases.map((clase) => (
          <p>{clase}</p>
        ))}
        <br></br>
        <p>Horarios Disponibles:</p>
        <p>{horarios}</p>
        <br></br>
        <button className="btn-transparente">
          Agendar Tutoría
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_218_477)">
              <path
                d="M7.99992 10.6666L10.6666 7.99992M10.6666 7.99992L7.99992 5.33325M10.6666 7.99992H5.33325M14.6666 7.99992C14.6666 11.6818 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6818 1.33325 7.99992C1.33325 4.31802 4.31802 1.33325 7.99992 1.33325C11.6818 1.33325 14.6666 4.31802 14.6666 7.99992Z"
                stroke="#0C1940"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_218_477">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    );
  } else {
    <div>Error al cargar componente</div>;
  }
};

export default Contenedor;
