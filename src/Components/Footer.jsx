import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchFooterItems } from "../network/Footer"; // Import the API call
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const getFooterData = async () => {
      try {
        const data = await fetchFooterItems(); // Use the imported function
        const transformedData = {};
        data?.forEach((section) => {
          transformedData[section.headersection] = section.Items;
        });
        setFooterData(transformedData);
      } catch (error) {
        console.error("Error fetching footer data:", error.message);
      }
    };

    getFooterData();
  }, []);

  if (!footerData) {
    return <div>Loading...</div>;
  }

  return (
    <footer className="foot py-8 h-auto bg-black">
      <div className="grid grid-cols-1 mx-20 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4 ">
        {footerData["Top Categories"] && (
          <div>
            <h1 className="font-bold mb-4 text-white text-lg">
              TOP CATEGORIES
            </h1>
            <ul className="space-y-2">
              {footerData["Top Categories"].map((item) => (
                <li key={item._id}>
                  <Link
                    to={item.itemlink}
                    className="hover:underline text-white cursor-pointer text-[16px]"
                  >
                    {item.itemname}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {footerData["Help"] && (
          <div>
            <h1 className="font-bold mb-4 mt-5 text-white text-lg">HELP</h1>
            <ul className="space-y-2">
              {footerData["Help"].map((item) => (
                <li key={item._id}>
                  <Link
                    to={item.itemlink}
                    className="hover:underline text-white cursor-pointer text-[16px]"
                  >
                    {item.itemname}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {footerData["About Us"] && (
          <div>
            <h1 className="font-bold mb-4 mt-5 text-white text-lg">ABOUT US</h1>
            <ul className="space-y-2">
              {footerData["About Us"].map((item) => (
                <li key={item._id}>
                  <Link
                    to={item.itemlink}
                    className="hover:underline text-white cursor-pointer text-[16px]"
                  >
                    {item.itemname}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {footerData["Feedback"] && (
          <div>
            <h1 className="font-bold mb-4 mt-5 text-white text-lg">FEEDBACK</h1>
            <ul className="space-y-2">
              {footerData["Feedback"].map((item) => (
                <li key={item._id}>
                  <Link
                    to={item.itemlink}
                    className="hover:underline text-white cursor-pointer text-[16px]"
                  >
                    {item.itemname}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {footerData["Follow Us"] && (
        <div className="foot1 h-auto w-full absolute mt-8 py-8 bg-black px-20">
          <div className="flex justify-end items-center">
            <div className="text-right md:w-1/3">
              <h1 className="text-white text-lg font-bold px-6 mb-2">
                FOLLOW US
              </h1>
              <div className="flex justify-end space-x-4">
                <FaTwitter className="text-white size-5 hover:text-yellow-500" />
                <FaFacebookSquare className="text-white size-5 hover:text-yellow-500" />
                <FaInstagramSquare className="text-white size-5 hover:text-yellow-500" />
                <FaYoutube className="text-white size-5 hover:text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
