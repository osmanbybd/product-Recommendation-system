import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { motion } from "motion/react";
import QueryCard from './QueryCard';
import Aos from "aos";
const QueryCollection = () => {

    const [queries, setQueries] = useState([])


    useEffect(() => {
        axios(`${import.meta.env.VITE_URL}/queries?limit=6`)
        .then(data =>{
            console.log(data.data)
            setQueries(data.data)
        })
    },[])




  useEffect(() =>{
    Aos.init({
      duration: 2000,
      delay: 5000,
      once: true
    })
  },[])


    return (
        <div>
            
        <div>
               <motion.h1
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1,
                    transition: { duration: 4 },
                  }}
                  className="text-center lg:text-7xl md:text-4xl text-2xl font-bold "
                >
                  {" "}
                  
                   🕵️‍♂️ Recent Product Queries
                  
                </motion.h1>
           
        </div>

        <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 py-3 px-3'  data-aos="fade-up">
            {
                queries.map(query => <QueryCard key={query._id} query={query} ></QueryCard>)
            }
        </div>

        </div>
    );
};

export default QueryCollection;