import React from 'react';

import { categories } from '../constants/imagepaths';

const ShopByCategory = () => {
  return (
    <section className="bg-[#fff8f1] py-16 px-6 border-[#d6bfae] my-6 w-full" >
      <h2 className="text-3xl font-bold text-[#4b2e2e] mb-12 text-center font-serif">
        Most Loved Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col items-center"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-[#5e3c2b] mb-2">{cat.title}</h3>
            <button className="text-sm text-white bg-[#c87d4a] px-4 py-2 rounded hover:bg-[#a76639]">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
