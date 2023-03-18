import React from "react";
import Banner from "../../../assets/Banner.jpg";
// import BookList from "./BookList";
import SocialMedia from "../../SocialMedia";
import ReactGA from "react-ga";
import ListUI from "../../ListUI";
import { Books } from "../../utils";
const TRACKING_ID = process.env.REACT_APP_G_ANALYTICS_ID; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const EBookSection = () => {
  // w-[200px] h-[200px] md:w-[310px] md:h-[310px]
  return (
    <div className=" min-h-screen">
      <div className="flex flex-row justify-around items-center bg-slate-300">
        <div className="w-full h-[300px] relative">
          <img src={Banner} alt="boosks" className="w-full h-full " />
          <div className="absolute text-white flex flex-col items-center justify-center w-full h-[300px] bg-black top-0 left-0 bg-opacity-60">
            <p className="font-semibold text-2xl lg:text-4xl">
              Get All The Books You Need!
            </p>
            <p className="font-semibold text-lg lg:text-xl bg-transparent">
              Enhance your skills
            </p>
          </div>
        </div>
        {/* <div className='ml-2 lg:ml-0'><div className='font-bold text-xl md:text-3xl'>Get all the Books </div><div className='font-bold text-xl md:text-3xl'>You Need!</div></div> */}
      </div>
      <div className="bg-red-500 w-full text-center text-white font-medium">
        Get 50% Off On Every Book Purchased
      </div>
      <div className="my-10">
        <ListUI List={Books} />
        {/* <BookList /> */}
      </div>
      <div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default EBookSection;
