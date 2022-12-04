import React from "react";
import { Row } from "react-bootstrap";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();

  return (
    <div id="services" className="container my-5 pt-4">
      <div className="mb-5 text-center">
        <h1 className="text-danger d-inline border-bottom border-danger border-3">Your Services</h1>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
