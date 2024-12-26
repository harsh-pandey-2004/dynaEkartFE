import React from "react";
import Home from "./components/Home";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import cart from "./components/Cart";
import account from "./components/Account";
import Blog from "./components/Blog";
import Order from "./components/Order";
import Cart from "./components/Cart";
import Account from "./components/Account";
import Category from "./components/Category";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/account" element={<Account />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
