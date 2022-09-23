import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Contexto from "../contexto/Contexto";
const Destino = ({ nombre, imagen, situacion }) => {
  const { contratacion } = useContext(Contexto);
  const encontrado = contratacion.find((obj) => obj.sitio === nombre);
  return (
    <>
      <div className="destino">
        <div className="nombre">{nombre}</div>
        <div className="situacion">{situacion}</div>
        <img src={`../imagenes/${imagen}`} alt="" />
        <div className="container-link-punto">
          <Link className="info" to={`/destino/${nombre}`}>
            Mas Info
          </Link>
          {encontrado && <div className="circulo"></div>}
        </div>
      </div>
    </>
  );
};

export default Destino;
