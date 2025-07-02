import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliders = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1742420854124-55ae55dac0ae?q=80&w=2070&auto=format&fit=crop",
      title: "Confused About Products?",
      description: "Ask queries & get trusted recommendations from real users.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1675524375058-0b0f72f5d3b8?q=80&w=2070&auto=format&fit=crop",
      title: "Get Better Alternatives",
      description: "Our community suggests better options based on experience.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1724861836697-108df2b8e6c5?q=80&w=2070&auto=format&fit=crop",
      title: "Make Smart Choices",
      description: "Choose products after understanding real-time feedback.",
    },
  ];

  return (
    <div className="">
      <Slider {...settings}>
        {sliders.map((slider, idx) => (
          <div key={idx}>
            <div className=" container mx-auto min-h-[60vh] lg:min-h-[70vh] flex flex-col md:flex-row justify-evenly items-center gap-8 p-6">
              {/* Text Section */}
              <div className="md:w-1/2 space-y-4">
                <motion.h1
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { duration: 1 } }}
                  className="lg:text-6xl md:text-4xl text-2xl font-bold "
                >
                  {slider.title}
                </motion.h1>
                <Fade cascade delay={200} duration={1000} triggerOnce>
                  <p className="lg:text-xl ">{slider.description}</p>
                </Fade>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2">
                <img
                  src={slider.image}
                  alt={slider.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
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
