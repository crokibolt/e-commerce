import React, { useEffect, useState } from "react";
import MyImage from "./MyImage";

const slide_data = [
  {
    id: 0,
    img: "https://images.pexels.com/photos/175696/pexels-photo-175696.jpeg",
  },
  {
    id: 1,
    img: "https://images.pexels.com/photos/944761/pexels-photo-944761.jpeg",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg",
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
    <div className="h-[calc(100vh-72px)] w-screen overflow-hidden">
      <div
        className={
          "flex w-[300vw] h-full " +
          translate_styles[count] +
          " transition duration-1000 ease-in-out"
        }
      >
        {/* <img
          className="w-screen h-full object-cover lg:object-bottom"
          src={slide_data[0].img}
          alt=""
        /> */}

        <MyImage
          source={slide_data[0].img}
          divClasses={"w-screen h-full"}
          imageClasses={"w-screen h-full object-cover lg:object-bottom"}
          spinnerClasses={" my-[90%] md:my-[20%]"}
        />

        {/* <img
          className="w-screen h-full object-cover lg:object-top"
          src={slide_data[1].img}
          alt=""
        /> */}

        <MyImage
          source={slide_data[1].img}
          divClasses={"w-screen h-full"}
          imageClasses={"w-screen h-full object-cover lg:object-top"}
          spinnerClasses={" my-[90%] md:my-[30%]"}
        />

        {/* <img
          className="w-screen h-full object-cover object-center-right md:object-center "
          src={slide_data[2].img}
          alt=""
        /> */}

        <MyImage
          source={slide_data[2].img}
          divClasses={"w-screen h-full"}
          imageClasses={
            "w-screen h-full object-cover object-center-right md:object-center"
          }
          spinnerClasses={" my-[90%] md:my-[30%]"}
        />
      </div>
    </div>
  );
}

export default Slider;
