import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Form, Card, Button } from "react-bootstrap";
import "./styles.css";
import { useHistory } from "react-router-dom";

function Profile() {
  const history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  return (
    <React.Fragment>
      <Navbar options={true} active="profile" />
      <div className="principal-container">
        <Card body bg="light" text="dark" className="mb-2" id="card-profile">
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
              <Button variant="primary" id="btn-back" onClick={redirect}>
                Volver
              </Button>
            </Form.Group>
          </Form>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Profile;
