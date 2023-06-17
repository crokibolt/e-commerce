import React from "react";
import { useState } from "react";
import MyImage from "./MyImage";

function ImageDisplay({ item }) {
  const [selectedImg, setSelectedImg] = useState(item.mainImg);
  const borderClass = " border-4 border-solid border-black";

  return (
    <div className="w-screen lg:w-[700px] h-fit flex pr-3 md:pr-0 md:mx-auto">
      <div className="flex flex-col w-[200px] h-[60vh] lg:my-auto lg:h-[80vh] justify-center content-between flex-wrap gap-3 md:pl-[40px]">
        <div className="h-[170px] md:h-[200px] w-[90px] md:w-[125px]">
          <img
            src={item.mainImg}
            alt=""
            className={
              "h-[170px] md:h-[200px] w-[90px] md:w-[125px] rounded-md object-cover cursor-pointer transition-all duration-200 ease-linear" +
              (selectedImg === item.mainImg ? borderClass : "")
            }
            onClick={() => setSelectedImg(item.mainImg)}
          />
        </div>
        <div className="h-[170px] md:h-[200px] w-[90px] md:w-[125px]">
          <img
            src={item.secondImg}
            alt=""
            className={
              "h-[170px] md:h-[200px] w-[90px] md:w-[125px] rounded-md object-cover cursor-pointer transition-all duration-200 ease-linear" +
              (selectedImg === item.secondImg ? borderClass : "")
            }
            onClick={() => setSelectedImg(item.secondImg)}
          />
        </div>
      </div>
      <div className="w-[380px] md:w-[450px] h-[500px] my-3  transition-all duration-700 ease-linear">
        <MyImage
          source={selectedImg}
          divClasses={" h-[458px] md:h-[688px] w-full rounded-lg"}
          imageClasses={
            " h-[458px] md:h-[688px] w-full rounded-lg object-cover"
          }
          spinnerClasses={" my-[80%] md:my-[70%]"}
        />
      </div>
    </div>
  );
}

export default ImageDisplay;
