import React from "react";
import Book1 from "../../../assets/Books/Book1.png";
import Book2 from "../../../assets/Books/Book2.png";
import Book3 from "../../../assets/Books/Book3.png";
import Book4 from "../../../assets/Books/Book4.jpg";
import Book5 from '../../../assets/Books/Book5.png'
const BookList = () => {
  const Books = [
    {
      id: 1,
      img: Book1,
      name: "Learning the HTML for Beginner",
      subName: "step by step Guide",
      mrp: 300,
      price: 149,
      currency: "₹",
      url: "https://rzp.io/l/LearnHTML",
    },
    {
      id: 2,
      img: Book2,
      name: "Javascript Note for beginner to advanced",
      subName: "step by step Guide",
      mrp: 398,
      price: 199,
      currency: "₹",
      url: "https://rzp.io/l/LearnJavaScript",
    },
    {
      id: 3,
      img: Book3,
      name: "Top 50 + Linux command for Programmer",
      subName: "step by step Guide",
      mrp: 300,
      price: 149,
      currency: "₹",
      url: "https://rzp.io/l/LearnLinux",
    },
    {
      id: 4,
      img: Book4,
      name: "Complete overview of frontend Developer",
      subName: "step by step Guide",
      mrp: 398,
      price: 199,
      currency: "₹",
      url: "https://rzp.io/l/tGzMyKep",
    },
    {
      id: 5,
      img: Book5,
      name: "The road to learn pure react.js for beginner",
      subName: "step by step Guide",
      mrp: 398,
      price: 199,
      currency: "₹",
      url: "https://rzp.io/l/LearnReactjs",
    },
  ];

  const openUrl = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center mx-auto">
      {Books.map((item) => (
        <div
          key={item.id}
          className="p-2 w-[200px] h-[350px] bg-white shadow-black shadow-lg rounded-lg flex flex-col items-center m-2 pt-1"
        >
          <div className="w-[150px] h-[203px] rounded-lg overflow-hidden border-[1px] border-black">
            <img src={item.img} alt={item.name} className="w-full h-full" />
          </div>
          <div className="text-center text-sm font-medium mt-2">
            {item.name}
          </div>
          <div className="text-center text-[10px] font-medium">
            {item.subName}
          </div>
          <div className="text-base text-center font-bold my-2">
            <span className="text-gray-500 line-through">{item.mrp}</span>
            <span>{` ${item.currency} ${item.price} `}</span>
            <span className="text-[12px] text-green-600">50% off</span>
          </div>
          <button
            onClick={() => openUrl(item.url)}
            target="_blank"
            className="hover:bg-orange-500 mx-6 text-sm font-medium text-center border-2 border-orange-600 bg-orange-600 rounded-full py-1 px-2.5 text-white"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
