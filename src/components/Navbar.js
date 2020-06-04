import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Topbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Osaka Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link >Inventario</Nav.Link>
          <Nav.Link >Utilidades</Nav.Link>
          <Nav.Link >Administrador</Nav.Link>
          <Nav.Link >Fases anteriores</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Topbar;
