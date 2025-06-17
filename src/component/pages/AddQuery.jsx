import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const AddQuery = () => {
  const { user } = use(AuthContext);

  // console.log(user?.photoURL);

  const handleAddQuery = (e) => {
    e.preventDefault();
    const from = e.target;
    const formData = new FormData(from);
    const rowData = Object.fromEntries(formData.entries());
    if (
      !rowData.productName ||
      !rowData.ProductBrand ||
      !rowData.ProductPhoto ||
      !rowData.productTitle ||
      !rowData.reason
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please All the require field!",
      });
      return;
    }

    // console.log(rowData);

    const NewRowData = {
      ...rowData,
      userEmail: user?.email,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
    };

    axios
      .post(`${import.meta.env.VITE_URL}/add-query`, NewRowData)
      .then((res) => {
        if (res?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add your query success ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        // console.log(res);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#91f185] w-full text-center py-5 lg:text-6xl md:text-3xl text-xl">
        <h1>Add New Product Query</h1>
      </div>

      <div>
        <form
          onSubmit={handleAddQuery}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <legend className="fieldset-legend">Page details</legend>

          <label className="label">Name</label>
          <input
            type="text"
            name="productName"
            className="input"
            placeholder="Product Name"
          />
          <label className="label">Product Brand</label>
          <input
            type="text"
            name="ProductBrand"
            className="input"
            placeholder="product Brand"
          />

          <label className="label">Photo</label>
          <input
            type="text"
            name="ProductPhoto"
            className="input"
            placeholder="Product Photo"
          />

          <label className="label">Title </label>
          <input
            type="text"
            name="productTitle"
            className="input"
            placeholder="product Title"
          />
          <label htmlFor="Reason">
            <span className="text-sm font-medium text-gray-700"> Reason </span>

            <textarea
              name="reason"
              className="mt-0.5 w-full resize-none rounded border-gray-300 bg-white shadow-sm sm:text-sm"
              rows="4"
            ></textarea>
          </label>
          <button className="btn" type="submit">
            Add Query
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuery;
