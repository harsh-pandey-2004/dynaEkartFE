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
    <div className="relative w-full   ">
      <div className="relative h-auto overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentItem ? "" : "hidden"}`}
          >
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imageslider;
