import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    // Placeholder data
    { id: 1, name: "Product 1", price: "$10", image: "" },
    { id: 2, name: "Product 2", price: "$20", image: "" },
    { id: 3, name: "Product 3", price: "$30", image: "" },
    { id: 4, name: "Product 4", price: "$40", image: "" },
  ]);
  const [categories, setCategories] = useState([
    "TV Box",
    "Power Tools",
    "Headphones",
    "Cell Phones",
    "Smart Watches",
    "Game and Video",
  ]);

  const [cart, setCart] = useState([]); // Cart state
  const [ratings, setRatings] = useState({}); // Ratings state

  // Handle rating
  const handleRating = (productIndex, rating) => {
    setRatings({ ...ratings, [productIndex]: rating });
  };

  // Handle add to cart
  const handleAddToCart = (productIndex) => {
    if (!cart.includes(productIndex)) {
      setCart([...cart, productIndex]);
    }
  };

  // Commented API call - Uncomment and use when backend is ready
  /*
  useEffect(() => {
    if (category) {
      axios
        .get(`/api/products/category/${category}`) // Update URL as per your backend endpoint
        .then((response) => {
          setProducts(response.data); // Set the products data from the API response
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [category]);
  */

  // Handle category selection
  const handleCategorySelect = (newCategory) => {
    navigate(`/category/${newCategory}`); // Update the URL with the selected category
  };

  return (
    <div className="flex p-4">
      {/* Sidebar */}
      <div className="w-48">
        <h2 className="text-xl font-semibold underline mb-4 ml-2">
          Select Categories
        </h2>
        <div className="pl-4 space-y-2">
          {categories.map((cat, index) => (
            <p
              key={index}
              className={`text-gray-500 hover:text-green-500 cursor-pointer ${
                category === cat ? "text-green-500 font-semibold" : ""
              }`}
              onClick={() => handleCategorySelect(cat)} // Update category when clicked
            >
              {cat}
            </p>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-8">
        <h2 className="text-4xl text-center font-bold mb-4">{category}</h2>

        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ml-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border border-gray-300 p-4 rounded-lg hover:border-black hover:shadow-lg min-h-[400px] w-[250px]"
            >
              <Link to={`/product/${product.id}`} className="w-full h-full">
                <div className="w-35 h-35 bg-gray-200 mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Image Placeholder</p>
                </div>
                <div className="flex flex-col justify-between mt-auto w-full">
                  <p className="text-gray-700 font-semibold text-left text-md">
                    {product.name || "Product Name"}
                  </p>
                  <p className="text-green-500 text-center">
                    {product.price || "Price"}
                  </p>
                </div>
              </Link>

              {/* Star Rating */}
              <div className="flex items-center justify-start mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={ratings[index] >= star ? "black" : "none"} // Filled black if the rating is greater than or equal to star
                    stroke="gray" // Gray border for all stars
                    strokeWidth="1.5"
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => handleRating(index, star)}
                  >
                    <path d="M12 .587l3.668 7.431 8.207 1.193-5.938 5.792 1.403 8.184L12 18.896l-7.34 3.891 1.403-8.184-5.938-5.792 8.207-1.193z" />
                  </svg>
                ))}
              </div>

              {/* Add to Cart Button */}
              <button
                className={`mt-4 py-2 px-4 text-sm font-semibold rounded-lg ${
                  cart.includes(index)
                    ? "bg-green-500 text-white cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-700"
                }`}
                onClick={() => handleAddToCart(index)}
                disabled={cart.includes(index)}
              >
                {cart.includes(index) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
