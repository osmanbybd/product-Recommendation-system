import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const AddQuery = () => {
  const { user } = use(AuthContext);

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
        text: "Please fill in all the required fields!",
      });
      return;
    }

    const NewRowData = {
      ...rowData,
      userEmail: user?.email,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
    };

    axios
      .post(`${import.meta.env.VITE_URL}/add-query`, NewRowData)
      .then((res) => {
        if (res?.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your query has been added!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 py-10">
      <h1 className="text-center text-3xl lg:text-5xl font-bold mb-10 text-[#687FE5]">
        Add New Product Query
      </h1>

      <form
        onSubmit={handleAddQuery}
        className="w-full max-w-2xl bg-gradient-to-br from-[#687FE5]/30 to-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg rounded-xl p-6 space-y-4"
      >
        <div>
          <label className="block font-medium mb-1 text-black">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            className="w-full p-3 rounded-md bg-white/20 text-black placeholder-black border border-[#a0b4ff]/30 focus:outline-none"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-black">
            Product Brand
          </label>
          <input
            type="text"
            name="ProductBrand"
            className="w-full p-3 rounded-md bg-white/20 text-black placeholder-black border border-[#a0b4ff]/30 focus:outline-none"
            placeholder="Enter product brand"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-black">
            Product Photo URL
          </label>
          <input
            type="text"
            name="ProductPhoto"
            className="w-full p-3 rounded-md bg-white/20 text-black placeholder-black border border-[#a0b4ff]/30 focus:outline-none"
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-black">
            Product Title
          </label>
          <input
            type="text"
            name="productTitle"
            className="w-full p-3 rounded-md bg-white/20 text-black placeholder-black border border-[#a0b4ff]/30 focus:outline-none"
            placeholder="Short product title"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-black">
            Reason for Query
          </label>
          <textarea
            name="reason"
            rows="4"
            className="w-full p-3 rounded-md bg-white/20 text-black placeholder-black border border-[#a0b4ff]/30 focus:outline-none"
            placeholder="Why are you looking for this product?"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#687FE5]/80 hover:bg-[#687FE5] text-black px-6 py-2 rounded-md transition duration-300"
          >
            Submit Query
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddQuery;
