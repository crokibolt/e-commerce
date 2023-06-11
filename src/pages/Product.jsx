import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsArray from "../data/productsData";
import Select from "react-select";

function Product({ addToCart }) {
  const { id } = useParams();
  const item = productsArray.find((x) => x.id == id);
  const borderClass = " border-4 border-solid border-black";
  const sizesArray = [
    { value: "s", label: "S" },
    { value: "m", label: "M" },
    { value: "l", label: "L" },
    { value: "xl", label: "XL" },
  ];

  const [selectedImg, setSelectedImg] = useState(item.mainImg);

  return (
    <div className="w-screen h-content min-h-screen bg-slate-400 p-5 flex">
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
      <div className="w-[1100px] px-[230px]">
        <h1 className="text-3xl font-semibold tracking-wider text-center mt-[60px] ">
          {item.name}
        </h1>
        <div className="mt-[100px] max-h-[30vh]">
          <p className="text-lg font-bold text-justify">Description</p>
          <p className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            imperdiet libero vitae augue tincidunt suscipit. In viverra
            ullamcorper risus, nec vulputate ligula vulputate at. Fusce semper a
            nisi at congue. Integer ac justo id massa tristique sagittis eget
            nec metus. Suspendisse pharetra libero quis nisl rhoncus, vel
            viverra ex euismod. Aenean euismod a dolor vitae tempor. Phasellus
            posuere mi in vulputate congue. Mauris augue nulla, finibus nec
            tincidunt vel, iaculis at mauris. Ut consectetur accumsan ligula, in
            feugiat purus auctor sed. Phasellus elementum nec elit et molestie.
            Etiam vel dolor dolor. In efficitur cursus ligula. Phasellus
            tincidunt sagittis faucibus. Donec luctus velit sed odio tempor
            iaculis. Etiam laoreet iaculis pharetra. Nam fermentum erat ac
            accumsan ornare. Maecenas at ultrices erat. Vivamus leo tortor,
            placerat lacinia vulputate at, bibendum ac elit. Integer tempor arcu
            eu augue laoreet, ut ultrices odio feugiat. Morbi fermentum neque
            lorem, vel maximus risus aliquam facilisis. Etiam vitae malesuada
            nisi. Vivamus fermentum vulputate ipsum vitae faucibus.
          </p>
          <Select
            id="size-select"
            name="sizes"
            isSearchable={false}
            options={sizesArray}
            className="my-6 "
          />
          <div className="flex gap-2 justify-around content-center flex-wrap mt-8">
            <p className="text-2xl font-semibold text-justify inline mt-3">
              Price: ${item.price}
            </p>
            <button
              onClick={addToCart}
              className="text-md font-semibold bg-green-400 rounded-md p-3"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
