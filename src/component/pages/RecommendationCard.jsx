import React from "react";
import logo from '../../../src/assets/user.png';
const RecommendationCard = ({ recommendation }) => {
  console.log(recommendation);

    const {recommendationBrand, recommendationPhoto, recommendationReason, recommenderName, recommenderPhoto ,timestamp} = recommendation


  return (
 <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img
        className="w-40 object-cover"
          src={recommendationPhoto }
          alt="Movie"
        />
      </figure>
      <div className="card-body w-[450px]">

        <div className="flex items-center gap-3">
            <img src={recommenderPhoto ? recommenderPhoto : logo} className="w-14 h-14 rounded-full" alt="" /> 
            <h1 className="text-xl  font-semibold">{recommenderName}</h1> 
        </div>
        <hr className="border border-gray-300" />



        <h2 className="card-title">Recommendation Brand : {recommendationBrand}</h2>
        <p><span className="font-semibold">Recommendation Reason</span> <br /> {recommendationReason}</p>
        <div className="card-actions justify-end">
          <h1><span className="font-semibold">Recommendation post </span>  <br /> {new Date(timestamp).toLocaleString()}</h1>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
