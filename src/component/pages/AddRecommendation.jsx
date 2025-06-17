import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddRecommendation = ({ detailsQueries , handleRefresh }) => {
  const { user } = use(AuthContext);
  const {
    productName,
    ProductBrand,
    ProductPhoto,
    productTitle,
    userEmail,
    userName,
    userPhoto,
    _id,
  } = detailsQueries;

  const handleAddRecommendation = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const AllFormData = Object.fromEntries(formData.entries());

    if (
      !AllFormData.recommendationBrand ||
      !AllFormData.recommendationPhoto ||
      !AllFormData.recommendationTitle ||
      !AllFormData.recommendationReason
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please All the require field!",
      });
      return;
    }

    const recommendation = {
      ...AllFormData,
      queryId: _id.toString(),
      ProductPhoto,
      ProductBrand,
      recommenderName: user?.displayName,
      recommenderEmail: user?.email,
      recommenderPhoto: user?.photoURL,
      productName,
      queryTitle: productTitle,
      userEmail,
      userName,
      timestamp: new Date().toISOString(),
      userPhoto,
    };

    axios
      .post(`${import.meta.env.VITE_URL}/recommendation`, recommendation)
      .then((data) => {
        // console.log(data);
        if (data?.data?.insertedId) {
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true,
          });
          form.reset()
          if(handleRefresh) {
            handleRefresh()
          }
        }
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="glass-section rounded-lg shadow-lg p-5 ">
        <h1 className="text-xl font-semibold">Add Your Complement Please</h1>
      </div>

      <div className="py-4">
        <form
          onSubmit={handleAddRecommendation}
          className="fieldset  border-base-300 shadow-lg rounded-box w-xs border p-4"
        >
          <legend className="label">Product Brand</legend>

          <input
            type="text"
            name="recommendationBrand"
            className="input"
            placeholder="product Brand"
          />

          <label className="label">Photo</label>
          <input
            type="text"
            name="recommendationPhoto"
            className="input"
            placeholder="Product Photo"
          />

          <label className="label">Title </label>
          <input
            type="text"
            name="recommendationTitle"
            className="input"
            placeholder="product Title"
          />
          <label htmlFor="Reason">
            <span className="text-sm font-medium text-gray-700"> Reason </span>

            <textarea
              name="recommendationReason"
              className="mt-0.5 w-full resize-none rounded border-gray-300 bg-white shadow-sm sm:text-sm"
              rows="4"
            ></textarea>
          </label>
          <button className="btn btn-primary" type="submit">
            Add Recommendation
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecommendation;
