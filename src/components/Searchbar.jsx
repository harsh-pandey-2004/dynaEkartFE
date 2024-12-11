import React from "react";

const Searchbar = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-full shadow-md w-[800px] p-2">
      <input
        type="text"
        placeholder="Search products"
        className="flex-grow outline-none text-lg px-2 bg-transparent"
      />
      <button className="text-xl px-3 py-2 rounded-full hover:bg-black hover:text-white transition">
        🔍
      </button>
    </div>
  );
};

export default Searchbar;
