import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
// import axios from "axios";
import { MdRecommend } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import axiosInstance from "../hooks/useAsxioxSecure";
const RecommendationsForMe = () => {
  const { user } = use(AuthContext);
  const [recommendForMe, setRecommendationForMe] = useState([]);

  useEffect(() => {
    axiosInstance(
      `/recommendationForMe?email=${user?.email}`
    ).then((res) => {
      console.log(res);
      setRecommendationForMe(res?.data)
    });
  }, [user]);

  return (
    <div className="container mx-auto">
      <div  className="my-3 bg-gray-50 rounded-lg shadow-lg p-2">
       
        <Fade cascade delay={200} duration={1000} fraction={0.5} triggerOnce>
          <h1 className="text-center lg:text-6xl md:text-3xl text-xl font-bold flex justify-center items-center">
          <MdRecommend /> <span className="text-blue-700   "> Recommendation </span>  For Me
          </h1>
        </Fade>
      </div>


        <div className="container mx-auto">
         
    
          <div className="overflow-x-auto w-full">
            <div className=" min-w-[800px] mx-auto glass-table ">
            {
                recommendForMe.length > 0 ? (
                      <table className="table ">
                {/* head */}
                <thead className="bg-green-100 text-gray-700 rounded-xl uppercase">
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
                  {recommendForMe.map((allQuery) => (
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
                        {/* <button onClick={() => handleDelete(allQuery._id)} className="btn btn-error">
                          <MdDeleteForever size={20} />
                        </button> */}
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
                ) : (<p className="text-center text-3xl font-semibold">No recommendations found for your queries.</p>)
             }
            </div>
          </div>
        </div>


    </div>
  );
};

export default RecommendationsForMe;
