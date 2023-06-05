import React from "react";
import { Link } from "react-router-dom";

function HighlightedCard(props) {
  const { item } = props;
  return (
    <div className="w-[250px] flex flex-col gap-3">
      <Link to={`product/${item.id}`}>
        <div className="w-full h-[400px] overflow-hidden relative group rounded-md shadow-md shadow-gray-600">
          <img
            src={item.mainImg}
            alt=""
            className="h-full w-full object-cover absolute transition duration-500 group-hover:opacity-0"
          />
          <img
            src={item.secondImg}
            alt=""
            className="h-full w-full object-cover absolute opacity-0 transition duration-700 group-hover:opacity-100"
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
