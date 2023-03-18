import React from "react";
// import SocialMedia from "../../SocialMedia";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Home = () => {
  const typingKey = [
    "Web Development",
    1000,
    "React.js",
    1000,
    "Javascript, Html, CSS",
    1000,
  ];
  return (
    <div className=" min-h-screen w-full">
      <section className="text-center p-10">
        <div>
          <h2 className="text-3xl py-2 text-black font-medium md:text-5xl">
            Welcome to Tech <span className="text-blue-400">Plus</span> Coding
          </h2>
          <h4 className="text-xl py-2 text-black font-medium md:text-3xl">
            Learn{" "}
            <TypeAnimation
              sequence={typingKey}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-xl py-2 text-red-500 font-medium md:text-3xl"
            />
          </h4>
          {/* <div className="text-sm py-2 text-black font-medium md:text-base px-2 md:px-10">
            Confused on which course to take? I have got you covered. Browse
            courses and find out the best course for you. Its free! Code With
            Harry is my attempt to teach basics and those coding techniques to
            people in short time which took me ages to learn.
          </div> */}
          <div className="py-2">
            <Link to='/ebook'  className="bg-black text-white font-mediumx px-4 py-2 rounded-md text-sm hover:text-gray-300">
              Explore
            </Link>
            <Link to='/freepdf' className="ml-3 bg-gray-200 text-black font-medium px-4 py-2.5 rounded-md text-sm hover:bg-gray-300">
              Free PDF
            </Link>
          </div>
        </div>
      </section>
      <section>
        {/* <SocialMedia /> */}
      </section>
    </div>
  );
};

export default Home;
