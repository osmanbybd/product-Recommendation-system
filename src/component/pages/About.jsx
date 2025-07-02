import React from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="  flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full space-y-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-4">
            🤝 Welcome to ProductReco
          </h1>
          <p className="text-lg md:text-xl text-black max-w-2xl mx-auto">
            A smarter way to decide what to buy — powered by real users and genuine experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 glass-section rounded-2xl p-8">
          <Fade cascade damping={0.2} triggerOnce>
            <div>
              <h2 className="text-2xl font-bold text-teal-800 mb-2">🌟 Our Mission</h2>
              <p className="text-black">
                ProductReco aims to empower everyday consumers with honest and personalized product recommendations. We bring a community together to share real experiences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-teal-800 mb-2">🔍 Why Choose Us?</h2>
              <ul className="list-disc list-inside text-black space-y-1">
                <li>No paid promotions</li>
                <li>Community-driven insights</li>
                <li>Transparent recommendations</li>
                <li>Smart decision-making assistance</li>
              </ul>
            </div>
          </Fade>
        </div>

        <div className="text-center pt-10">
          <p className="text-white/70 text-sm">
            Built with ❤️ to make shopping decisions easier and smarter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
