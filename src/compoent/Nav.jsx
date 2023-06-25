import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 nav fixed top-0 left-0 right-0">
      <div className="flex items-center">
        <a href="#" className="text-white font-bold text-xl">Portfolio</a>
      </div>
      <div className="block links">
        <ul className="flex space-x-4 ul">
          <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
          <li><a href="#body" className="text-white hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

