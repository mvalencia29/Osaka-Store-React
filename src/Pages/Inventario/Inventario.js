import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../../components/Cards/Cards";

function Inventario() {
  return (
    <React.Fragment>
      <Navbar options={true} active="i" />
      <div className="principal-container">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="cards-options">
              <Cards
                title="Registrar Producto"
                body="Click para Registrar"
                redirectTo="/inventario/registrar"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="cards-options">
              <Cards
                title="Actualizar Producto"
                body="Click para Actualizar"
                redirectTo="/inventario/actualizar"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="cards-options">
              <Cards
                title="Consultar Producto"
                body="Click para Consultar"
                redirectTo="/inventario/consultar"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="cards-options">
              <Cards
                title="Eliminar Producto"
                body="Click para Eliminar"
                redirectTo="/inventario/eliminar"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Inventario;
