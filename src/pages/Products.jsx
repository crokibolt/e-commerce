import React, { useState } from "react";
import HighlightedCard from "../components/HighlightedCard";

const products = [
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
  let filtered_products = products;
  const categoriesList = [];
  products.forEach((item, i) => {
    if (categoriesList.indexOf(item.type) === -1) {
      categoriesList.push(item.type);
    }
  });
  const [categories, setCategories] = useState(categoriesList);

  return (
    <div className="w-screen h-screen mt-4">
      <div className="flex w-full">
        <div className="h-screen w-[500px] fixed flex flex-col items-start pl-6">
          <form>
            <h2 className="font-bold text-xl mb-4 mt-4">Gender</h2>
            <input type="radio" id="male" name="gender" value="Male" />
            <label htmlFor="male">Male</label> <br />
            <input type="radio" id="female" name="gender" value="Female" />
            <label htmlFor="female">Female</label>
            <h2 className="font-bold text-xl mb-4 mt-4">Category</h2>
            {categories.map((cat, i) => {
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
          </form>
        </div>
        <div className="ml-[500px] w-[calc(100vw - 500px)] pr-10 flex gap-8 flex-wrap">
          {filtered_products.map((item, i) => (
            <HighlightedCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
