import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="text-center fs-4 my-5">
      <Spinner animation="border" variant="info" />
    </div>
  );
};

export default Loading;
