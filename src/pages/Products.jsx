import React, { useState } from "react";
import HighlightedCard from "../components/HighlightedCard";

const products_array = [
  {
    id: 0,
    name: "Black Oversized Jacket",
    mainImg:
      "https://images.pexels.com/photos/3713594/pexels-photo-3713594.jpeg",
    secondImg:
      "https://images.pexels.com/photos/3713593/pexels-photo-3713593.jpeg",
    gender: "Male",
    price: 25,
    type: "Jacket",
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
    type: "T-Shirt",
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
    type: "Shirt",
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
    type: "Jacket",
  },
  {
    id: 4,
    name: "Light Blue Shirt",
    mainImg:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    secondImg:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
    gender: "Male",
    price: 25,
    type: "Shirt",
  },
  {
    id: 5,
    name: "Blue Blazer",
    mainImg:
      "https://images.pexels.com/photos/3310693/pexels-photo-3310693.jpeg",
    secondImg:
      "https://images.pexels.com/photos/3310694/pexels-photo-3310694.jpeg",
    gender: "Female",
    price: 25,
    type: "Jacket",
  },
];

function Products() {
  const categoriesList = [];
  products_array.forEach((item, i) => {
    if (categoriesList.indexOf(item.type) === -1) {
      categoriesList.push(item.type);
    }
  });

  const [products, setProducts] = useState(products_array);

  const applyFilters = (e) => {
    e.preventDefault();

    const genderSelected = document.querySelector(
      "input[name=gender]:checked"
    )?.value;

    const categorySelected = document.querySelector(
      "input[name=category]:checked"
    )?.value;

    setProducts(() => {
      let newProds = [...products_array];
      if (genderSelected) {
        newProds = newProds.filter((e) => e.gender == genderSelected);
      }

      if (categorySelected) {
        newProds = newProds.filter((e) => e.type == categorySelected);
      }

      return newProds;
    });
  };

  const resetFilters = () => {
    const form = document.getElementById("filter-form");
    form.reset();
    setProducts(products_array);
  };

  return (
    <div className="w-screen min-h-screen h-content mt-4">
      <h1 className="text-5xl text-center font-semibold tracking-wide my-4 p-4 border-t-2 border-t-black">
        Products
      </h1>
      <div className="flex w-full">
        <div className="h-screen w-[500px] fixed flex flex-col items-start pl-6">
          <form
            id="filter-form"
            className="text-justify"
            onSubmit={applyFilters}
          >
            <h2 className="font-bold text-xl mb-4 mt-4">Gender</h2>
            <input type="radio" id="male" name="gender" value="Male" />
            <label htmlFor="male">Male</label> <br />
            <input type="radio" id="female" name="gender" value="Female" />
            <label htmlFor="female">Female</label>
            <h2 className="font-bold text-xl mb-4 mt-4">Category</h2>
            {categoriesList.map((cat, i) => {
              return (
                <>
                  <input
                    type="radio"
                    id={cat.toLowerCase()}
                    name="category"
                    value={cat}
                  />
                  <label htmlFor={cat.toLowerCase()}>{cat}</label> <br />
                </>
              );
            })}
            <button
              type="submit"
              className="rounded-md font-semibold bg-blue-400 bg-opacity-50 p-2 mt-2 hover:bg-opacity-100 transition-all duration-150 ease-linear"
            >
              Apply filters
            </button>
            <br />
            <button
              type="button"
              className="rounded-md font-semibold bg-green-400 bg-opacity-40 p-2 mt-2 hover:bg-opacity-100 transition-all duration-150 ease-linear"
              onClick={resetFilters}
            >
              Reset filters
            </button>
          </form>
        </div>
        <div className="ml-[500px] w-[calc(100vw - 500px)] pr-10 flex gap-8 flex-wrap">
          {products.length > 0 ? (
            products.map((item, i) => (
              <HighlightedCard item={item} key={item.id} />
            ))
          ) : (
            <h2>No products found</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
