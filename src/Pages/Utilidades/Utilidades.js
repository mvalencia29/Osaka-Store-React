import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../../components/Cards/Cards";

function Utilidades() {
  return (
    <React.Fragment>
      <Navbar options={true} active="u"/>
      <div className="principal-container">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="cards-options">
              <Cards
                title="Calculadora de Ventas"
                body="Click para Calcular"
                redirectTo="/utilidades/calculadora-ventas"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="cards-options">
              <Cards
                title="Calculadora de Resistencias"
                body="Click para Calcular"
                redirectTo="/utilidades/calculadoras-resistencia"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Utilidades;
