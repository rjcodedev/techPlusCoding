import React, { useState } from "react";
import { Link } from "react-router-dom";
import headLogo from "../assets/head-logo.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  console.log("host", window.location.host);
  return (
    <div className="bg-blue-500 flex justify-between py-2 px-2">
      <div className="flex justify-center items-center gap-4">
        <Link to="/">
          <img src={headLogo} alt="img" className="md:w-10 md:h-10 w-10 h-10" />
        </Link>
        {location.pathname === "/" ? (
          <div className="text-white pr-3 font-bold text-sm md:text-base">
            {window.location.host}
          </div>
        ) : (
          <Link
            to="/"
            className="text-white hover:underline pr-3 font-bold text-sm md:text-base"
          >
            Home
          </Link>
        )}
      </div>

      {/* desktop/large device Menu */}

      <div className="hidden md:flex justify-between items-center gap-2 mr-3">
        <Link
          to="/carrer"
          className="px-2 py-2 font-bold text-white text-sm md:text-base hover:underline underline-offset-2"
        >
          Carrer
        </Link>
        <Link
          to="/ebook"
          className="px-2 py-2 font-bold text-white text-sm md:text-base hover:underline underline-offset-2"
        >
          E-Book
        </Link>
        <Link
          to="contact"
          className="px-2 py-2 font-bold text-white text-sm md:text-base hover:underline underline-offset-2"
        >
          Contact
        </Link>
      </div>
      <div
        onClick={() => setIsMenuVisible(!isMenuVisible)}
        className="md:hidden px-2 py-2 font-bold text-white text-sm md:text-base hover:underline underline-offset-2"
      >
        Menu
      </div>
      {/* Mobile device Menu */}
      {isMenuVisible && (
        <div className="absolute right-0 top-14 bg-black z-40">
          <div className="md:hidden flex flex-col justify-between items-center gap-2 mr-3">
            <Link
              to="/carrer"
              className="px-2 py-2 font-bold text-white text-sm md:text-base hover:underline underline-offset-2"
            >
              Carrer
            </Link>
            <Link
              to="/ebook"
              className="px-2 py-2 font-bold text-white text-sm md:text-base hover:underline underline-offset-2"
            >
              E-Book
            </Link>
            <Link
              to="contact"
              className="px-2 py-2 font-bold text-white text-sm md:text-base hover:underline underline-offset-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
