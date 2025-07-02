import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import QueryCard from "./QueryCard";
import MyqQueryCard from "./MyqQueryCard";
import axiosInstance from "../hooks/useAsxioxSecure";
import Aos from "aos";
import "aos/dist/aos.css";

const MyQueries = () => {
  const { user } = use(AuthContext);
  const [myQueries, setMyQueries] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosInstance(`/my-queries/${user.email}`).then((res) => {
        setMyQueries(res?.data || []);
      });
    }
  }, [user]);

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="px-4 py-8 space-y-10">
      {/* 🔷 Header Section */}
      <div
        className="glass-banner text-center py-10 px-6 max-w-5xl mx-auto"
        data-aos="fade-down"
      >
        <h1 className="text-3xl lg:text-5xl font-bold text-[#687FE5] mb-4">
          <Typewriter
            words={["Want to Add a New Product Query?"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>

        <Fade cascade delay={300} duration={1000} triggerOnce>
          <p className="lg:text-lg text-white mb-6">
            Submit your query and let others recommend the best product for you.
          </p>
        </Fade>

        <Link to="/dashboard/addQuery" className="glass-btn inline-block">
          Add New Query
        </Link>
      </div>

      {/* 📁 My Queries Section */}
      <div className="space-y-5">
        <Fade cascade delay={200} duration={1000} triggerOnce>
          <h2 className="text-center text-3xl lg:text-5xl font-bold text-[#687FE5]">
            📁 My Product Queries
          </h2>
        </Fade>

        {myQueries.length > 0 ? (
          <div
            className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
            data-aos="fade-up"
          >
            {myQueries.map((query) => (
              <MyqQueryCard key={query._id} query={query} />
            ))}
          </div>
        ) : (
          <div className="text-center text-white py-10 glass-section max-w-xl mx-auto">
            <p className="text-lg">No queries found yet. Start by adding one!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyQueries;
