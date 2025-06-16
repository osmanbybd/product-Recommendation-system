import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
const MyqQueryCard = ({ query }) => {
  //   console.log(query);
  const { productName, ProductPhoto, productTitle, _id, timestamp } = query;

  const [isDelete, setIsDelete] = useState(false);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_URL}/queryDelete/${id}`)
          .then((data) => {
            console.log(data.data);
            if (data?.data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

            //   const remainingDeleteQuery = myQueries.filter(query => query._id !== id)
              setIsDelete(true)
            }
          });
      }
    });
  };
  if(isDelete) return true
  return (
    <div className="card glass-card  shadow-sm  transform transition-transform duration-500 ease-in-out hover:scale-105">
      <figure>
        <img src={ProductPhoto} className="w-110 h-50" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>{productTitle}</p>
        <div className="card-actions  justify-between ">
          <div>
            <span>
              <span className="font-semibold">Added</span> <br />{" "}
              {new Date(timestamp).toLocaleString()}
            </span>
          </div>
          <div className="space-x-2">
            <Link to={`/queries/${_id}`} className="btn btn-secondary">
              <FaRegEye />
            </Link>
            <Link to={`/updatePage/${_id}`} className="btn btn-primary">
              <MdEdit />
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-error">
              <RiDeleteBin5Fill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyqQueryCard;
