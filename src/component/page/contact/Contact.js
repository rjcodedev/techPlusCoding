import React from "react";
const Contact = () => {
  return (
    <div className="h-screen pt-2 md:pl-5 pl-2">
      <p className="text-xl font-semibold underline">Email Id:</p>
      <a
        href={`mailto:contactlearnwebdevelopment@gmail.com?subject=ask%20query`}
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-500 hover:underline"
      >
        contactlearnwebdevelopment@gmail.com
      </a>
      <p className="text-xl font-semibold underline">Telegram</p>
      <a
        href={`https://telegram.me/codehangout`}
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-500 hover:underline"
      >
        Learn web development
      </a>
      <p className="text-xl font-semibold underline">Instagram</p>
      <a
        href="https://www.instagram.com/learn_web_development1/?igshid=ZmZhODViOGI%3D"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-500 hover:underline"
      >
        Learn web development
      </a>
      
    </div>
  );
};

export default Contact;
