import React, { useState } from 'react';

const LoginForm = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-[#fff8f1] text-[#3e2a1d] w-[380px] p-8 rounded-xl shadow-xl relative font-sans">
        
        {/* Close Button */}
        <button
          className="absolute top-2 right-4 text-2xl text-[#5e3c2b] hover:text-[#4d2f22]"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-2xl text-center mb-5 font-semibold text-[#5e3c2b]">
          {isSignup ? 'Create Account' : 'Login'}
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4">
          {isSignup ? (
            <>
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-2 border border-[#c7a17a] rounded-md text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 border border-[#c7a17a] rounded-md text-sm"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 border border-[#c7a17a] rounded-md text-sm"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="px-4 py-2 border border-[#c7a17a] rounded-md text-sm"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="px-4 py-2 border border-[#c7a17a] rounded-md text-sm"
              />
              <small className="text-[11px] text-[#7e5e42]">OTP will be sent for verification</small>
              <button
                type="submit"
                className="bg-[#5e3c2b] text-white py-3 font-semibold rounded-md hover:bg-[#4d2f22]"
              >
                SUBMIT
              </button>
            </>
          ) : (
            <>
              <label className="text-sm">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="px-4 py-2 border border-[#c7a17a] rounded-md text-sm"
              />
              <label className="text-sm">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 border border-[#c7a17a] rounded-md text-sm"
              />
              <button
                type="submit"
                className="bg-[#5e3c2b] text-white py-3 font-semibold rounded-md hover:bg-[#4d2f22] mt-1"
              >
                Sign in
              </button>
              <p className="text-center text-sm mt-2">
                Don’t have an account?{' '}
                <span
                  onClick={() => setIsSignup(true)}
                  className="text-[#5e3c2b] font-semibold cursor-pointer"
                >
                  Sign Up
                </span>
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
