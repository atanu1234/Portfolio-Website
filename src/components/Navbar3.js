import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      
      <nav className="bg-gray-800 p-4 flex justify-end w-screen"
      >
        <ul className="lg:flex space-x-10 float-right mx-10 justify-end">
          <li>
            <NavLink to="/" className="text-white hover:text-blue-300">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-white hover:text-green-300">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-white hover:text-yellow-300">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
