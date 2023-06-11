import React from "react";
import { useState } from "react";

function ImageDisplay({ item }) {
  const [selectedImg, setSelectedImg] = useState(item.mainImg);
  const borderClass = " border-4 border-solid border-black";

  return (
    <div className="w-[700px] min-h-screen h-full flex">
      <div className="flex flex-col w-[200px] h-screen justify-center content-center flex-wrap gap-3 pl-[40px]">
        <div className="h-[200px] w-[125px]">
          <img
            src={item.mainImg}
            alt=""
            className={
              "h-[200px] w-[125px] rounded-md object-cover cursor-pointer transition-all duration-200 ease-linear" +
              (selectedImg === item.mainImg ? borderClass : "")
            }
            onClick={() => setSelectedImg(item.mainImg)}
          />
        </div>
        <div className="h-[200px] w-[125px]">
          <img
            src={item.secondImg}
            alt=""
            className={
              "h-[200px] w-[125px] rounded-md object-cover cursor-pointer transition-all duration-200 ease-linear" +
              (selectedImg === item.secondImg ? borderClass : "")
            }
            onClick={() => setSelectedImg(item.secondImg)}
          />
        </div>
      </div>
      <div className="w-[450px] my-auto transition-all duration-700 ease-linear">
        <img
          src={selectedImg}
          alt=""
          className="h-[688px] w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default ImageDisplay;
