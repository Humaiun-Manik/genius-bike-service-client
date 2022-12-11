import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDeleteService = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`https://genius-bike-service.onrender.com/service/${id}`, {
        method: "DElETE",
      })
        .then((res) => res.json())
        .then((result) => {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center py-4">
        Manages your <span className="text-danger">services</span>
      </h1>
      {services.map((service) => (
        <div
          className="text-center mb-3 d-flex justify-content-between align-items-center border rounded"
          key={service._id}
        >
          <img className="w-25" src={service.img} alt="" />
          <h2>{service.name}</h2>
          <button className="btn btn-danger fs-3 me-4" onClick={() => handleDeleteService(service._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
