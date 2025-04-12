import React from 'react';

const products = [
  {
    name: 'Hand-Painted Jacket',
    image: 'https://i.ibb.co/Y8Ssc2P/product1.jpg',
    price: '₹3,500',
  },
  {
    name: 'Embroidered Bag',
    image: 'https://i.ibb.co/0hzHkny/product2.jpg',
    price: '₹1,800',
  },
  {
    name: 'Handcrafted Shoes',
    image: 'https://i.ibb.co/W2h8H7g/product3.jpg',
    price: '₹2,200',
  },
];

const PopularProducts = () => {
  return (
    <div className="py-10 px-4 bg-[#f2e4d5]">
      <h2 className="text-3xl font-bold text-center text-[#5e3c2b] mb-8">
        Popular Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-[#7b4b34]">
                {product.name}
              </h3>
              <p className="text-lg text-[#b0744e]">{product.price}</p>
              <button className="mt-4 px-6 py-2 bg-[#7b4b34] text-white rounded-lg hover:bg-[#5e3c2b] transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
