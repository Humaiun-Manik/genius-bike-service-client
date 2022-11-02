import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Service = ({ service }) => {
  const { img, name, price, description } = service;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div>
            <h5>Price: ${price}</h5>
            <p>{description}</p>
          </div>
        </Card.Body>
        <Card.Footer className="text-center border-0">
          <Button className="w-75 mb-3 fs-5 " variant="dark">
            Booking
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
