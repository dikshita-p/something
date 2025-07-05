import { useState } from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';


function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 bg-[#874419] text-white shadow-md">
        
    {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 object-cover"
            />
            <h1 className="text-xl font-semibold text-white">Weavera</h1>
          </Link>
        </div>   

        {/* Search */}
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search handcrafted clothing..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full bg-white focus:outline-none"
          />
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/category" className="text-white hover:underline">Shop By Category</Link>
          <Link to="/designer" className="text-white hover:underline">Shop By Designer</Link>

          <button 
          onClick={() => setShowCart(true)}
          className="text-white">
           🛒
          </button>
          

          <button
            onClick={() => setShowLogin(true)}
            className="px-4 py-2 text-white "
          >
            Login
          </button>
        </div>
      </nav>

      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}

      {/* <div className="border-[#d6bfae] my-6 w-full"></div> */}
    
      
    </>
  );
}

export default Navbar;


