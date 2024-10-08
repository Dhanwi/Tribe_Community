import React, { useState, useEffect } from "react";
import { TypewriterEffect } from "../ui/typewriterEffect/typewriter-effect";

import "./Hero.css"

const slides = [
  "/assets/image/slide1.png",
  "/assets/image/slide2.png",
  "/assets/image/slide3.png",
];

const words = [
  {
    text: "Empowering",
  },
  {
    text: "Tribal",
  },
  {
    text: "Communities",
  },
  {
    text: "In",
    // className: " text-black ",
  },
  {
    text: "Chhattisgarh",
  }
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        ></div>
      ))}

      <div className="relative z-10 text-center text-white p-4 bg-opacity-50 rounded-lg items-center justify-between">
        <h1 className="font-black pt-32 text-slate-100 text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
        {/* text-base sm:text-lg md:text-2xl lg:text-3xl */}
          Tribal Development Initiatives
        </h1>
        <p className="pt-8 mb-8 font-bold text-slate-300 text-3xl">
          {/* Empowering Tribal Communities in Chhattisgarh */}
          <TypewriterEffect words={words} />
        </p>
      </div>

      <div className="absolute inset-0 bg-black opacity-20"></div>
    </section>
  );
};

export default Hero;


