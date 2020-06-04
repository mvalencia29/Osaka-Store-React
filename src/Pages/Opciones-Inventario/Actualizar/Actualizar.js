import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { Form, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Actualizar() {
  const history = useHistory();

  const redirect = () => {
    history.push("/inventario");
  };

  return (
    <React.Fragment>
      <Navbar options={true} active="i" />
      <div className="principal-container">
        <h4>Actualizar Producto</h4>
      </div>
      <div className="secondary-container">
        <Card body bg="light" text="dark" className="mb-2" id="card-profile">
          <Form style={{ width: "400px" }}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Cod. Producto</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Producto</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Marca</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Button variant="primary" id="btn-back" onClick={redirect}>
                Actualizar
              </Button>
            </Form.Group>
          </Form>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Actualizar;
