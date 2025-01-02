import React, { useState } from "react";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("TV & Audio");

  // Category and Product Data
  const categories = [
    "TV & Audio",
    "TV Box",
    "Power Tools",
    "Headphones",
    "Cell Phones",
    "Smart Watches",
    "Game and Video",
  ];

  const products = {
    "TV & Audio": [
      { name: "Smart TV", image: "/images/smart-tv.png", price: "$499" },
      { name: "Soundbar", image: "/images/soundbar.png", price: "$199" },
      { name: "Smart TV", image: "/images/smart-tv.png", price: "$499" },
      { name: "Soundbar", image: "/images/soundbar.png", price: "$199" },
      { name: "Smart TV", image: "/images/smart-tv.png", price: "$499" },
      { name: "Soundbar", image: "/images/soundbar.png", price: "$199" },
    ],
    "TV Box": [
      { name: "Android TV Box", image: "/images/android-tv-box.png", price: "$99" },
      { name: "Apple TV", image: "/images/apple-tv.png", price: "$149" },
    ],
    "Power Tools": [
      { name: "Drill Machine", image: "/images/drill-machine.png", price: "$79" },
      { name: "Saw", image: "/images/saw.png", price: "$89" },
    ],
    "Headphones": [
      { name: "Wireless Headphones", image: "/images/wireless-headphones.png", price: "$59" },
      { name: "Noise-Cancelling Headphones", image: "/images/noise-cancelling.png", price: "$129" },
    ],
    "Cell Phones": [
      { name: "Smartphone", image: "/images/smartphone.png", price: "$699" },
      { name: "Feature Phone", image: "/images/feature-phone.png", price: "$29" },
    ],
    "Smart Watches": [
      { name: "Fitness Tracker", image: "/images/fitness-tracker.png", price: "$49" },
      { name: "Smart Watch", image: "/images/smart-watch.png", price: "$149" },
    ],
    "Game and Video": [
      { name: "Gaming Console", image: "/images/gaming-console.png", price: "$399" },
      { name: "Video Game", image: "/images/video-game.png", price: "$59" },
    ],
  };

  return (
    <div className="flex p-4">
      {/* Sidebar */}
      <div className="w-1/4">
        <h2 className="text-xl font-semibold underline mb-4 ml-2">Select Categories</h2>
        <div className="pl-4 space-y-2">
          {categories.map((category, index) => (
            <p
              key={index}
              className={`text-gray-500 hover:text-green-500 cursor-pointer ${
                selectedCategory === category ? "text-green-500 font-semibold" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </p>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 pl-8">
        {/* Selected Category Header */}
        <h2 className="text-4xl font-bold mb-4 ml-8">{selectedCategory}</h2>

        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products[selectedCategory].map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-100 p-4 rounded-lg hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-contain mb-2"
              />
              <p className="text-gray-700 font-semibold">{product.name}</p>
              <p className="text-green-500 mt-1">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
