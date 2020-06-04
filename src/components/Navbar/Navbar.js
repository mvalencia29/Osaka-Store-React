import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link as RouterLink, useHistory } from "react-router-dom";

function Topbar(props) {
  const { options, boton, active = "", ...rest } = props;

  const history = useHistory();

  const redirect = () => {
    history.push("/profile");
  };

  return (
    <Navbar bg="light" expand="md">
      <RouterLink className="navbar-brand" to="/">
        Osaka Store
      </RouterLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {options ? (
          <Nav className="mr-auto">
            {active === "i" ? (
              <RouterLink className={"nav-link active"} to="/inventario">
                Inventario
              </RouterLink>
            ) : (
              <RouterLink className={"nav-link"} to="/inventario">
                Inventario
              </RouterLink>
            )}
            {active === "u" ? (
              <RouterLink className={"nav-link active"} to="/utilidades">
                Utilidades
              </RouterLink>
            ) : (
              <RouterLink className={"nav-link"} to="/utilidades">
                Utilidades
              </RouterLink>
            )}
            {active === "a" ? (
              <RouterLink className={"nav-link active"} to="/administrador">
                Administrador
              </RouterLink>
            ) : (
              <RouterLink className={"nav-link"} to="/administrador">
                Administrador
              </RouterLink>
            )}
            {active === "f" ? (
              <RouterLink className={"nav-link active"} to="/fases-anteriores">
                Fases anteriores
              </RouterLink>
            ) : (
              <RouterLink className={"nav-link"} to="/fases-anteriores">
                Fases anteriores
              </RouterLink>
            )}
          </Nav>
        ) : null}
      </Navbar.Collapse>
      <Form inline>
        {boton === "no" ? null : active === "profile" ? (
          <Button
            variant="outline-primary"
            style={{ width: "80px" }}
            onClick={redirect}
            className="active"
          >
            Perfil
          </Button>
        ) : (
          <Button
            variant="outline-primary"
            style={{ width: "80px" }}
            onClick={redirect}
          >
            Perfil
          </Button>
        )}
      </Form>
    </Navbar>
  );
}

export default Topbar;
