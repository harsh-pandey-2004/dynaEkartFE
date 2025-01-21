import React, { useState, useEffect, useRef } from "react";
import { fetchCategories } from "../network/fetchCategories";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    loadCategories();
  }, []);

  const handleCategoryClick = (category) => {
    alert(`Selected: ${category.name}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="bg-black text-white px-4 py-2 rounded-md"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Select Category <span className="ml-2">&#x25BC;</span>
      </button>

      {isOpen && (
        <div className="absolute bg-black text-white mt-2 rounded-md shadow-lg w-48 z-10">
          <ul>
            {categories.map((category) => (
              <li
                key={category._id}
                className="px-4 py-2 hover:bg-gray-800 cursor-pointer flex items-center gap-2"
                onClick={() => handleCategoryClick(category)}
              >
                <img
                  src={category.categorylogo}
                  alt={category.name}
                  className="w-10 h-10"
                />
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Category;
