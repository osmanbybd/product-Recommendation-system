import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddRecommendation = ({ detailsQueries, handleRefresh }) => {
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
        text: "Please fill all required fields!",
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
      userPhoto,
      timestamp: new Date().toISOString(),
    };

    axios
      .post(`${import.meta.env.VITE_URL}/recommendation`, recommendation)
      .then((res) => {
        if (res?.data?.insertedId) {
          Swal.fire({
            title: "Recommendation Added!",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          if (handleRefresh) {
            handleRefresh();
          }
        }
      });
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 ">
      <div className="glass-section text-center mb-6 w-full max-w-2xl">
        <h1 className="text-2xl font-bold ">
          Add Your Recommendation ✍️
        </h1>
        <p className="text-sm  mt-1">
          Suggest a better product with reason
        </p>
      </div>

      <div className="w-full max-w-2xl glass-card my-5">
        <form
          onSubmit={handleAddRecommendation}
          className="grid grid-cols-1 gap-4 "
        >
          <div>
            <label className="label text-black">Product Brand</label>
            <input
              type="text"
              name="recommendationBrand"
              className="input input-bordered w-full"
              placeholder="e.g. Samsung"
            />
          </div>

          <div>
            <label className="label text-black">Photo URL</label>
            <input
              type="text"
              name="recommendationPhoto"
              className="input input-bordered w-full"
              placeholder="https://image-link"
            />
          </div>

          <div>
            <label className="label text-black">Title</label>
            <input
              type="text"
              name="recommendationTitle"
              className="input input-bordered w-full"
              placeholder="Product Title"
            />
          </div>

          <div>
            <label className="label text-black">Reason</label>
            <textarea
              name="recommendationReason"
              className="textarea textarea-bordered w-full h-28 resize-none"
              placeholder="Why do you recommend this product?"
            ></textarea>
          </div>

          <button type="submit" className="glass-btn w-full">
            Add Recommendation
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecommendation;
