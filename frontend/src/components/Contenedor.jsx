import './Contenedor.css';

const Contenedor = ({ tipo, image, porcentaje, puntosEvaluados, nombreClase, boton }) => {
  if (tipo === "claseContenedor") {
    return (
      <div className={tipo}>
        <img id = "imgClase" src={image}></img>
        <h1>{porcentaje}</h1>
        <label>{puntosEvaluados}</label>
        <h2>{nombreClase}</h2>
      </div>
    );
  }else if(tipo === "personaContenedor"){
    return (
        <div className={tipo}>
          <img src={image}></img>
          <h1>{porcentaje}</h1>
          <h2>{nombreClase}</h2>
          <button></button>
        </div>
      );
  }else{
    <div>Error al cargar componente</div>
  }
};

export default Contenedor;