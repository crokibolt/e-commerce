import React from "react";
import { Link } from "react-router-dom";

const category_images = [
  "https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg",
  "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg",
  "https://images.pexels.com/photos/2866119/pexels-photo-2866119.jpeg",
];

function Categories() {
  return (
    <div className="h-screen w-screen mb-[50px]">
      <h2 className="text-2xl text-center font-bold py-10 border-t border-t-black">
        Categories
      </h2>
      <div className="h-[90%] w-[50%] mx-auto grid grid-rows-2 grid-cols-2 ">
        <div className="col-span-2 relative group ">
          <img
            src={category_images[0]}
            alt=""
            srcset=""
            className=" h-full w-full object-cover mx-auto"
          />
          <Link to="/products">
            <button className="absolute top-[50%] left-[46%] bg-gray-500 bg-opacity-70 p-2 rounded-sm font-semibold scale-0 group-hover:scale-100 transition-all ease-linear duration-200 hover:bg-green-400">
              All Products
            </button>
          </Link>
        </div>
        <div className="row-start-2 row-end-3 col-span-1 ml-auto overflow-hidden group relative">
          <img
            src={category_images[1]}
            alt=""
            srcset=""
            className="h-full w-full object-cover object-left"
          />
          <Link to="/products">
            <button className="absolute top-[50%] left-[46%] w-[100px] bg-gray-500 bg-opacity-70 p-2 rounded-sm font-semibold scale-0 group-hover:scale-100 transition-all ease-linear duration-200 hover:bg-green-400">
              Men
            </button>
          </Link>
        </div>
        <div className="row-start-2 row-end-3 col-span-1 mr-auto overflow-hidden group relative">
          <img
            src={category_images[2]}
            alt=""
            srcset=""
            className="w-full object-center translate-y-[0px]"
          />
          <Link to="/products">
            <button className="absolute top-[50%] left-[46%] w-[100px] bg-gray-500 bg-opacity-70 p-2 rounded-sm font-semibold scale-0 group-hover:scale-100 transition-all ease-linear duration-200 hover:bg-green-400">
              Women
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
