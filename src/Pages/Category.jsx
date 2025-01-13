import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"; // Import Link for navigation and useParams

const Category = () => {
  const { categoryName } = useParams(); // Capture the selected category from the URL
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(""); // Error state

  useEffect(() => {
    // Function to fetch categories
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/category/getitems");
        console.log("Categories fetched:", response.data); // Log the API response
        setCategories(response.data.data || []); // Set categories data
      } catch (err) {
        console.error("Error fetching categories:", err);  // Log the error
        setError("Failed to fetch data."); // Set error message if request fails
      }
    };

    fetchCategories();
  }, []); // Empty dependency array means this runs once after the first render

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex p-4">
      <div className="w-48">
        <h2 className="text-xl font-semibold underline mb-4 ml-2">Select Categories</h2>
        <div className="pl-4 space-y-2">
          <Link
            to="/category/all" // Link to 'All List' category
            className="text-gray-500 hover:text-green-500 cursor-pointer font-semibold"
          >
            All List
          </Link>
          {/* Loop through categories and display them */}
          {categories.map((category) => (
            <Link
              key={category._id}
              to={`/category/${category.name}`}  // Link to the specific category page
              className="block text-gray-500 hover:text-green-500 cursor-pointer font-semibold"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
