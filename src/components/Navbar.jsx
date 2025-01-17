import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Category from "./Category";
import axios from "axios";

const Navbar = () => {
  const [navBarData, setNavBarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchNavbarData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/navbar/get");
        if (response.data && response.data.data) {
          setNavBarData(response.data.data);
        } else {
          setError("Unexpected API response structure");
        }
      } catch (err) {
        setError("Failed to fetch navigation data");
      } finally {
        setLoading(false);
      }
    };

    fetchNavbarData();
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="bg-black p-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 sm:hidden flex justify-relative  ">
          <button
            className="flex flex-col space-y-1 cursor-pointer  hover:bg-red-600 "
            onClick={toggleMenu}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        <div className="col-span-2 hidden sm:flex justify-around relative">
          <Category />
        </div>

        <div className="col-span-8 hidden sm:block">
          <div className="flex justify-between">
            {navBarData.map((item) => (
              <NavLink
                key={item._id}
                to={item.link}
                className="text-white text-lg  cursor-pointer hover:underline  active:underline focus:underline"
                activeClassName="text-blue-500  "
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:hidden mt-4 bg-gray-900 rounded-lg p-4`}
      >
        <div className="mb-4  cursor-pointer">
          <Category />
        </div>

        <div className="flex flex-col space-y-2">
          {navBarData.map((item) => (
            <NavLink
              key={item._id}
              to={item.link}
              className="text-white text-lg  cursor-pointer "
              activeClassName="text-blue-500"
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
