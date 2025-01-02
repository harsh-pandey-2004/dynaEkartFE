import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Category from "../Pages/Category";

const PopularProducts = () => {
  const [categories, setCategories] = useState([]); // State for categories
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/category/getitems") // Correct API URL
      .then((response) => {
        console.log(response.data.data);
        setCategories(response.data.data); // Set categories data
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch category data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-16">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/category"
              className="bg-white p-2 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <div>
                <img
                  src={category.categorylogo}
                  alt={category.name}
                  className="w-full h-52 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
