import axios from "axios";

import {  useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const updateData = useLoaderData();
  const updateQueries= updateData.data;

  console.log(updateQueries);
  const { productName, ProductBrand, ProductPhoto, productTitle, reason, _id } =updateQueries;
    const navigate = useNavigate()




  const handleUpdateData = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updateForm = Object.fromEntries(formData.entries());

    axios
      .put(`${import.meta.env.VITE_URL}/updateQueries/${_id}`, updateForm)
      .then((data) => {
        console.log(data);
        if (data?.data?.matchedCount > 0) {
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true,
          });
          navigate('/myQueries')
        }
      });
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="bg-[#91f185] w-full text-center py-5 lg:text-6xl md:text-3xl text-xl mb-3">
        🛠️ Update Your Query
      </div>
      <div>
        <form
          onSubmit={handleUpdateData}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <legend className="fieldset-legend">Page details</legend>

          <label className="label">Name</label>
          <input
            type="text"
            defaultValue={productName}
            name="productName"
            className="input"
            placeholder="Product Name"
          />
          <label className="label">Product Brand</label>
          <input
            type="text"
            defaultValue={ProductBrand}
            name="ProductBrand"
            className="input"
            placeholder="product Brand"
          />

          <label className="label">Photo</label>
          <input
            type="text"
            defaultValue={ProductPhoto}
            name="ProductPhoto"
            className="input"
            placeholder="Product Photo"
          />

          <label className="label">Title </label>
          <input
            type="text"
            defaultValue={productTitle}
            name="productTitle"
            className="input"
            placeholder="product Title"
          />
          <label htmlFor="Reason">
            <span className="text-sm font-medium text-gray-700"> Reason </span>

            <textarea
              name="reason"
              defaultValue={reason}
              className="mt-0.5 w-full resize-none rounded border-gray-300 bg-white shadow-sm sm:text-sm"
              rows="4"
            ></textarea>
          </label>
          <button className="btn" type="submit">
            Update Query
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
