import React, { useState } from 'react';

import { designers } from '../constants/textConstants';


const ShopByDesigner = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#fdf7f1] py-16 px-6 relative border-[#d6bfae] my-6 w-full">
      <h2 className="text-3xl font-bold text-[#4b2e2e] mb-12 text-center font-serif">
        Top Designers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto relative">
        {designers.map((designer, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 className="text-lg font-bold text-[#5e3c2b]">{designer.name}</h3>
            <p className="text-sm text-[#7e5e42] font-medium">{designer.business}</p>
            <p className="text-sm text-[#a88664] italic">{designer.specialty}</p>

            {/* Popup */}
            {hovered === index && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-72 bg-[#fff8f1] text-[#4b2e2e] border border-[#e0cdb7] rounded-lg shadow-xl px-5 py-4 z-50 transition-opacity duration-300 opacity-100">
                <h4 className="font-semibold text-[#5e3c2b] mb-1">{designer.business}</h4>
                <p className="text-sm mb-2">{designer.description}</p>
                <a
                  href={designer.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#c87d4a] underline hover:text-[#a76639]"
                >
                  Visit Instagram
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByDesigner;
