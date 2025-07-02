import React from 'react';
import { Link } from 'react-router';

const QueryCard = ({query}) => {
    // console.log(query)
    const {productName , ProductPhoto , productTitle, _id , recommendationCount, timestamp} = query
    return (
       <div className="card glass-card cursor-pointer text-black shadow-sm transform transition-transform duration-500 ease-in-out hover:scale-105">
  <figure>
    <img
      src={ProductPhoto}
      className='w-110 h-50'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{productName}</h2>
    <p>{productTitle}</p>
    <div className="card-actions flex justify-between items-center">
      <h1 className='font-semibold'>RecommendationCount : {recommendationCount.length || 0}</h1>
      <Link to={`/queries/${_id}`} className="btn glass-btn btn-primary">Recommended</Link>
    </div>
    <div>
      <span>Post By :   {new Date(timestamp).toLocaleString()}</span>
    </div>
  </div>
</div>
    );
};

export default QueryCard;