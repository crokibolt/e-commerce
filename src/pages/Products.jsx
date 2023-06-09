import React, { useEffect, useState } from "react";
import HighlightedCard from "../components/HighlightedCard";
import productsArray from "../data/productsData";
import { useParams } from "react-router-dom";

function Products() {
  const { gender } = useParams();
  const categoriesList = [];
  productsArray.forEach((item, i) => {
    if (categoriesList.indexOf(item.type) === -1) {
      categoriesList.push(item.type);
    }
  });

  const [products, setProducts] = useState(productsArray);

  useEffect(() => {
    if (gender) {
      const radio = document.getElementById(gender.toLowerCase());
      radio.checked = true;
      setProductsAfterFilter(gender, null);
    }
  }, []);

  const applyFilters = (e) => {
    e.preventDefault();

    const genderSelected = document.querySelector(
      "input[name=gender]:checked"
    )?.value;

    const categorySelected = document.querySelector(
      "input[name=category]:checked"
    )?.value;

    setProductsAfterFilter(genderSelected, categorySelected);
  };

  const setProductsAfterFilter = (genderSelected, categorySelected) => {
    setProducts(() => {
      let newProds = [...productsArray];
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
    setProducts(productsArray);
  };

  return (
    <div className="w-screen min-h-screen h-content mt-4 bg-gray-300 py-5">
      <h1 className="md:text-5xl text-2xl text-center font-semibold tracking-wide my-3 md:my-4 md:p-4">
        Products
      </h1>
      <div className="flex w-full">
        <div className="h-screen w-[500px] fixed flex flex-col items-start pl-6 hidden md:block">
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
        <div className="md:ml-[500px] ml-[80px] w-[calc(100vw - 500px)] pr-10 flex gap-8 flex-wrap">
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
