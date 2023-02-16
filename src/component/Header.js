import React from "react";
import { Link } from "react-router-dom";
import headLogo from "../assets/head-logo.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="bg-black flex justify-between py-2 px-2">
      <div className="flex justify-center items-center gap-4">
        <Link to="/">
          <img src={headLogo} alt="img" className="md:w-10 md:h-10 w-10 h-10" />
        </Link>
        {location.pathname === "/contact" && (
          <Link
            to="/"
            className="text-white hover:underline pr-3 font-bold text-sm md:text-base"
          >
            Home
          </Link>
        )}
      </div>
      <div className="flex justify-between items-center">
        {/* <Link to='about' className='pr-3 font-bold'>About</Link> */}
        <Link
          to="contact"
          className="pr-3 font-bold text-white text-sm md:text-base"
        >
          Contact
        </Link>
        {/* <div className='pr-3 font-bold'><img src={cartLogo} alt='img'className='md:w-10 md:w-10 w-10 h-10'/></div> */}
      </div>
    </div>
  );
};
export default Header;
