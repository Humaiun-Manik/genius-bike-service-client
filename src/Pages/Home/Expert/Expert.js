import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Expert = ({ expert }) => {
  const { _id, img, name, description } = expert;
  const navigate = useNavigate();

  const handleExpertDetails = (id) => {
    navigate(`/expert/${id}`);
  };

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description} </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center border-0">
          <Button onClick={() => handleExpertDetails(_id)} className="w-75 mb-3 fs-5 border" variant="light">
            Details
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Expert;
