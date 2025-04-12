import React from 'react';

const designers = [
  {
    name: 'Aarushi Sharma',
    image: 'https://i.ibb.co/4gCPGHL/designer1.jpg',
  },
  {
    name: 'Neha Singh',
    image: 'https://i.ibb.co/qYZztXj/designer2.jpg',
  },
  {
    name: 'Ritika Mehra',
    image: 'https://i.ibb.co/5YJmcJc/designer3.jpg',
  },
];

const ShopByDesigner = () => {
  return (
    <div className="py-10 px-4 bg-[#fdf4ec]">
      <h2 className="text-3xl font-bold text-center text-[#5e3c2b] mb-8">
        Shop by Designer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {designers.map((designer, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={designer.image}
              alt={designer.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-[#7b4b34]">
                {designer.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByDesigner;
