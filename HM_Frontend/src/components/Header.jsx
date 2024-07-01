import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  const handleMenuClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -70; // Adjust offset based on your header height or other fixed elements
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false); // Close the mobile menu after clicking on a menu item
    }
  };

  return (
    <header className="bg-white shadow-md fixed z-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-12 w-auto" src="../../public/HotelManagement.png" alt="Hotel Logo" />
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={() => handleMenuClick('home')}>Home</Link>
            <a href="#rooms" className="text-gray-700 hover:text-gray-900" onClick={() => handleMenuClick('rooms')}>Rooms</a>
            <a href="#services" className="text-gray-700 hover:text-gray-900" onClick={() => handleMenuClick('services')}>Services</a>
            <a href="#booking" className="text-gray-700 hover:text-gray-900" onClick={() => handleMenuClick('booking')}>Booking</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900" onClick={() => handleMenuClick('about')}>About Us</a>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900" onClick={() => handleMenuClick('contact')}>Contact Us</Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <select className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md">
                <option>EN</option>
                <option>ES</option>
                <option>FR</option>
                <option>DE</option>
              </select>
            </div>
            <Link to="/signin" className="ml-4 text-gray-700 hover:text-gray-900 hidden md:block">Login</Link>
            <Link to="/signup" className="ml-4 text-gray-700 hover:text-gray-900 hidden md:block">Sign Up</Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link onClick={() => setIsOpen(!isOpen)} to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
            <a href="#rooms" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => handleMenuClick('rooms')}>Rooms</a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => handleMenuClick('services')}>Services</a>
            <a href="#booking" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => handleMenuClick('booking')}>Booking</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => handleMenuClick('about')}>About Us</a>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsOpen(!isOpen)}>Contact Us</Link>
            <select className="block w-full px-3 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
              <option>DE</option>
            </select>
            <Link onClick={() => setIsOpen(!isOpen)} to="/signin" className="block mt-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Login</Link>
            <Link onClick={() => setIsOpen(!isOpen)} to="/signup" className="block mt-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
