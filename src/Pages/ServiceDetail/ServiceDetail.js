import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  return (
    <div className="container my-5">
      <Row className="g-5">
        <Col sm={12} md={7}>
          <img className="w-100" src={service.img} alt="" />
        </Col>
        <Col sm={12} md={5} className="d-flex align-items-center">
          <div>
            <h1 className="mb-3">Name: {service.name}</h1>
            <h4 className="mb-3">Price: ${service.price}</h4>
            <p>{service.description}</p>
            <Link to={`/checkout/${serviceId}`}>
              <button className="w-75 mb-3 fs-5 border border-danger rounded fs-3 py-2 mt-4" variant="light">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceDetail;
