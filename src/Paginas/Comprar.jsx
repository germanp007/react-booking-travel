import { useContext } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import Contexto from "../contexto/Contexto";

const Comprar = () => {
  const { data, dispatch2, contratacion } = useContext(Contexto);
  const { nombre } = useParams();
  const destinoEncontrado = data.find((data) => data.nombre == nombre);
  const navegacion = useNavigate();
  const volver = () => {
    navegacion(-1);
  };
  if (!destinoEncontrado) {
    return <Navigate to="/capitalypatagonia" />;
  }
  const imagen = `../imagenes/${destinoEncontrado.imagen}`;
  const servicio = destinoEncontrado.servicio;
  const precio = destinoEncontrado.precio;
  const contratar = () => {
    const action = {
      type: "contratar",
      payload: {
        nombre: nombre,
        precio: destinoEncontrado.precio,
      },
    };
    dispatch2(action);
    localStorage.setItem(
      "datos",
      JSON.stringify([...contratacion, action.payload])
    );
  };
  const anular = () => {
    const action = {
      type: "anular",
      payload: {
        nombre: nombre,
      },
    };
    dispatch2(action);
  };
  const encontrado = contratacion.find((objeto) => objeto.sitio == nombre);
  return (
    <div className="comprar-container">
      <h1>{nombre}</h1>
      <p>{servicio}</p>
      <div className="comprar-precio">{precio} USD$</div>
      <div className="boton-container">
        {!encontrado && (
          <button onClick={contratar} className="contratar">
            Comprar
          </button>
        )}

        {encontrado && (
          <button onClick={anular} className="anular">
            Anular
          </button>
        )}
      </div>
      <img className="imagen-comprar" src={imagen} alt="" />
      <button className="boton-volver" onClick={volver}>
        Volver
      </button>
    </div>
  );
};

export default Comprar;
