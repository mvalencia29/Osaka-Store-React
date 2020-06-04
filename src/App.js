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

///Opciones Inventario
import RegistrarProducto from "./Pages/Opciones-Inventario/Registrar/Registrar";
import ActualizarProducto from "./Pages/Opciones-Inventario/Actualizar/Actualizar";
import ConsultarProducto from "./Pages/Opciones-Inventario/Consultar/Consultar";
import EliminarProducto from "./Pages/Opciones-Inventario/Eliminar/Eliminar";

//Opciones Utilidades
import CalculadoraVentas from "./Pages/Opciones-Utilidades/CalculadoraVentas/CalculadoraVentas";
import CalculadoraResistencia from "./Pages/Opciones-Utilidades/CalculadoraResistencia/CalculadoraResistencia";

//Opciones Fases Anteriores
import Presaberes from "./Pages/Opciones-Fases-Anteriores/Presaberes/Presaberes";
import Planeacion from "./Pages/Opciones-Fases-Anteriores/Planeacion/Planeacion";

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

        <Route
          exact
          path="/inventario/registrar"
          component={RegistrarProducto}
        />
        <Route
          exact
          path="/inventario/actualizar"
          component={ActualizarProducto}
        />
        <Route
          exact
          path="/inventario/consultar"
          component={ConsultarProducto}
        />
        <Route exact path="/inventario/eliminar" component={EliminarProducto} />

        <Route
          exact
          path="/utilidades/calculadora-ventas"
          component={CalculadoraVentas}
        />
        <Route
          exact
          path="/utilidades/calculadoras-resistencia"
          component={CalculadoraResistencia}
        />
        <Route
          exact
          path="/fases-anteriores/presaberes"
          component={Presaberes}
        />
        <Route
          exact
          path="/fases-anteriores/planeacion"
          component={Planeacion}
        />

        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
