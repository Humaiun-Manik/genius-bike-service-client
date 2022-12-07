import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };

    axios.post("http://localhost:5000/order", order).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast.success("Your order is booked!!");
        e.target.reset();
      }
    });
  };

  return (
    <div className="container w-50 mx-auto my-5">
      <h1 className="text-center my-4">Please Order: {service.name}</h1>
      <form className="text-center" onSubmit={handlePlaceOrder} action="">
        <input
          className="w-100 mb-3 p-1 rounded fs-5"
          type="text"
          name="name"
          value={user?.displayName}
          id=""
          required
          readOnly
        />
        <br />
        <input
          className="w-100 mb-3 p-1 rounded fs-5"
          type="email"
          name="email"
          value={user?.email}
          id=""
          required
          readOnly
        />
        <br />
        <input
          className="w-100 mb-3 p-1 rounded fs-5"
          type="text"
          name="service"
          value={service.name}
          id=""
          required
          readOnly
        />
        <br />
        <input
          className="w-100 mb-3 p-1 rounded fs-5"
          type="text"
          name="address"
          id=""
          placeholder="Address"
          required
          autoComplete="off"
        />
        <br />
        <input
          className="w-100 mb-3 p-1 rounded fs-5"
          type="text"
          name="phone"
          id=""
          placeholder="Phone"
          required
        />
        <br />
        <input className="btn btn-info fs-4" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
