// src/Pages/Home.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSlider from '../Components/HeroSlider';
import Categories from '../Components/ShopByCategory';
import Designers from '../Components/ShopByDesigner';
import PopularProducts from '../Components/PopularProducts';
// import BrandValue from '../Components/BrandValue';
// import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Categories />
      <Designers />
      <PopularProducts />
      {/* <BrandValue /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;