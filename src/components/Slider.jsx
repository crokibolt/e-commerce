import React, { useEffect, useState } from "react";

const slide_data = [
  {
    id: 0,
    img: "https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg",
  },
  {
    id: 1,
    img: "https://images.pexels.com/photos/3263460/pexels-photo-3263460.jpeg",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2899937/pexels-photo-2899937.jpeg",
  },
];

const translate_styles = {
  0: "translate-x-[-0vw]",
  1: "translate-x-[-100vw]",
  2: "translate-x-[-200vw]",
};

function Slider() {
  const [count, setCount] = useState(0);

  const nextSlide = () => {
    setCount(count === 2 ? 0 : (prev) => prev + 1);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(timerId);
  }, [count]);

  return (
    <div className="h-[calc(100vh-80px)] w-screen overflow-hidden">
      <div
        className={
          "flex w-[300vw] " +
          translate_styles[count] +
          " transition duration-1000 ease-in-out"
        }
      >
        <img
          className="w-screen object-cover relative bottom-[70vh] "
          src={slide_data[0].img}
          alt=""
        />
        <img
          className="w-screen h-full object-cover relative bottom-[60vh] "
          src={slide_data[1].img}
          alt=""
        />
        <img
          className="w-screen object-cover relative bottom-[90vh] "
          src={slide_data[2].img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Slider;
