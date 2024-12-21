import React, { useState } from "react";
import { Link } from "react-router-dom";
import headLogo from "../assets/head-logo.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <header className="bg-blue-500 flex justify-between items-center py-2 px-4 border-b border-blue-700">
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        <Link to="/">
          <img src={headLogo} alt="Logo" className="w-10 h-10" />
        </Link>
        {location.pathname === "/" ? (
          <h1 className="text-white font-bold text-base md:text-lg">Tech Plus Coding</h1>
        ) : (
          <Link
            to="/"
            className="text-white font-bold text-base md:text-lg hover:underline"
          >
            Home
          </Link>
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-4 items-center">
        {/* <input
          type="text"
          placeholder="Search eBooks..."
          className="px-10 py-1 text-sm rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        /> */}
        <Link
          to="/categories"
          className="text-white font-medium text-sm md:text-base hover:underline"
        >
          {/* Categories
        </Link>
        <Link
          to="/source"
          className="text-white font-medium text-sm md:text-base hover:underline"
        >
          Source Code
        </Link>
        <Link
          to="/ebook"
          className="text-white font-medium text-sm md:text-base hover:underline" */}
          
          E-Book
        </Link>
        <Link
          to="/contact"
          className="text-white font-medium text-sm md:text-base hover:underline"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuVisible(!isMenuVisible)}
        className="md:hidden text-white font-bold text-sm"
      >
        Menu
      </button>

      {/* Mobile Navigation */}
      {isMenuVisible && (
        <div className="absolute right-4 top-16 bg-blue-500 shadow-lg rounded-md z-50">
          <nav className="flex flex-col gap-2 p-4">
            <input
              type="text"
              placeholder="Search eBooks..."
              className="px-2 py-1 text-sm rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
            />
            <Link
              to="/categories"
              className="text-white font-medium text-sm hover:underline"
              onClick={() => setIsMenuVisible(false)}
            >
              Categories
            </Link>
            <Link
              to="/source"
              className="text-white font-medium text-sm hover:underline"
              onClick={() => setIsMenuVisible(false)}
            >
              Source Code
            </Link>
            <Link
              to="/ebook"
              className="text-white font-medium text-sm hover:underline"
              onClick={() => setIsMenuVisible(false)}
            >
              E-Book
            </Link>
            <Link
              to="/contact"
              className="text-white font-medium text-sm hover:underline"
              onClick={() => setIsMenuVisible(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
