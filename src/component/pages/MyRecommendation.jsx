import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const MyRecommendation = () => {
  const { user } = use(AuthContext);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios(
        `${import.meta.env.VITE_URL}/my-recommendation?email=${user?.email}`
      ).then((res) => {
        console.log(res?.data);
        setRecommendations(res?.data);
      });
    }
  }, [user]);

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

        axios.delete(`${import.meta.env.VITE_URL}/myRecommendation/${id}`)
        .then(res =>{
            console.log(res)
            setRecommendations( prev => prev.filter(rec => rec._id !== id))

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        })



      }
    });
  };

  return (
    <div className="container mx-auto">
      <div className=" bg-gradient-to-r glass-section p-8 m-5 rounded-lg shadow-lg">
        <h1 className="text-center lg:text-6xl md:text-3xl text-2xl font-semibold">
          My Recommendation{" "}
        </h1>
      </div>

      <div className="overflow-x-auto w-full my-5">
        <div className=" min-w-[800px] mx-auto glass-table">
        {
            recommendations.length > 0 ? (
                  <table className="table ">
            {/* head */}
            <thead className="w-full uppercase bg-green-100 text-gray-700 rounded-xl ">
              <tr>
                <th>Product Photo</th>
                <th>Product name</th>
                <th>Product Title</th>

                <th>Time </th>
                <th>Product Details </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {recommendations.map((allQuery) => (
                <tr key={allQuery._id}  className="hover:bg-gray-100 hover:scale-[1.01] transition-all duration-200">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="mask mask-squircle h-12 w-12">
                        <img

                          src={allQuery.recommendationPhoto}
                          className="w-14 h-14"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{allQuery.recommendationBrand}</td>
                  <td>{allQuery.recommendationTitle}</td>

                  <th> {new Date(allQuery.timestamp).toLocaleString()}</th>
                  <th>
                    <button onClick={() => handleDelete(allQuery._id)} className="btn btn-error">
                      <MdDeleteForever size={20} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
            ) : (<p className="text-center text-3xl font-semibold">No Recommendation found</p>)
         }
        </div>
      </div>
    </div>
  );
};

export default MyRecommendation;
