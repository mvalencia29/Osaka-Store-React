import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Form } from "react-bootstrap";
import "./styles.css";

function Profile() {
  return (
    <React.Fragment>
      <Navbar options={true} />
      <div className="principal-container">
        <Form style={{ width: "400px" }}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value="Miguel" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" value="Valencia" />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value="lmvb95@gmail.com" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" value="mvalencia" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Direccion</Form.Label>
            <Form.Control type="text" value="av. 88 #19-90" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" value="Bogota" />
          </Form.Group>
        </Form>
      </div>
    </React.Fragment>
  );
}

export default Profile;
