import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDeleteService = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`http://localhost:5000/service/${id}`, {
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
    <div className="w-50 mx-auto my-5">
      <h2>Manages your services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            Service Name: {service.name} <button onClick={() => handleDeleteService(service._id)}>X</button>{" "}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
