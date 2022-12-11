import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ExpertDetail = () => {
  const { expertId } = useParams();
  const [expert, setExpert] = useState({});

  useEffect(() => {
    fetch(`https://genius-bike-service.onrender.com/expert/${expertId}`)
      .then((res) => res.json())
      .then((data) => setExpert(data));
  }, [expertId]);

  return (
    <div className="container my-5">
      <Row className="g-5">
        <Col sm={12} md={7}>
          <img className="w-100" src={expert.img} alt="" />
        </Col>
        <Col sm={12} md={5} className="d-flex align-items-center">
          <div>
            <h1 className="mb-3">Name: {expert.name}</h1>
            <h4 className="mb-3">Email: {expert.email}</h4>
            <h4 className="mb-3">Phone: {expert.phone}</h4>
            <p>{expert.description}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ExpertDetail;
