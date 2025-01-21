import React, { useState, useEffect } from "react";
import axios from "axios";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/category/getitems"
        );
        if (response.data.success) {
          setCategories(response.data.data);
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!selectedCategory) return;
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3000/product/listproducts?category=${selectedCategory}`
        );
        if (response.data.success) {
          setProducts(response.data.data);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setProducts([]);
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-3 border-r border-gray-200 p-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Filters</h2>
        <h3 className="text-xl md:text-3xl font-bold mb-2">
          SELECT CATEGORIES
        </h3>
        <ul>
          {categories.map((category) => (
            <li
              key={category._id}
              className={`mb-2 text-sm cursor-pointer ${
                selectedCategory === category.name
                  ? "text-green-500 font-bold underline text-xl md:text-3xl"
                  : "text-gray-700 hover:text-green-500 font-bold text-lg md:text-2xl"
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-9">
        {selectedCategory && (
          <h1 className="text-xl md:text-2xl font-bold mb-4">
            {selectedCategory}
          </h1>
        )}
        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products found for this category </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product._id}
                className="border border-gray-200 rounded-lg p-4 relative"
              >
                <div className="relative">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-60 sm:h-60 object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-sm text-gray-500 mt-2">
                  {product.category}
                </h3>
                <h2 className="text-md font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-400 mt-1 truncate  ">
                  {product.description}
                </p>
                <div className="mt-2">
                  <span className="text-blue-500">₹{product.price}</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="bg-red-600 text-white py-1 px-2 rounded-lg text-sm  hover:bg-yellow-800">
                    ADD TO CART
                  </button>
                  <div className="flex items-center">
                    <button className="bg-gray-200 text-gray-600 py-1 px-2 rounded-l-lg">
                      -
                    </button>
                    <span className="px-2">1</span>
                    <button className="bg-gray-200 text-gray-600 py-1 px-2 rounded-r-lg">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
