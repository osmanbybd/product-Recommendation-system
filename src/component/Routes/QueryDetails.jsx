import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { FcLike } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { motion } from "motion/react";
import axios from "axios";
import AddRecommendation from "../pages/AddRecommendation";
import RecommendationDetails from "../pages/RecommendationDetails";
const QueryDetails = () => {
  const detailsData = useLoaderData();

  const detailsQueries = detailsData.data;

  // console.log(detailsQueries);
  const { user } = use(AuthContext);
  const {
    productName,
    ProductBrand,
    ProductPhoto,
    productTitle,
    reason,
    timestamp,
    recommendationCount,
    userEmail,
    userName,
    userPhoto,
    _id,
  } = detailsQueries;
  const isArray = Array.isArray(recommendationCount) ? recommendationCount : [];
  const [liked, setLiked] = useState(isArray.includes(user?.email));
  const [likeCount, setLikeCount] = useState(isArray.length);
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    const isArray = Array.isArray(recommendationCount)
      ? recommendationCount
      : [];
    setLiked(isArray.includes(user?.email));
  }, [recommendationCount, user]);
  const handleLikedCount = () => {
    if (user?.email === userEmail)
      return alert("your email hes been no accepted !");
    axios
      .patch(`${import.meta.env.VITE_URL}/like/${_id}`, {
        email: user?.email,
      })
      .then((data) => {
        console.log(data.data);
        const isLike = data?.data?.limit;
        setLiked(isLike);
        setLikeCount((prev) => (isLike ? prev + 1 : prev - 1));
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleRefresh = () => setRefresh(!refresh)

  return (
    <div className="container mx-auto">
      <div className=" max-w-7xl mx-auto py-3 my-5 bg-gradient-to-r from-[#6bbd60] to-[#d1f7c4] rounded-lg shadow-lg">
        {/* <h1 className="text-center lg:text-6xl md:text-3xl text-xl font-semibold text-blue-950 py-4 ">
        Product Details
      </h1> */}

        <motion.h1
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { duration: 4 },
          }}
          className="text-center lg:text-6xl md:text-3xl text-xl font-semibold text-blue-950 py-4 "
        >
          {" "}
          Product Details
        </motion.h1>

        <div>
          <img
            className="w-full  h-90 object-cover"
            src={ProductPhoto}
            alt=""
          />
        </div>
        <div className="my-5  shadow-lg p-4 m-3">
          <div className="flex items-center gap-4 text-xl">
            <img src={userPhoto} className="w-14 h-14 rounded-full " alt="" />
            <h1>{userName}</h1>
          </div>
          <hr className="border border-gray-400 my-2" />

          <div className="flex items-center justify-between  gap-5">
            <div className="space-y-3">
              <h1 className="">
                <span className="font-semibold">Product Name </span> <br />{" "}
                {productName}
              </h1>
              <h1>
                <span className="font-semibold">Product Brand </span> <br />{" "}
                {ProductBrand}
              </h1>
              <h1>
                <span className="font-semibold">Product Title</span> <br />{" "}
                {productTitle}
              </h1>
            </div>
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Reason</span> <br /> {reason}
              </p>
              <span>
                <span className="font-semibold">Added</span> <br />{" "}
                {new Date(timestamp).toLocaleString()}
              </span>
              <p>
                <span className="font-semibold">Recommendation Count</span> :{" "}
                {likeCount}
              </p>
              <button
                onClick={handleLikedCount}
                className={`btn text-white border-none ${
                  liked
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {/* <FcLike /> 
              Recommendation */}
                {liked ? <AiFillDislike /> : <AiFillLike />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* all recommendation  */}

      <div className="container mx-auto">
        <h1 className="text-center lg:text-6xl font-semibold md:text-3xl text-xl py-4">
          {" "}
          Add a Recommendation
        </h1>

        <div className="grid lg:grid-cols-8  grid-cols-1 gap-3 ">
           <div className="col-span-5">
            <RecommendationDetails queryId={_id} refresh={refresh}></RecommendationDetails>
          </div>
          <div className="col-span-3">
            <AddRecommendation
              detailsQueries={detailsQueries}
              handleRefresh={handleRefresh}
            ></AddRecommendation>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
