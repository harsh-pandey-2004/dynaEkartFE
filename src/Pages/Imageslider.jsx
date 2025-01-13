import React, { useState, useEffect } from "react";

import banner1 from "../assets/Images/Ekart banner 1.png";
import banner2 from "../assets/Images/Ekart banner 2.png";
import banner3 from "../assets/Images/Ekart banner 3.png";
import banner4 from "../assets/Images/Ekart banner 4.png";
import banner5 from "../assets/Images/Ekart banner 5.png";

const Imageslider = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const images = [banner1, banner2, banner3, banner4, banner5];

  useEffect(() => {
    const intervalId = setInterval(nextItem, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const nextItem = () => {
    setCurrentItem((prevItem) => (prevItem + 1) % images.length);
  };

  const prevItem = () => {
    setCurrentItem(
      (prevItem) => (prevItem - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className=" w-full sm:h-screen ">
        <div className="   ">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentItem ? "" : "hidden"
              }`}
            >
              <img
                src={image}
                className="w-full h-full bg-cover bg-center"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="  flex justify-center space-x-2 mt-5 sm:mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToItem(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentItem ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </>
  );
};

export default Imageslider;
