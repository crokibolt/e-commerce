import React from "react";
import HighlightedCard from "./HighlightedCard";

const popular_products = [
  {
    id: 0,
    name: "Black Oversized Jacket",
    mainImg:
      "https://images.pexels.com/photos/3713594/pexels-photo-3713594.jpeg",
    secondImg:
      "https://images.pexels.com/photos/3713593/pexels-photo-3713593.jpeg",
    gender: "Male",
    price: 25,
  },
  {
    id: 1,
    name: "Pink T-Shirt",
    mainImg:
      "https://images.pexels.com/photos/11377065/pexels-photo-11377065.jpeg",
    secondImg:
      "https://images.pexels.com/photos/11377062/pexels-photo-11377062.jpeg",
    gender: "Female",
    price: 25,
  },
  {
    id: 2,
    name: "Flowered Shirt",
    mainImg:
      "https://images.pexels.com/photos/5695555/pexels-photo-5695555.jpeg",
    secondImg:
      "https://images.pexels.com/photos/5695634/pexels-photo-5695634.jpeg",
    gender: "Male",
    price: 25,
  },
  {
    id: 3,
    name: "Black Leather Jacket",
    mainImg:
      "https://images.pexels.com/photos/3641363/pexels-photo-3641363.jpeg",
    secondImg:
      "https://images.pexels.com/photos/3641364/pexels-photo-3641364.jpeg",
    gender: "Female",
    price: 25,
  },
];

function Highlighted() {
  return (
    <div className="md:text-justify relative text-center pt-[40px] w-screen px-6 bg-black text-white overflow-x-auto">
      <h3 className="text-2xl relative mb-10 top-2 font-bold ml-10 md:py-10 py-2">
        Trending Products
      </h3>
      <div className="flex md:gap-7 gap-4 h-[550px] pl-[530px] sm:pl-0  md:overflow-hidden justify-center">
        {popular_products.map((item, i) => (
          <HighlightedCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Highlighted;
