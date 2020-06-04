import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Topbar(props) {
  const { options } = props;

  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="#home">Osaka Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {options ? (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Inventario</Nav.Link>
            <Nav.Link>Utilidades</Nav.Link>
            <Nav.Link>Administrador</Nav.Link>
            <Nav.Link>Fases anteriores</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      ) : null}
    </Navbar>
  );
}

export default Topbar;
