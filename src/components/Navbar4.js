import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white font-bold text-2xl">Logo</h1>
          </div>
          <div className="-mr-2 flex md:hidden">
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="/services" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </a>
              <a href="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="/about" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="/services" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="/contact" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
