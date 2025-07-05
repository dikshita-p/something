import React from 'react';

import { products } from '../constants/imagepaths';

const PopularProducts = () => {
  return (
    <section className="bg-[#fcf7f1] py-16 px-6">
      <h2 className="text-3xl font-bold text-[#4b2e2e] mb-12 text-center font-serif">
        Popular Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#5e3c2b]">{product.name}</h3>
              <p className="text-sm text-[#a88664] mb-3">{product.category}</p>
              <button className="bg-[#c87d4a] text-white px-4 py-2 rounded hover:bg-[#a76639] text-sm">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
