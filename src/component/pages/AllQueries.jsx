import React, { useEffect, useState } from "react";
import { FaBars, FaTable, FaTh, FaThLarge } from "react-icons/fa";
import { motion } from "motion/react";
import { Fade } from "react-awesome-reveal";
import AllQueryCard from "./AllQueryCard";

import { Link, NavLink } from "react-router";
import axios from "axios";
import "aos/dist/aos.css";
import Aos from "aos";
const AllQueries = () => {
  const [allQueries, setAllQueries] = useState([]);
  const [layout, setLayout] = useState("grid-3");
  const [searchText, setSearchText] = useState("");
    
  useEffect(() => {
    axios(`${import.meta.env.VITE_URL}/queries?limit=0`).then((data) => {
      // console.log(data?.data);
      setAllQueries(data?.data);
    });
  }, []);

  const handleSearch = (e) => {
    const recommendationsText = e.target.value.toLowerCase();
    setSearchText(recommendationsText);
  };
  const recommendationsFilter = allQueries.filter((query) =>
    query?.productName.toLowerCase().includes(searchText)
  );

  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 5000,
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto  ">
      <div className="my-3 rounded-lg glass-section">
        <div className="text-center  space-y-4 py-3 ">
          <h1 className="lg:text-6xl font-bold md:text-4xl text-2xl space-x-3">
            Explore All
            <motion.span
              animate={{
                color: ["#F97A00", "#16610E", "#FE5D26", "#C1DBB3"],
                transition: { duration: 3, repeat: Infinity },
              }}
            >
              Queries
            </motion.span>
          </h1>

          <Fade cascade delay={200} duration={1000} fraction={0.5} triggerOnce>
            <p className="text-xl">
              Discover what users are asking and recommend better alternatives.
            </p>
          </Fade>
        </div>

        <div className="flex flex-col lg:flex-row md:flex-row lg:items-center justify-between gap-4 p-4 px-5">
          {/* <label htmlFor=""> Search Your Recommendation Product</label>
            <br /> */}
          <input
            type="text"
            placeholder="Small"
            value={searchText}
            onChange={handleSearch}
            className="input input-sm"
          />
          <div className="flex gap-3">
            <NavLink
              onClick={() => setLayout("grid-2")}
              className={`p-2 rounded-md transition ${
                layout === "grid-2" ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              <FaTh size={20}></FaTh>
            </NavLink>
            <NavLink
              onClick={() => setLayout("grid-3")}
              className={`p-2 rounded-md transition ${
                layout === "grid-3" ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              <FaThLarge size={20}></FaThLarge>
            </NavLink>
            <NavLink
              onClick={() => setLayout("table")}
              className={`p-2 rounded-md transition ${
                layout === "table" ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              <FaTable size={20}></FaTable>
            </NavLink>
          </div>
        </div>
      </div>

      {layout.startsWith("grid") && (
        <div
          className={`grid  gap-3
          my-4
            grid-cols-1
            md:grid-cols-2 
            
            lg:${layout === "grid-2" ? "grid-cols-3" : "grid-cols-4"}`}
          data-aos="fade-up"
        >
          {recommendationsFilter.map((allQuery) => (
            <AllQueryCard key={allQuery._id} allQuery={allQuery}></AllQueryCard>
          ))}
        </div>
      )}

      {/* table formate */}
      {layout === "table" && (
        <div className="overflow-x-auto w-full">
          <div className=" min-w-[800px] mx-auto glass-table rounded-lg shadow-lg  p-3 my-3">
            <table className="table ">
              {/* head */}
              <thead className="bg-green-100 text-gray-700 rounded-xl uppercase">
                <tr>
                  <th>Product Photo</th>
                  <th>Product name</th>
                  <th>Product Title</th>
                  <th>Recommendation </th>
                  <th>Time </th>
                  <th>Product Details </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {recommendationsFilter.map((allQuery) => (
                  <tr
                    key={allQuery._id}
                    className="hover:bg-gray-100 hover:scale-[1.01] transition-all duration-200"
                  >
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={allQuery.ProductPhoto}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{allQuery.productName}</td>
                    <td>{allQuery.productTitle}</td>
                    <th>{allQuery.recommendationCount?.length || 0}</th>
                    <th> {new Date(allQuery.timestamp).toLocaleString()}</th>
                    <th>
                      <Link
                        to={`/queries/${allQuery._id}`}
                        className="btn btn-primary"
                      >
                        Details
                      </Link>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllQueries;
