import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";


const brands = [
  { id: 1, logoUrl: "https://via.placeholder.com/150x150?text=Brand+1" },
  { id: 2, logoUrl: "https://via.placeholder.com/150x150?text=Brand+2" },
  { id: 3, logoUrl: "https://via.placeholder.com/150x150?text=Brand+3" },
  { id: 4, logoUrl: "https://via.placeholder.com/150x150?text=Brand+4" },
  { id: 5, logoUrl: "https://via.placeholder.com/150x150?text=Brand+5" },
  { id: 6, logoUrl: "https://via.placeholder.com/150x150?text=Brand+6" },
  { id: 7, logoUrl: "https://via.placeholder.com/150x150?text=Brand+7" },
  { id: 8, logoUrl: "https://via.placeholder.com/150x150?text=Brand+8" },
  { id: 9, logoUrl: "https://via.placeholder.com/150x150?text=Brand+9" },
  { id: 10, logoUrl: "https://via.placeholder.com/150x150?text=Brand+10" },
];

const BrandsSection = () => {
  const [showMoreBrands, setShowMoreBrands] = useState(false);

 
  const visibleBrands = brands.slice(0, 5); 
  const hiddenBrands = brands.slice(5); 

  return (
    <section className="py-10 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      
        <div className="text-left mb-5">
          <h2 className="text-5xl font-bold text-gray-900">Top Brands</h2>
          <p className="text-gray-600 mt-2">
            Browse our exclusive collection of leading brands
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {visibleBrands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out"
            >
              <img
                src={brand.logoUrl}
                alt={`Brand ${brand.id}`}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      
        <div
          className="absolute top-0 right-4 mt-8 flex items-center cursor-pointer"
          onClick={() => setShowMoreBrands(!showMoreBrands)}
        >
                <span className="text-gray-600 font-medium mr-2">
            {showMoreBrands ? "Show Less" : "Show More"}
          </span>
          <IoIosArrowDropdown
            className={`text-3xl text-gray-600 transform transition-transform ${
              showMoreBrands ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

              {showMoreBrands && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
            {hiddenBrands.map((brand) => (
              <div
                key={brand.id}
                className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out"
              >
                <img
                  src={brand.logoUrl}
                  alt={`Brand ${brand.id}`}
                  className="w-24 h-24 object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandsSection;
