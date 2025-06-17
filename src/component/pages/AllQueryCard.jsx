import React from 'react';
import { Link } from 'react-router';

const AllQueryCard = ({allQuery}) => {
    // console.log(allQuery)

    const {productName, productTitle ,ProductPhoto,recommendationCount,_id} = allQuery



    return (
         <div className="card glass-card  hover:shadow-xl  shadow-lg  transform transition-transform duration-500 ease-in-out hover:scale-105" >
      <figure>
        <img src={ProductPhoto} className="w-110 h-50" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>{productTitle}</p>
        <div className="card-actions justify-end">
            <p>Recommendation Count : {recommendationCount?.length || 0}</p>
          <Link to={`/queries/${_id}`} className="btn glass-btn">
          Recommended
          </Link>
        </div>
      </div>
    </div>
    );
};

export default AllQueryCard;