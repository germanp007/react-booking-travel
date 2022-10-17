import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../contexto/Contexto";
import swal from "sweetalert";
const Login = () => {
  const { logearse } = useContext(Contexto);
  const navegacion = useNavigate();
  const [cambio, setCambio] = useState("");

  const handleChange = (e) => {
    setCambio(e.target.value);
    logearse(e.target.value);
  };
  const handleClick = () => {
    if (cambio == "" || cambio != "german") {
      swal({
        title: "Error",
        text: "Usuario Invalido, Por favor Introduzca 'german' y luego login para continuar",
        icon: "error",
      });
    } else {
      navegacion("/", { replace: true });
    }
  };
  return (
    <div className="logincontainer">
      <h1>Reserva</h1>
      <label htmlFor="reserva">
        {" "}
        Referencia:
        <input
          type="text"
          id="reserva"
          placeholder="Referencia de tu Billete"
          onChange={handleChange}
          value={cambio}
        />
      </label>
      <button className="loginbutton" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
