import React, { useEffect, useState } from "react";
import Black from "../assets/images/Black.png";
import image from "../assets/images/image.jpg";
import shirt from "../assets/images/shirt.jpg";

const Slider = () => {
  const slides = [
    { id: 1, src: Black, label: "Cell Phones" },
    { id: 2, src: image, label: "Smart Watches" },
    { id: 3, src: shirt, label: "Game & Video" },
    { id: 4, src: Black, label: "Robot Clean" },
    { id: 5, src: image, label: "Sport Watches" },
    { id: 6, src: shirt, label: "Headphones" },
    { id: 7, src: Black, label: "Accessories" },
    { id: 8, src: image, label: "Tablets" },
  ];

  const visibleSlides = 6;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-8xl mx-auto mt-2">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              (currentIndex * (100 / visibleSlides)) % 100
            }%)`,
            width: `${(slides.length / visibleSlides) * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-shrink-0 flex flex-col items-center justify-center border rounded-lg shadow-md p-4 m-2"
              style={{ width: `${100 / visibleSlides}%` }}
            >
              <img
                src={slide.src}
                alt={slide.label}
                className="w-16 h-16 object-contain rounded-full p-2"
              />
              <span className="mt-2 text-sm text-gray-700 font-medium">
                {slide.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-slate-800 text-white shadow rounded-[50px] w-9 p-2 ml-4  hover:bg-red-500 "
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-slate-800 text-white shadow rounded-[50px] w-9 p-2 mr-4  hover:bg-red-500 "
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
