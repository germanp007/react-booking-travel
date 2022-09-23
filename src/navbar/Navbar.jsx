import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Contexto from "../contexto/Contexto";

const Navbar = () => {
  const { deslogearse } = useContext(Contexto);
  const navegacion = useNavigate();
  const logout = () => {
    navegacion("/login", { replace: true });
    deslogearse();
  };
  return (
    <nav>
      <div>
        <NavLink to={"capitalypatagonia"}>Capital y Patagonia</NavLink>
        <NavLink to={"norteyeste"}>Norte y Este</NavLink>
        <NavLink to={"ruta"}>Mis Destinos</NavLink>
      </div>
      <button className="logoutbutton" onClick={logout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
