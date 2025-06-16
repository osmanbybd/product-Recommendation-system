import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import { motion } from "motion/react";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // ✅ Auto play enabled
    autoplaySpeed: 3000,
  };

  const sliders = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1742420854124-55ae55dac0ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Confused About Products?",
      description: "Ask queries & get trusted recommendations from real users.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1675524375058-0b0f72f5d3b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Get Better Alternatives",
      description: "Our community suggests better options based on experience.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1724861836697-108df2b8e6c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Make Smart Choices",
      description: "Choose products after understanding real-time feedback.",
    },
  ];

  return (
    <div className="w-full max-w-9xl mx-auto ">
      <Slider {...settings} className="h-100 ">
        {sliders.map((slider) => (
          <div className="">
            <div className="flex flex-col md:flex-row justify-center items-center lg:gap-55 glass-banner m-5 ">
              <div>
                <motion.h1
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1,
                    transition: { duration: 4 },
                  }}
                  className="lg:text-7xl md:text-3xl text-xl"
                >
                  {" "}
                  
                    {slider.title}
                  
                </motion.h1>
                <Fade
                  cascade
                  delay={200} 
                  duration={1000} 
                  fraction={0.5} 
                  triggerOnce
                >
                  <p className="lg:text-2xl">{slider.description}</p>
                </Fade>
              </div>

              <div>
                <img
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                  src={slider.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
