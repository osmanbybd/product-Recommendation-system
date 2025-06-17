// import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import RecommendationCard from './RecommendationCard';
import { FaArrowUp } from "react-icons/fa";
import axiosInstance from '../hooks/useAsxioxSecure';
import { AuthContext } from '../context/AuthContext';
const RecommendationDetails = ({queryId, refresh}) => {
    console.log(queryId)
    const [AllRecommendation , setAllRecommendation] = useState([])
    const [showAllRecommendation, setShowAllRecommendation] = useState(false)
        const {user} = use(AuthContext)

    useEffect(() => {


        axiosInstance(`/recommendation?queryId=${queryId}&email=${user?.email}`)
        .then(res =>{
            console.log(res?.data)
            setAllRecommendation(res?.data)
        })


    },[queryId,refresh,user])





    return (
        <div>
            <div className='glass-section  flex justify-between items-center rounded-lg shadow-lg p-5 '>
                <h1 className='text-2xl font-semibold text-blue-600'>Recommendation : {AllRecommendation?.length || 0} </h1>
                <button 
                onClick={() => setShowAllRecommendation(!showAllRecommendation)}
                className='btn glass-section'>{showAllRecommendation ? 'Hide Recommendation': 'All Recommendation  '  }</button>
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