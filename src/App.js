import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import FasesAnteriores from "./Pages/FasesAnteriores/FasesAnteriores";
import Administrador from "./Pages/Administrador/Administrador";
import NotFound from "./Pages/NotFound/NotFound";
import Utilidades from "./Pages/Utilidades/Utilidades";
import Inventario from "./Pages/Inventario/Inventario";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/fases-anteriores" component={FasesAnteriores} />
        <Route exact path="/administrador" component={Administrador} />
        <Route exact path="/inventario" component={Inventario} />
        <Route exact path="/utilidades" component={Utilidades} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
