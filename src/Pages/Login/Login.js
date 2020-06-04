import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./styles.css";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  return (
    <React.Fragment>
      <div className="login-container">
        <Card bg="light" text="dark" style={{ width: "350px" }}>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Iniciar Sesion
            </Card.Title>
            <Form.Control
              type="text"
              placeholder="Usuario"
              style={{ marginTop: "30px" }}
            />
            <Form.Control
              type="text"
              placeholder="Password"
              style={{ marginTop: "15px" }}
            />
            <Button variant="primary" id="btn-log-in" onClick={redirect}>
              Iniciar Sesion
            </Button>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Login;
