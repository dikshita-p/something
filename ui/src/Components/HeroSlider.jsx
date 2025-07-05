import React, { useState, useEffect } from 'react';
import { slides } from "../constants/imagepaths";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const goToNext = () => setCurrent((current + 1) % slides.length);

  return (
    <>
    <div className="flex justify-between items-center bg-[#f4e9dc] px-16 py-20 relative overflow-hidden h-[60vh]">
      
      {/* Text Content */}
      <div className="flex-1 max-w-[45%] text-[#4b2e2e]">
        <h1 className="text-5xl font-serif mb-2">{slides[current].heading}</h1>
        <h2 className="text-2xl font-light mb-6">{slides[current].subheading}</h2>
        <button className="bg-[#c87d4a] hover:bg-[#a76639] text-white px-6 py-3 rounded font-bold">
          {slides[current].buttonText}
        </button>
      </div>

      {/* Image Content */}
      <div className="flex-1 text-right">
        <img
          src={slides[current].image}
          alt="Handmade Art"
          className="h-[60vh] object-cover rounded-xl mx-auto"
        />
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-3xl text-[#5e3c2b] hover:text-[#3b261a]"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-3xl text-[#5e3c2b] hover:text-[#3b261a]"
      >
        &#10095;
      </button>
    </div>
    <div className="border-[#d6bfae] my-6 w-full"></div>
    </>
  );
};

export default HeroSlider;
