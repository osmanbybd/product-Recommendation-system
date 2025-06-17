import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { FaFireAlt } from "react-icons/fa";
const TopQueries = () => {
  const [brandStates, setBrandStates] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_URL}/queries`).then((res) => {
      // console.log(res?.data);
      const brandCount = [];
      res?.data?.forEach((query) => {
        const brand = query.ProductBrand;
        if (brand) {
          brandCount[brand] = (brandCount[brand] || 0) + 1;
        }
      });
      const sortedBrand = Object.entries(brandCount)
        .map(([brand, count]) => ({ brand, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      setBrandStates(sortedBrand);
    });
  }, []);

  // console.log(brandStates);

  return (
    <div className="container mx-auto my-4 p-5">
      <div>
        <Zoom triggerOnce>
          <h1 className="text-center lg:text-6xl md:text-3xl text-xl font-semibold flex  items-center justify-center">
            <FaFireAlt /> Trending <span className="text-blue-600">Brands</span>
          </h1>
        </Zoom>
      </div>

      <Fade cascade delay={200} duration={1000} fraction={0.5} triggerOnce>
        <div className="my-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  ">
          {brandStates.map((brandState, index) => (
            <div
              key={index}
              className="card glass-section  shadow-sm  transform transition-transform duration-500 ease-in-out hover:scale-105"
            >
              <div className="card-body">
                <div>
                  <h1 className="text-3xl font-bold">
                    Brand Name : {brandState.brand}
                  </h1>
                  <h2 className="text-xl font-semibold">
                    Queries : {brandState.count}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default TopQueries;
