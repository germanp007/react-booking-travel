import React from "react";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";

const Ruta = () => {
  const { contratacion, dispatch2 } = useContext(Contexto);
  const total = contratacion
    .map((element) => element.precio)
    .reduce((a, b) => a + b, 0);

  return (
    <>
      <section>
        <h1>Mis destinos:</h1>

        {contratacion.map((destino) => (
          <div key={destino.sitio} className="rutas-container">
            <button
              onClick={() =>
                dispatch2({
                  type: "anular",
                  payload: {
                    nombre: destino.sitio,
                  },
                })
              }
            >
              Anular
            </button>
            {destino.sitio} ({destino.precio}USD$)
          </div>
        ))}
      </section>
      <h1>Total a Pagar: {total} (USD $$)</h1>
    </>
  );
};

export default Ruta;
