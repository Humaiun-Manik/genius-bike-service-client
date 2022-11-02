import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Expert from "../Expert/Expert";

const Experts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);

  return (
    <div id="experts" className="container my-5 pt-4">
      <div className="mb-5 text-center">
        <h1 className="text-danger d-inline border-bottom border-danger border-3">Your Experts</h1>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </Row>
    </div>
  );
};

export default Experts;
