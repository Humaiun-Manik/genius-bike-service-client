import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto my-5">
      <h1 className="text-center">Please Add Service</h1>
      <form className="d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3 p-2 rounded"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea className="mb-3 p-2 rounded" placeholder="Description" {...register("description")} />
        <input className="mb-3 p-2 rounded" placeholder="Price" type="number" {...register("price")} />
        <input className="mb-3 p-2 rounded" placeholder="Photo Url" type="text" {...register("img")} />
        <input className="mb-3 py-2 rounded btn btn-info text-white fs-4" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
