import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCogs, FaUsers, FaSignInAlt, FaCamera, FaBars } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full  mx-auto flex justify-between items-center shadow-md px-4 py-2 bg-blue-300">
      <div className="text-black text-2xl font-bold">
      <Link to='/' className="flex items-center text-black hover:text-gray-300">
        Tokopaedi
        </Link>
      </div>

      {/* Hamburger icon for small screens */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-black">
          <FaBars size={24} />
        </button>
      </div>

      {/* Navbar links (stacked vertically on small screens) */}
      <div className={`lg:flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link to='/produk' className="flex items-center text-black hover:text-gray-300">
          <FaCogs className="mr-2" />
          <h1>Produk</h1>
        </Link>
        <Link to='/formIDB' className="flex items-center text-black hover:text-gray-300">
          <FaUsers className="mr-2" />
          <h1>Form IDB</h1>
        </Link>
        <Link to='/grafik' className="flex items-center text-black hover:text-gray-300">
          <FaUsers className="mr-2" />
          <h1>Grafik</h1>
        </Link>
        <Link to='/register' className="flex items-center text-black hover:text-gray-300">
          <FaSignInAlt className="mr-2" />
          <h1>Register</h1>
        </Link>
        <Link to='/camera' className="flex items-center text-black hover:text-gray-300">
          <FaCamera className="mr-2" />
          <h1>Camera</h1>
        </Link>
      </div>
    </div>
  );
}
