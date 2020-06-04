import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Cards(props) {
  const { title, body, redirectTo } = props;

  const history = useHistory();

  const redirect = () => {
    history.push(redirectTo);
  };

  return (
    <React.Fragment>
      <Card bg="light" text="dark" className="mb-2" onClick={redirect}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default Cards;
