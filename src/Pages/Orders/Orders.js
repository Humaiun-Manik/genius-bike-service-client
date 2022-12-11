import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      try {
        const { data } = await axios.get(`https://genius-bike-service.onrender.com/order?email=${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrders(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);

  return (
    <div className="container my-5">
      <h1 className="text-center py-4">
        Your Orders: <span className="text-danger">{orders.length}</span>
      </h1>
      <table className="table fs-4  table-info text-center border">
        <thead>
          <tr>
            <th scope="col">Service Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        {orders.map((order) => (
          <tbody key={order._id}>
            <tr>
              <td>{order.service}</td>
              <td>{order.email}</td>
              <td>{order.address}</td>
              <td>{order.phone}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Orders;
