import React from "react";
// w-[280px] md:w-[200px] md:h-[350px]
const ListUI = ({ List }) => {
  const openUrl = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center mx-auto">
      {List.map((item) => (
        <div
          key={item.id}
          className="grid grid-rows-1 p-2 justify-items-center bg-white shadow-black shadow-lg rounded-lg items-center m-2 pt-1"
        >
          <div className="w-[280px] md:w-[200px]">
            <div className="mx-auto w-[150px] h-[203px] rounded-lg overflow-hidden border-[1px] border-black">
              <img src={item.img} alt={item.name} className="w-full h-full" />
            </div>
            <div className="text-center text-sm font-medium mt-2">
              {item.name}
            </div>
            <div className="text-center text-[10px] font-medium">
              {item.subName}
            </div>
            {item.mrp && (
              <div className="text-base text-center font-bold my-2">
                <span className="text-gray-500 line-through">{item.mrp}</span>
                <span>{` ${item.currency} ${item.price} `}</span>
                <span className="text-[12px] text-green-600">50% off</span>
              </div>
            )}
          </div>
          <div className="mt-2">
            <button
              onClick={() => openUrl(item.url)}
              className={`${item.mrp ? "hover:bg-orange-500 border-orange-600 bg-orange-600": "hover:bg-green-500 border-green-600 bg-green-600"}  mx-6 text-sm font-medium text-center border-2  rounded-full py-1 px-2.5 text-white`}
            >
              {item.mrp ? "Buy Now" : "Download"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListUI;
