import { Routes, Route } from "react-router-dom";
import Login from "../Paginas/Login";
import Router2 from "./Router2";
import Rutaprivada from "./Rutaprivada";

const Router1 = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />

        <Route
          path="/*"
          element={
            <Rutaprivada>
              <Router2 />
            </Rutaprivada>
          }
        />
      </Routes>
    </>
  );
};

export default Router1;
