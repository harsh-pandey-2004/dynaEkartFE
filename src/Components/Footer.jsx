import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="foot py-8 h-auto">
      <div className="grid grid-cols-1 mx-2 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h1 className="font-bold mb-4 text-white text-lg">TOP CATEGORIES</h1>
          <ul className="space-y-2">
            <li>
              <Link
                to="/menboots"
                className="hover:underline text-white cursor-pointer text-[16px]"
              >
                Men Boots
              </Link>
            </li>
            <li>
              <Link
                to="/womenboots"
                className="hover:underline text-white cursor-pointer text-[16px] "
              >
                Women Boots
              </Link>
            </li>
            <li>
              <Link
                to="/boatshoes"
                className="hover:underline text-white cursor-pointer text-[16px]"
              >
                Boat Shoes
              </Link>
            </li>
            <li>
              <Link
                to="/yellowboots"
                className="hover:underline text-white cursor-pointer text-[16px] "
              >
                Yellow Boot
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold mb-4 mt-5 text-white text-lg">HELP</h1>
          <ul className="space-y-2">
            <li>
              <Link
                to="/delivery"
                className="hover:underline text-white cursor-pointer text-[16px] "
              >
                Delivery
              </Link>
            </li>
            <li>
              <Link
                to="/returns"
                className="hover:underline text-white cursor-pointer text-[16px] "
              >
                Returns
              </Link>
            </li>
            <li>
              <Link
                to="/securepayments"
                className="hover:underline text-white cursor-pointer text-[16px] "
              >
                Secure Payments
              </Link>
            </li>
            <li>
              <Link
                to="/Trackorder"
                className="hover:underline text-white cursor-pointer text-[16px] "
              >
                Track an Order
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline text-white cursor-pointer text-[16px] "
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold mb-4 mt-5 text-white text-lg">ABOUT US</h1>
          <ul className="space-y-2">
            <li>
              <Link
                to="/Careers"
                className="hover:underline text-white cursor-pointer text-[16px] "
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/Termscondition"
                className="hover:underline text-white cursor-pointer text-[16px] "
              >
                Terms & Conditions of Sales
              </Link>
            </li>
            <li>
              <Link
                to="/privacypolicy"
                className="hover:underline text-white cursor-pointer text-[16px] "
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/responsibility"
                className="hover:underline text-white cursor-pointer text-[16px] "
              >
                Responsibility
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold mb-4 mt-5 text-white text-lg">FEEDBACK</h1>
          <ul className="space-y-2">
            <li>
              <Link
                to="/leavefeedback"
                className="hover:underline text-white cursor-pointer text-[16px] "
              >
                Leave Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="foot1 h-auto w-full absolute mt-8 py-8">
        <div className="mx-10 md:flex md:justify-between md:items-start">
          <div className="md:w-1/3">
            <h3 className="text-lg text-white font-bold mb-2">Find a Store</h3>
            <p className="text-sm text-white mb-4">
              Find Timberland Products Near You
            </p>
            <Link
              to="#"
              className="inline-block text-white bg-yellow-500 px-24 py-2 font-bold rounded hover:bg-yellow-600"
            >
              Store Locator
            </Link>
          </div>

          <div className="text-center md:w-1/3 md:text-left">
            <h1 className="text-white text-lg font-bold mb-2">FOLLOW US</h1>
            <div className="flex justify-center md:justify-start space-x-4">
              <FaTwitter className="text-white size-5 hover:text-yellow-500" />
              <FaFacebookSquare className="text-white size-5 hover:text-yellow-500" />
              <FaInstagramSquare className="text-white size-5 hover:text-yellow-500" />
              <FaYoutube className="text-white size-5 hover:text-yellow-500" />
            </div>
          </div>

          <div className="text-center md:w-1/3 md:text-right">
            <h1 className="text-lg font-bold mb-2 text-center text-white">
              Newsletter Subscription
            </h1>
            <p className="text-white text-sm mb-4 px-10">
              Receive product news and updates in your inbox
            </p>
            <form className="flex flex-col md:flex-row items-center md:justify-end space-y-2 md:space-y-0">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-3/5 mr-12 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-300 pr-12"
                />
                <button className="absolute mr-12 top-0 bottom-0 right-0  bg-yellow-500 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-600 focus:outline-none">
                  &#x27A4;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
