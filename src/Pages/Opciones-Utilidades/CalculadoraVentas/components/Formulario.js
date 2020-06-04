import React from "react";
import { Form, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Formulario() {
  const history = useHistory();

  const calcular = () => {
    history.push("/");
  };

  return (
    <Card body bg="light" text="dark" className="mb-2" id="card-profile">
      <Form style={{ width: "400px" }}>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Valor Compra</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>% Utilidad o Ganancia</Form.Label>
          <Form.Control type="text" value="Valencia" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>% IVA</Form.Label>
          <Form.Control type="text" value="lmvb95@gmail.com" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Button variant="primary" id="btn-back" onClick={calcular}>
            Calcular
          </Button>
        </Form.Group>
      </Form>
    </Card>
  );
}

export default Formulario;
