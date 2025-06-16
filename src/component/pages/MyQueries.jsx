import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import QueryCard from "./QueryCard";
import 'aos/dist/aos.css';
import Aos from "aos";
import MyqQueryCard from "./MyqQueryCard";
const MyQueries = () => {
  const { user } = use(AuthContext);
  const [myQueries, setMyQueries] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios(`${import.meta.env.VITE_URL}/my-queries/${user.email}`).then(
        (data) => {
          console.log(data.data);
          const myAllQueries = data?.data
          setMyQueries(myAllQueries)
        }
      );
    }
  }, [user]);


  
  useEffect(() =>{
    Aos.init({
      duration: 2000,
      delay: 5000,
      once: true
    })
  },[])
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center py-25 space-y-5 glass-banner  m-5">
        <div>
          {/* <h1>Want to Add a New Product Query?</h1> */}
          <span className="text-5xl text-blue-600 font-bold">
            <Typewriter
              words={["Want to Add a New Product Query?"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            ></Typewriter>
          </span>
          <Fade cascade delay={200} duration={1000} fraction={0.5} triggerOnce>
            <p className="lg:text-xl text-center ">
              Submit your query and let others recommend the best product for
              you.
            </p>
          </Fade>
        </div>
        <Link to="/addQuery" className="btn btn-primary">
          Add Queries
        </Link>
      </div>



        <div className="my-5">
            
               <Fade
                  cascade
                  delay={200} 
                  duration={1000} 
                  fraction={0.5} 
                  triggerOnce
                >
                <h1 className="text-center lg:text-6xl md:text-3xl text-xl font-bold">📁 My Product Queries</h1>
                </Fade>



            <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-5 p-3 "  data-aos="fade-up">
                    {
                        myQueries.map(query => <MyqQueryCard key={query._id} query={query}></MyqQueryCard>)
                    }
            </div>


        </div>



    </div>
  );
};

export default MyQueries;
