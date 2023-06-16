import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import productsArray from "../data/productsData";
import Select from "react-select";
import ImageDisplay from "../components/ImageDisplay";
import { CartContext } from "../components/CartContext";

function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const item = productsArray.find((x) => x.id == id);
  const sizesArray = [
    { value: "s", label: "S" },
    { value: "m", label: "M" },
    { value: "l", label: "L" },
    { value: "xl", label: "XL" },
  ];

  return (
    <div className="w-screen h-fit bg-gray-300 md:p-5 flex flex-col pb-3">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-wider text-center md:mt-[60px] ">
        {item.name}
      </h1>
      <div className="w-screen h-fit flex flex-wrap">
        <ImageDisplay item={item} />
        <div className="w-screen md:mx-auto lg:w-[1100px] h-fit px-[8px] lg:px-[230px]">
          <div className="md:mt-[100px]">
            <p className="text-base md:text-lg font-bold text-justify">
              Description
            </p>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              imperdiet libero vitae augue tincidunt suscipit. In viverra
              ullamcorper risus, nec vulputate ligula vulputate at. Fusce semper
              a nisi at congue. Integer ac justo id massa tristique sagittis
              eget nec metus. Suspendisse pharetra libero quis nisl rhoncus, vel
              viverra ex euismod. Aenean euismod a dolor vitae tempor. Phasellus
              posuere mi in vulputate congue. Mauris augue nulla, finibus nec
              tincidunt vel, iaculis at mauris. Ut consectetur accumsan ligula,
              in feugiat purus auctor sed. Phasellus elementum nec elit et
              molestie. Etiam vel dolor dolor. In efficitur cursus ligula.
              Phasellus tincidunt sagittis faucibus. Donec luctus velit sed odio
              tempor iaculis. Etiam laoreet iaculis pharetra. Nam fermentum erat
              ac accumsan ornare. Maecenas at ultrices erat. Vivamus leo tortor,
              placerat lacinia vulputate at, bibendum ac elit. Integer tempor
              arcu eu augue laoreet, ut ultrices odio feugiat. Morbi fermentum
              neque lorem, vel maximus risus aliquam facilisis. Etiam vitae
              malesuada nisi. Vivamus fermentum vulputate ipsum vitae faucibus.
            </p>
            <Select
              id="size-select"
              name="sizes"
              isSearchable={false}
              defaultValue={sizesArray[0]}
              options={sizesArray}
              className="my-3 md:my-6 "
            />
            <div className="flex gap-2 justify-around content-center flex-wrap mt-8">
              <p className="text-xl md:text-2xl font-semibold text-justify inline mt-3">
                Price: ${item.price}
              </p>
              <button
                onClick={() => addToCart(item)}
                className="text-sm md:text-base font-semibold bg-green-400 rounded-md p-3"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
