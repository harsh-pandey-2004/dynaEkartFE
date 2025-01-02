import React from "react";



 


const PopularSearch = () => {
  const searchItems = [
    "Smart Watches",
    "Headphone",
    "Cameras",
    "Audio",
    "Laptop & Computers",
    "Cell Phone",
  ];


  return (
    <section className="py-10 w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-left mb-5 border-b border-gray-300 pb-4">
          <h2 className="text-4xl font-bold text-gray-900">Popular Search</h2>
          
        </div>

       
        <div className="flex flex-wrap gap-4">
          {searchItems.map((item, index) => (
            <button
              key={index}
              className="px-4 py-2 text-black-500 border border-gray-300 rounded-md bg-gray-100 hover:bg-black hover:text-white transition duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearch;