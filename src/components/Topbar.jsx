import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";

const Topbar = () => {
  const navigate = useNavigate();
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/logo/getlogo")
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setLogoUrl(data.data[0].imageurl);
        }
      })
      .catch((error) => console.error("Error fetching logo:", error));
  }, []);

  return (
<<<<<<< HEAD
    <div className="p-5">
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-3  text-center">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt="Logo"
              className=" w-[500px] h-[60px] object-contain"
            />
          ) : (
            "Logo"
          )}
        </div>

        <div className="col-span-6  mt-3">
          <Searchbar />
        </div>

        <div className="col-span-3 text-center flex justify-center my-auto gap-2  md:gap-7">
          <div
            onClick={() => navigate("/profile")}
            className="cursor-pointer hover:bg-yellow-700  rounded-md"
          >
=======
    <div className=" p-5">
      <div className="grid grid-cols-12 gap-4">
        {/* logo*/}
        <div className="col-span-3 md:justify-items-center justify-between  text-center">
          logo
        </div>
        {/* saearch */}
        <div className="col-span-6  ">
          <Searchbar />
        </div>
        {/* icon */}
        <div className="col-span-3 text-center flex justify-center gap-2 md:gap-7">
          <div>
>>>>>>> e1339b2870aae3132a2a46f6055146259d05bf3a
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="m448 362.7l-117.3-21.3C320 320 320 310.7 320 298.7c10.7-10.7 32-21.3 32-32c10.7-32 10.7-53.3 10.7-53.3c5.5-8 21.3-21.3 21.3-42.7s-21.3-42.7-21.3-53.3C362.7 32 319.2 0 256 0c-60.5 0-106.7 32-106.7 117.3c0 10.7-21.3 32-21.3 53.3s15.2 35.4 21.3 42.7c0 0 0 21.3 10.7 53.3c0 10.7 21.3 21.3 32 32c0 10.7 0 21.3-10.7 42.7L64 362.7C21.3 373.3 0 448 0 512h512c0-64-21.3-138.7-64-149.3"
              />
            </svg>
          </div>
          <div
            onClick={() => navigate("/wishlist")}
            className="cursor-pointer hover:bg-yellow-700  rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8 18l4-3.05L16 18l-1.5-4.95l4-2.85h-4.9L12 5l-1.6 5.2H5.5l4 2.85zm4 4q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
              />
            </svg>
          </div>
          <div
            onClick={() => navigate("/cart")}
            className="cursor-pointer hover:bg-yellow-700  rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 20h2V10a1 1 0 0 1 1-1h12V7a1 1 0 0 0-1-1h-3.051c-.252-2.244-2.139-4-4.449-4S6.303 3.756 6.051 6H3a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2m6.5-16c1.207 0 2.218.86 2.45 2h-4.9c.232-1.14 1.243-2 2.45-2"
              />
              <path
                fill="currentColor"
                d="M21 11H9a1 1 0 0 0-1 1v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a1 1 0 0 0-1-1m-6 7c-2.757 0-5-2.243-5-5h2c0 1.654 1.346 3 3 3s3-1.346 3-3h2c0 2.757-2.243 5-5 5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
