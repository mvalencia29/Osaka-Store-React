import React from "react";
import Navbar from "../../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./components/Cards";
import "./styles.css";

function Dashboard() {
  return (
    <React.Fragment>
      <Navbar options={false} />
      <div className="principal-container">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="cards-options">
              <Cards title="Inventario" body="Click para ver" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="cards-options">
              <Cards title="Utilidades" body="Click para ver" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="cards-options">
              <Cards title="Administrador" body="Click para ver" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="cards-options">
              <Cards title="Fases anteriores" body="Click para ver" />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
