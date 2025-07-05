import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f4e9dc] text-[#4b2e2e] px-8 py-12 mt-10 border-[#d8c1aa]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand Intro */}
        <div>
          <h3 className="text-xl font-bold mb-3 font-serif">Weavera</h3>
          <p className="text-sm">
            Celebrating the charm of handmade. Weavera curates handcrafted clothing
            from India’s most talented designers and artisans.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Shop All</a></li>
            <li><a href="#" className="hover:underline">New Arrivals</a></li>
            <li><a href="#" className="hover:underline">Shop by Category</a></li>
            <li><a href="#" className="hover:underline">Shop by Designer</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Pinterest</a></li>
            <li><a href="#" className="hover:underline">Join Our Newsletter</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-[#7e5e42] mt-10">
        © {new Date().getFullYear()} Weavera. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
