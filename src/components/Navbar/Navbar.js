import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link as RouterLink, useHistory } from "react-router-dom";
import "./styles.css";

function Topbar(props) {
  const { options, boton } = props;

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
            <RouterLink className="nav-link" to="/inventario">
              Inventario
            </RouterLink>
            <RouterLink className="nav-link" to="/utilidades">
              Utilidades
            </RouterLink>
            <RouterLink className="nav-link" to="/administrador">
              Administrador
            </RouterLink>
            <RouterLink className="nav-link" to="/fases-anteriores">
              Fases anteriores
            </RouterLink>
          </Nav>
        ) : null}
      </Navbar.Collapse>
      <Form inline>
        {boton === "no" ? null : (
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
