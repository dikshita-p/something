import React, { useState, useEffect } from 'react';

const slides = [
  {
    quote: '“Art is not a thing, it is a way.” – Elbert Hubbard',
    image: 'https://i.ibb.co/k5tPBtD/handpaint1.jpg',
  },
  {
    quote: '“Creativity takes courage.” – Henri Matisse',
    image: 'https://i.ibb.co/PNMCvcK/handpaint2.jpg',
  },
  {
    quote: '“Every artist was first an amateur.” – Emerson',
    image: 'https://i.ibb.co/WBKr5KJ/handpaint3.jpg',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt="Art Slide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-center max-w-3xl px-4">
              {slide.quote}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
