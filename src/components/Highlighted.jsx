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
    <div className="text-justify w-screen px-6 bg-black text-white">
      <h3 className="text-2xl mb-10 font-bold ml-10 py-10">
        Trending Products
      </h3>
      <div className="flex gap-7 h-[550px] overflow-hidden justify-center">
        {popular_products.map((item, i) => (
          <HighlightedCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Highlighted;
