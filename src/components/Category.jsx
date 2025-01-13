import React, { useState } from "react";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "TV & Audio",
    "TV Box",
    "Power Tools",
    "Headphones",
    "Cell Phones",
    "Smart Watches",
    "Game & Video",
    "Robot Clean",
    "Sport Watches",
    "Tablets",
    "Computers & Laptop",
    "Cameras & Photos",
  ];

  const handleCategoryClick = (category) => {
    alert(`Selected: ${category}`);
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="bg-black text-white px-4 py-2 rounded-md">
        Select Category <span className="ml-2">&#x25BC;</span>
      </button>

      {isOpen && (
        <div className="absolute bg-black text-white mt-2 rounded-md shadow-lg w-48 z-10">
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Category;
