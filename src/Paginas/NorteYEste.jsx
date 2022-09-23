import React from "react";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import Destino from "./Destino";
const NorteYEste = ({ zona }) => {
  const { data } = useContext(Contexto);
  return (
    <div>
      <section className="lista">
        {data
          .filter((element) => element.zona == zona)
          .map((element, id) => (
            <>
              <Destino key={id} {...element} />
              {/* <h3>{element.nombre}</h3>
              <p>{element.situacion}</p>
              <img src={element.imagen} />
              <button className="info">Mas Info</button> */}
            </>
          ))}
      </section>
    </div>
  );
};

export default NorteYEste;
