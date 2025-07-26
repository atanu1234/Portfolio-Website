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
      <nav className="bg-gray-800 p-4 flex justify-end w-full ">
        <div className="-mr-2 flex md:hidden lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
          >
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <ul className=" hidden lg:flex space-x-10 float-right mx-10 justify-end">
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
            <NavLink to="/skills" className="text-white hover:text-orange-300">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className="text-white hover:text-red-300">
              Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-white hover:text-yellow-300">
              Contact
            </NavLink>
          </li> 
        </ul>
      </nav>
      {/*--------- mobile-------- */}
      {isOpen && (
        <nav className="lg:hidden md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-500">
            <li>
              <NavLink
                to="/"
                className="text-white hover:bg-gray-700 hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-white hover:bg-gray-700 hover:text-green-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/skills"
                className="text-white hover:bg-gray-700 hover:text-orange-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className="text-white hover:bg-gray-700 hover:text-red-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-white hover:bg-gray-700 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
