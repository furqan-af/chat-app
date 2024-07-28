import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <nav className="bg-gray-900 text-white p-4 fixed top-0 left-0 w-full flex items-center justify-between shadow-md z-50">
      {/* Logo */}
      <div className="text-2xl font-bold flex-shrink-0">
        <Link to="/">ChatMaster</Link>
      </div>



      <div className="hidden md:flex items-center space-x-6 flex-grow justify-end">
        <Link
          to="/dashboard"
          className="hover:bg-gray-700 px-4 py-2 rounded-md transition-colors duration-300"
        >
          Dashboard
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-300"
      >
        Menu
      </button>



      {isOpen && (

        <div className="absolute top-16 right-4 w-48 bg-gray-800 rounded-md shadow-lg md:hidden">
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
