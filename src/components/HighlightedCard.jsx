import React from "react";
import { Link } from "react-router-dom";

function HighlightedCard(props) {
  const { item } = props;
  return (
    <Link to={`product/${item.id}`}>
      <div className="w-[250px] flex flex-col gap-3">
        <div className="w-full h-[400px] overflow-hidden relative group rounded-md shadow-md shadow-black">
          <img
            src={item.mainImg}
            alt=""
            className="h-full w-full object-cover absolute group-hover:scale-0"
          />
          <img
            src={item.secondImg}
            alt=""
            className="h-full w-full object-cover absolute scale-0 group-hover:scale-100"
          />
        </div>
        <div className="text-lg text-center font-semibold">
          <h2>{item.name}</h2>
          <h2>${item.price}</h2>
        </div>
      </div>
    </Link>
  );
}

export default HighlightedCard;
