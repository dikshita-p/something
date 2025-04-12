import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#5C4033] text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <img src="/logo192.png" alt="logo" className="h-8 w-8" />
          <span className="text-xl font-semibold">Varnika</span>
        </div>

        {/* Navigation Buttons */}
        <div className="space-x-6">
          <button className="hover:text-[#E6D3C1] transition">About Us</button>
          <button className="hover:text-[#E6D3C1] transition">Login</button>
          <button className="hover:text-[#E6D3C1] transition border border-white px-3 py-1 rounded">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
