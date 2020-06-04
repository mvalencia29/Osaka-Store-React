import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../../components/Cards/Cards";

function FasesAnteriores() {
  return (
    <React.Fragment>
      <Navbar options={true} active="f" />
      <div className="principal-container">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="cards-options">
              <Cards
                title="Presaberes"
                body="Click para ver"
                redirectTo="/fases-anteriores/presaberes"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="cards-options">
              <Cards
                title="Planeacion"
                body="Click para ver"
                redirectTo="/fases-anteriores/planeacion"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default FasesAnteriores;
