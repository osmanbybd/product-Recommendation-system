import axios from "axios";
import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FaCrown,FaUserCircle  } from "react-icons/fa";
const TopContriButors = () => {
  const [topContriButors, setTopContributors] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_URL}/queries`).then((res) => {
      console.log(res?.data);
      const countMap = [];
      res?.data?.forEach((query) => {
        const email = query.userEmail;
        if (email) {
          countMap[email] = (countMap[email] || 0) + 1;
        }
      });
      const sortedBrand = Object.entries(countMap)
        .map(([email, count]) => ({ email, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      setTopContributors(sortedBrand);
    });
  }, []);


  console.log(topContriButors)
  return (
    <div className="container mx-auto ">


    <div className="my-10">
        <Slide triggerOnce direction="left">
            <h1 className="text-center lg:text-6xl md:text-3xl text-xl font-semibold flex justify-center items-center"><FaCrown className="text-blue-600" /> Top Contributors</h1>
        </Slide>
    </div>


      <div className="overflow-x-auto w-full">
        <div className=" min-w-[800px] mx-auto glass-table p-3 my-3">
          <table className="table ">
            {/* head */}
            <thead className="bg-green-100 text-gray-700 rounded-xl uppercase">
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Total Queries Count</th>
               
              </tr>
            </thead>
            <tbody>
     
              {topContriButors.map((allQuery, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 hover:scale-[1.01] transition-all duration-200"
                >
                    
                  <td >{index + 1}</td>
                  <td className="flex  items-center gap-5 text- xl"><FaUserCircle size={20} className="text-blue-500" />{allQuery.email}</td>
                  <td> {allQuery.count}</td>
      
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopContriButors;
