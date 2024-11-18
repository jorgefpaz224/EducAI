const Contenedor = ({ tipo, image, porcentaje, nombreClase, boton }) => {
  if (tipo === "claseContenedor") {
    return (
      <div>
        <img src={image}></img>
        <h1>{porcentaje}</h1>
        <label>{nombreClase}</label>
      </div>
    );
  }else if(tipo === "personaContenedor"){
    return (
        <div>
          <img src={image}></img>
          <h1>{porcentaje}</h1>
          <label>{nombreClase}</label>
          <button></button>
        </div>
      );
  }else{
    <div>Error al cargar componente</div>
  }
};

export default Contenedor;
