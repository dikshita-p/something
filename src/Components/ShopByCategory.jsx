import React from 'react';

const categories = [
  {
    title: 'Hand-Painted',
    image: 'https://i.ibb.co/p4ZZ6nQ/handpainted.jpg',
  },
  {
    title: 'Embroidered',
    image: 'https://i.ibb.co/CHWShDn/embroidered.jpg',
  },
  {
    title: 'Accessories',
    image: 'https://i.ibb.co/2vNvWgf/accessories.jpg',
  },
];

const ShopByCategory = () => {
  return (
    <div className="py-10 px-4 bg-[#fef7f1]">
      <h2 className="text-3xl font-bold text-center text-[#5e3c2b] mb-8">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-[#7b4b34]">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
