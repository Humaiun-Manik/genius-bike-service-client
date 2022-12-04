import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, img, name, price, description } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };

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
          <Button onClick={() => navigateToServiceDetail(_id)} className="w-75 mb-3 fs-5 " variant="dark">
            Booking
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
