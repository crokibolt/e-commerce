import React from "react";
import Slider from "../components/Slider";
import Highlighted from "../components/Highlighted";
import Categories from "../components/Categories";

function Home() {
  return (
    <div>
      <Slider />
      <Highlighted />
      <Categories />
    </div>
  );
}

export default Home;
