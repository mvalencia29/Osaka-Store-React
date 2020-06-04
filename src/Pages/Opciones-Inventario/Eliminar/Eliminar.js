import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { Form, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Eliminar() {

  const history = useHistory();

  const redirect = () => {
    history.push('/inventario');
  }

  return (
    <React.Fragment>
      <Navbar options={true} active="i" />
      <div className="principal-container">
        <h4>Eliminar Producto</h4>
      </div>
      <div className="secondary-container">
        <Card body bg="light" text="dark" className="mb-2" id="card-profile">
          <Form style={{ width: "400px" }}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Cod. Producto</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Button variant="danger" id="btn-back" onClick={redirect}>
                Eliminar
              </Button>
            </Form.Group>
          </Form>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Eliminar;
