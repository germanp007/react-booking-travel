import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Contexto from "../contexto/Contexto";

const Rutaprivada = ({ children }) => {
  const { logearse } = useContext(Contexto);
  return logearse ? children : <Navigate to="/login" />;
};

export default Rutaprivada;
