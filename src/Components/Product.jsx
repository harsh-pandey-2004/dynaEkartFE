import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { fetchProduct } from "../network/product";
import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeTab, setActiveTab] = useState("reviews");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetchProduct(id);
      setProduct(response);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const reviews = [
    {
      name: "Emily Selman",
      date: "July 16, 2021",
      rating: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur eligendi praesentium fugit, dolore aut voluptate corporis quas! Quas dolore tempore deleniti aut facilis recusandae maiores, tenetur nesciunt placeat cupiditate molestiae excepturi atque, dolor corrupti aperiam necessitatibus labore debitis nisi nobis id obcaecati repellendus quos velit. Iste repudiandae dicta similique.",
      image: "user1.avif",
    },
    {
      name: "Hector Gibbons",
      date: "July 12, 2021",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur eligendi praesentium fugit, dolore aut voluptate corporis quas! Quas dolore tempore deleniti aut facilis recusandae maiores, tenetur nesciunt placeat cupiditate molestiae excepturi atque, dolor corrupti aperiam necessitatibus labore debitis nisi nobis id obcaecati repellendus quos velit. Iste repudiandae dicta similique.",
      image: "user2.avif",
    },
    {
      name: "Hector Gibbons",
      date: "July 12, 2021",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur eligendi praesentium fugit, dolore aut voluptate corporis quas! Quas dolore tempore deleniti aut facilis recusandae maiores, tenetur nesciunt placeat cupiditate molestiae excepturi atque, dolor corrupti aperiam necessitatibus labore debitis nisi nobis id obcaecati repellendus quos velit. Iste repudiandae dicta similique.",
      image: "user2.avif",
    },
    {
      name: "Hector Gibbons",
      date: "July 12, 2021",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur eligendi praesentium fugit, dolore aut voluptate corporis quas! Quas dolore tempore deleniti aut facilis recusandae maiores, tenetur nesciunt placeat cupiditate molestiae excepturi atque, dolor corrupti aperiam necessitatibus labore debitis nisi nobis id obcaecati repellendus quos velit. Iste repudiandae dicta similique.",
      image: "user2.avif",
    },
    {
      name: "Hector Gibbons",
      date: "July 12, 2021",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur eligendi praesentium fugit, dolore aut voluptate corporis quas! Quas dolore tempore deleniti aut facilis recusandae maiores, tenetur nesciunt placeat cupiditate molestiae excepturi atque, dolor corrupti aperiam necessitatibus labore debitis nisi nobis id obcaecati repellendus quos velit. Iste repudiandae dicta similique.",
      image: "user2.avif",
    },
    {
      name: "Hector Gibbons",
      date: "July 12, 2021",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur eligendi praesentium fugit, dolore aut voluptate corporis quas! Quas dolore tempore deleniti aut facilis recusandae maiores, tenetur nesciunt placeat cupiditate molestiae excepturi atque, dolor corrupti aperiam necessitatibus labore debitis nisi nobis id obcaecati repellendus quos velit. Iste repudiandae dicta similique.",
      image: "user2.avif",
    },
  ];

  const faqSec = [
    {
      id: "1",
      heading: "What format are these icons?",
      text: "The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.",
    },
    {
      id: "2",
      heading: "Can I use the icons at different sizes?",
      text: "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
    },
  ];

  const faqContent = (
    <div>
      {faqSec.map((curr, index) => (
        <div key={index}>
          <h2 className="text-xl font-semibold mt-4">{curr?.heading}</h2>
          <p className="text-gray-700 text-justify mt-2">{curr?.text}</p>
        </div>
      ))}
    </div>
  );

  const licenseContent = (
    <div>
      <h2 className="text-xl font-semibold mb-2">License Information</h2>
      <p className="text-gray-700 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas
        architecto consequatur sint exercitationem facilis perferendis
        voluptates, iste doloremque, eum rem debitis laudantium asperiores
        libero velit, ipsa provident sunt magni autem iure non harum iusto. Quas
        deleniti quod voluptas tempore pariatur aliquid debitis magnam eius.
        Dignissimos eligendi facilis rem corporis temporibus provident, enim
        libero. Vitae, itaque iure sunt exercitationem aliquid rem quas cumque
        fuga nihil recusandae molestiae, rerum deleniti illo veniam
        reprehenderit assumenda nemo adipisci.
      </p>
    </div>
  );

  return (
    <>
      {loading ? (
        <div className="flex justify-center py-6">
          <RotatingLines
            visible={true}
            height="60"
            width="60"
            strokeWidth="5"
            animationDuration="7.00"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-12">
          <div className="max-w-full bg-white border shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center p-4">
              <img
                src={product?.imageUrl}
                alt={product?.name}
                className="w-1/2"
              />
            </div>
            <div className="py-4 px-4 w-full md:w-1/2">
              <h1 className="text-xl xl:text-3xl font-bold  ">
                {product?.name}
              </h1>
              <div className="flex items-center space-x-4 my-4">
                <p className="text-lg line-through text-gray-700">$600.00</p>
                <p className="text-xl font-semibold text-blue-600">
                  {product?.price}
                </p>
              </div>
              <div className="text-md text-gray-700 mb-2">
                <span>50 people are viewing this right now</span>
              </div>
              <p className="text-md text-green-600 font-medium">
                You are saving $20.00 upon purchase
              </p>
              <div className="mt-4">
                <h3 className="font-medium text-gray-700">Color:</h3>
                <div className="flex items-center mt-2 space-x-5">
                  {["red", "blue", "green", "yellow", "black"].map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border ${
                        selectedColor === color
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorSelect(color)}
                    ></button>
                  ))}
                  <button
                    className="text-gray-700 underline text-sm font-bold"
                    onClick={() => setSelectedColor(null)}
                  >
                    Clear
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-md">
                  <span className="font-medium">Brand:</span> Samsung
                </p>
                <p className="text-md">
                  <span className="font-medium">Category:</span>{" "}
                  {product?.category}
                </p>
              </div>
              <div className="mt-6">
                <button className="w-full md:w-3/4 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-8 my-10 space-y-4 sm:space-y-0">
            <button
              onClick={() => setActiveTab("reviews")}
              className={`font-semibold ${
                activeTab === "reviews"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700"
              }`}
            >
              Customer Reviews
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`font-semibold ${
                activeTab === "faq"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700"
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab("license")}
              className={`font-semibold ${
                activeTab === "license"
                  ? "text-blue-600 border-b-5 border-blue-600"
                  : "text-gray-700"
              }`}
            >
              License
            </button>
          </div>
          <div className="divide-y divide-gray-700">
            {activeTab === "reviews" &&
              reviews.slice(0, 2).map((review, index) => (
                <div
                  key={index}
                  className="py-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                >
                  <img
                    src={review?.image}
                    alt={review?.name}
                    className="w-16 h-16 sm:w-12 sm:h-12 rounded-full object-cover mx-auto sm:mx-0"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-center sm:text-left">
                      {review?.name}
                    </h4>
                    <p className="text-sm text-gray-700 text-center sm:text-left">
                      {review?.date}
                    </p>
                    <div className="flex justify-center sm:justify-start items-center my-2">
                      {Array.from({ length: review?.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-500">
                          &#9733;
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 flex text-justify">
                      {review?.text}
                    </p>
                  </div>
                </div>
              ))}

            {activeTab === "faq" && <div>{faqContent}</div>}

            {activeTab === "license" && <div>{licenseContent}</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
