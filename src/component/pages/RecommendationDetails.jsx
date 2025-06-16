import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RecommendationCard from './RecommendationCard';
import { FaArrowUp } from "react-icons/fa";
const RecommendationDetails = ({queryId, refresh}) => {
    console.log(queryId)
    const [AllRecommendation , setAllRecommendation] = useState([])
    const [showAllRecommendation, setShowAllRecommendation] = useState(false)


    useEffect(() => {


        axios(`${import.meta.env.VITE_URL}/recommendation?queryId=${queryId}`)
        .then(res =>{
            console.log(res?.data)
            setAllRecommendation(res?.data)
        })


    },[queryId,refresh])





    return (
        <div>
            <div className='bg-gradient-to-r from-[#6bbd60] to-[#d1f7c4] flex justify-between items-center rounded-lg shadow-lg p-5 '>
                <h1 className='text-2xl font-semibold text-blue-600'>Recommendation : {AllRecommendation?.length || 0} </h1>
                <button 
                onClick={() => setShowAllRecommendation(!showAllRecommendation)}
                className='btn btn-success'>{showAllRecommendation ? 'Hide Recommendation': 'All Recommendation  '  }</button>
            </div>

            {
                showAllRecommendation && ( 
                     <div className='grid grid-cols-1 gap-5 py-4 px-3'>
                    {
                        AllRecommendation.map(recommendation => <RecommendationCard key={recommendation._id} recommendation={recommendation}></RecommendationCard>)
                    }
            </div>
                ) 
            }
        </div>
    );
};

export default RecommendationDetails;