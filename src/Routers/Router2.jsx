import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import CapitalYPatagonia from "../Paginas/CapitalYPatagonia";
import Comprar from "../Paginas/Comprar";
import NorteYEste from "../Paginas/NorteYEste";
import Ruta from "../Paginas/Ruta";

const Router2 = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="capitalypatagonia"
          element={<CapitalYPatagonia zona="cp" />}
        />
        <Route path="norteyeste" element={<NorteYEste zona="no" />} />
        <Route path="destino/:nombre" element={<Comprar />} />
        <Route path="ruta" element={<Ruta />} />
        <Route path="/" element={<Navigate to="capitalypatagonia" />} />
      </Routes>
    </>
  );
};

export default Router2;
