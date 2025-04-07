import React, { useState } from "react";
import Book1 from "../../../assets/Books/Book1.png";
import Book2 from "../../../assets/Books/Book2.png";
import Book3 from "../../../assets/Books/Book3.png";
import Book4 from "../../../assets/Books/Book4.jpg";
import Book5 from "../../../assets/Books/Book5.png";
import Book6 from "../../../assets/Books/Book6.png";
import { Link } from "react-router-dom";

const books = [
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
  {
    id: 6,
    img: Book6,
    name: "how to earn money from AI ",
    subName: "step by step Guide",
    mrp: 420,
    price: 199,
    currency: "₹",
    url: "https://buymeacoffee.com/dreamconsole/liked-my-ebook-ai-se-paise-kaise-kamaye-support-my-journey",
  },
];

// Main Banner Component
const MainBanner = () => (
  <div className="flex justify-between items-center bg-green-100 px-6 py-10">
    <div>
      <h1 className="text-4xl font-bold text-green-800">
        Explore what everyone is reading today
      </h1>
      <p className="text-lg text-gray-700 mt-4">Our top bestselling Book</p>
      <div className="flex gap-2 my-2">
      <Link to="/ebook" className="bg-green-600 text-white px-6 py-2 rounded-md">
        Browse Now
      </Link>
      <Link to="/freepdf" className="bg-green-600 text-white px-6 py-2 rounded-md "  >
        View Free PDF
      </Link>
      </div>
    </div>
    {/* <img
      src="https://via.placeholder.com/200x150"
      alt="Kobo eReader"
      className="w-60 h-40"
    /> */}
  </div>
);

// Header Component
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // Filter books based on the search query
  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.subName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openUrl = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <header className="flex justify-between items-center bg-gray-100 px-6 py-4">
        <div className="text-xl font-bold text-red-600"></div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search by book title or subtitle"
            className="border border-gray-300 rounded-md px-4 py-2 w-72"
            value={searchQuery} // Bind state to input
            onChange={(e) => setSearchQuery(e.target.value)} // Update state on input
          />
          
          <button className= "bg-blue-500 text-white px-4 py-2 rounded-md , ">
            Search
          </button>
        </div>
        {/* <div className="flex gap-4">
          <button className="text-gray-700">Wishlist</button>
          <button className="text-gray-700">Cart</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Create Account
          </button>
        </div> */}
      </header>
      <MainBanner />
      <div className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Our Best Selling Books</h2>
        <div className="grid grid-cols-5 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <div
                className="border border-gray-300 p-4 rounded-md shadow-sm hover:shadow-md"
                key={index}
              >
                <img
                  src={
                    book?.img
                      ? book.img
                      : `https://via.placeholder.com/150x200?text=Book+Cover+${
                          index + 1
                        }`
                  }
                  alt={book.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-medium">{book.name}</h3>
                <p className="text-sm text-gray-600">{book.subName}</p>
                <p className="text-lg font-semibold mt-2">
                  {book?.currency}
                  {book.price}
                  <span className=" text-gray-500 line-through">
                    {book?.currency}
                    {book?.mrp}
                  </span>
                </p>
                <button
                  onClick={() => openUrl(book.url)}
                  target="_blank"
                  className="hover:bg-orange-500 mt-2 text-sm font-medium text-center border-2 border-green-600 bg-green-600 rounded-full py-1 px-2.5 text-white"
                >
                  Buy Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-5 text-center">
              No books found for "{searchQuery}"
            </p>
          )}
        </div>
      </div>
    </>
  );
};

// App Component
const App = () => (
  <div>
    <Header />
  </div>
);

export default App;
