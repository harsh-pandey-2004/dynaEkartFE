import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductBanner = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/banner/get")
      .then((response) => {
        console.log(response.data.data);
        setMyData(response.data.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {
        myData.map((post) => {
          const { name, heading, paragraph, btnName, btnColor,bannerImage } = post;

          return (
            <div
              key={name}
              style={{backgroundImage:`url(${bannerImage})`}}
              className="w-full h-auto mb-10 bg-cover bg-center p-8 flex flex-col items-center justify-center text-white"
            >
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {heading}
                </h1>
                <p className="text-lg md:text-xl">{paragraph}</p>
              </div>

              <div className="mt-8">
                <button
                style={{
                  backgroundColor: btnColor
                }}
                  className={`px-6 py-3  rounded-full text-3xl md:text-4xl font-semibold`} // Dynamic button color
                >
                  {btnName}
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductBanner;
