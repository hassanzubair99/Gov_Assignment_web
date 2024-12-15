import React from "react";

const NavBar = () => {
  return (
    <div className="w-full">
      <div className="bg-back-900 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <span>
              <i className="fas fa-phone-alt"></i> (225) 555-0118
            </span>
            <span>
              <i className="fas fa-envelope"></i> michelle.rivera@example.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow Us and get a chance to win 80% off</span>
            <div className="flex space-x-2">
              <a href="#" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">Bandage</div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-700">
              Home
            </a>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-blue-700">
                Shop
              </a>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 py-2 w-40">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Men
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Women
                </a>
              </div>
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              Contact
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700">
              Pages
            </a>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4 text-gray-700">
            <a href="#" className="hover:text-blue-700">
              Login / Register
            </a>
            <a href="#" className="hover:text-blue-700">
              <i className="fas fa-shopping-cart"></i> 1
            </a>
            <a href="#" className="hover:text-blue-700">
              <i className="fas fa-heart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
