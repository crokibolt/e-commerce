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

function Slider() {
  const [count, setCount] = useState(0);

  const nextSlide = () => {
    setCount(count === 2 ? 0 : (prev) => prev + 1);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timerId);
  }, [count]);

  return (
    <div className="h-[calc(100vh-80px)] w-screen overflow-hidden">
      <div
        className={`flex w-[300vw] translate-x-[-${
          count * 100
        }vw] transition duration-1000 ease-linear`}
      >
        <img
          className="w-screen object-cover relative bottom-[70vh]"
          src={slide_data[0].img}
          alt=""
        />
        <img
          className="w-screen object-cover relative bottom-[70vh]"
          src={slide_data[1].img}
          alt=""
        />
        <img
          className="w-screen object-cover relative bottom-[100vh]"
          src={slide_data[2].img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Slider;
