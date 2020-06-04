import React from "react";
import { Card } from "react-bootstrap";

function Cards(props) {
  const { title, body } = props;

  return (
    <React.Fragment>
      <Card
        bg="light"
        key={1}
        text="dark"
        className="mb-2"
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default Cards;
