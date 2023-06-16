import React from "react";
import { Link } from "react-router-dom";

const category_images = [
  "https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg",
  "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg",
  "https://images.pexels.com/photos/2866119/pexels-photo-2866119.jpeg",
];

function Categories() {
  return (
    <div className="h-screen w-screen mb-[20px] md:mb-[50px]">
      <h2 className="md:text-2xl text-xl text-center font-bold md:py-10 py-2">
        Categories
      </h2>
      <div className="h-[90%] md:w-[50%] mx-auto grid grid-rows-2 grid-cols-2 ">
        <div className="col-span-2 relative group ">
          <img
            src={category_images[0]}
            alt=""
            srcset=""
            className=" h-full w-full object-cover mx-auto"
          />
          <Link to="/e-commerce/products">
            <button className="category-button left-[160px] sm:left-[46%]">
              All Products
            </button>
          </Link>
        </div>
        <div className="row-start-2 row-end-3 col-span-1 ml-auto overflow-hidden group relative">
          <img
            src={category_images[1]}
            alt=""
            srcset=""
            className="h-full w-full object-cover object-center lg:object-left"
          />
          <Link to="/e-commerce/products/Male">
            <button className="category-button left-[30px] sm:left-[50%] w-[100px]">
              Men
            </button>
          </Link>
        </div>
        <div className="row-start-2 row-end-3 col-span-1 mr-auto overflow-hidden group relative">
          <img
            src={category_images[2]}
            alt=""
            srcset=""
            className="w-full h-full object-cover object-center lg:h-fit"
          />
          <Link to="/e-commerce/products/Female">
            <button className="category-button left-[60px] w-[100px] sm:left-[45%]">
              Women
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
