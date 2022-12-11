import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddService = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    fetch("https://genius-bike-service.onrender.com/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast.success("Your service added!!");
          e.target.reset();
        }
      });
  };

  return (
    <div className="w-50 mx-auto my-5">
      <h1 className="text-center my-4">
        Please Add <span className="text-danger">Service</span>
      </h1>
      <form className="d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3 p-2 fs-4 rounded"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />

        <input className="mb-3 p-2 fs-4 rounded" placeholder="Price" type="number" {...register("price")} />
        <input className="mb-3 p-2 fs-4 rounded" placeholder="Photo Url" type="text" {...register("img")} />
        <textarea className="mb-3 p-2 fs-4 rounded" placeholder="Description" {...register("description")} />
        <input className="mb-3 py-2 rounded btn btn-info text-white fs-4" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
