import Router1 from "./Routers/Router1";
import { Provider } from "./contexto/Provider";
export const App = () => {
  return (
    <>
      <Provider>
        <Router1 />
      </Provider>
    </>
  );
};
