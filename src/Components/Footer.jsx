import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-pink-900   py-8 h-auto">
      <div className="  grid grid-cols-1 mx-10 gap-6 sm:grid-cols-2 md:grid-cols-4">
        <div className="">
          <h1 className="font-bold mb-4 text-white ">TOP CATEGORIES</h1>
          <ul>
            <li>
              <Link
                to="/menboots"
                className="hover:underline  text-white  cursor-pointer text-sm md:text-base  "
              >
                Men Boots
              </Link>
            </li>
            <li>
              <Link
                to="/womenboots"
                className="hover:underline text-white  cursor-pointer text-sm md:text-base"
              >
                Women Boots
              </Link>
            </li>
            <li>
              <Link
                to="/boatshoes"
                className="hover:underline text-white  cursor-pointer text-sm md:text-base"
              >
                Boat Shoes
              </Link>
            </li>
            <li>
              <Link
                to="/yellowboots"
                className="hover:underline text-white  cursor-pointer text-sm md:text-base"
              >
                Yellow Boot
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className="font-bold mb-4 mt-5  text-white">HELP</h1>
          <ul>
            <li>
              <Link
                to="/delivery"
                className="hover:underline text-white  cursor-pointer text-sm md:text-base"
              >
                Delivery
              </Link>
            </li>
            <li>
              <Link
                to="/returns"
                className="hover:underline text-white  cursor-pointer text-sm md:text-base"
              >
                Returns
              </Link>
            </li>
            <li>
              <Link
                to="/securepayments"
                className="hover:underline text-white  cursor-pointer text-sm md:text-base"
              >
                Secure Payments
              </Link>
            </li>
            <li>
              <Link
                to="/Trackorder"
                className="hover:underline text-white  cursor-pointer text-sm md:text-base"
              >
                Tract an Order
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline text-white  cursor-pointer text-sm md:text-base"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className="font-bold mb-4 text-white mt-5">ABOUT Us</h1>
          <ul>
            <li>
              <Link
                to="/Careers"
                className="hover:underline text-white  cursor-pointer text-sm md:text-base"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/Termscondition"
                className="hover:underline text-white  cursor-pointer text-sm md:text-base"
              >
                Terms & Condition of Sales
              </Link>
            </li>
            <li>
              <Link
                to="/privacypolicy"
                className="hover:underline text-white  cursor-pointer text-sm md:text-base"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/responsiblity"
                className="hover:underline text-white  cursor-pointer text-sm md:text-base"
              >
                Responsiblity
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className="font-bold mb-4 text-white mt-5">FEEDBACK</h1>
          <ul>
            <li>
              <Link
                to="/leavefeedback"
                className="hover:underline text-white  cursor-pointer text-sm md:text-base"
              >
                Leave & Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
