import React from "react";

const popularCategories = [
  {
    id: 1,
    name: "Category 1",
    imageUrl: "https://via.placeholder.com/300x300?text=Category+1",
  },
  {
    id: 2,
    name: "Category 2",
    imageUrl: "https://via.placeholder.com/300x300?text=Category+2",
  },
  {
    id: 3,
    name: "Category 3",
    imageUrl: "https://via.placeholder.com/300x300?text=Category+3",
  },
  {
    id: 4,
    name: "Category 4",
    imageUrl: "https://via.placeholder.com/300x300?text=Category+4",
  },
  {
    id: 5,
    name: "Category 5",
    imageUrl: "https://via.placeholder.com/300x300?text=Category+5",
  },
  {
    id: 6,
    name: "Category 6",
    imageUrl: "https://via.placeholder.com/300x300?text=Category+6",
  },
  {
    id: 7,
    name: "Category 7",
    imageUrl: "https://via.placeholder.com/300x300?text=Category+7",
  },
  {
    id: 8,
    name: "Category 7",
    imageUrl: "https://via.placeholder.com/300x300?text=Category+7",
  },
  {
    id: 9,
    name: "Category 7",
    imageUrl: "https://via.placeholder.com/300x300?text=Category+7",
  },
  {
    id: 10,
    name: "Category 7",
    imageUrl: "https://via.placeholder.com/300x300?text=Category+7",
  },
];

const PopularProducts = () => {
  return (
    <section className="py-10 w-full bg-gray-50">
      <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Categories
          </h2>
          <button className="text-blue-600 font-semibold hover:underline">
            View All Categories
          </button>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {popularCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-2 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-52 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
