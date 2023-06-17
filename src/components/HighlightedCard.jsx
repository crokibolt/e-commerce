import React from "react";
import { Link } from "react-router-dom";
import MyImage from "./MyImage";

function HighlightedCard(props) {
  const { item } = props;
  return (
    <div className="w-[250px] flex flex-col gap-3 flex-shrink-0 sm:flex-shrink-1">
      <Link to={`../e-commerce/product/${item.id}`}>
        <div className="w-full h-[400px] overflow-hidden relative group rounded-md shadow-md shadow-gray-600">
          <MyImage
            source={item.mainImg}
            imageClasses={"h-full w-full object-cover absolute"}
            divClasses={
              "h-full w-full absolute transition duration-500 group-hover:opacity-0"
            }
            spinnerClasses={" my-[70%]"}
          />

          <MyImage
            source={item.secondImg}
            imageClasses={"h-full w-full object-cover absolute"}
            divClasses={
              "h-full w-full absolute opacity-0 transition duration-700 group-hover:opacity-100"
            }
            spinnerClasses={"my-[70%]"}
          />
        </div>
      </Link>
      <div className="text-lg text-center font-semibold">
        <h2>{item.name}</h2>
        <h2>${item.price}</h2>
      </div>
    </div>
  );
}

export default HighlightedCard;
