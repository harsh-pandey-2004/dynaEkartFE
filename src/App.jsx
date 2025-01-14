import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Blog from "./components/Blog";
import Order from "./components/Order";
import Cart from "./components/Cart";
import Account from "./components/Account";
import Category from "./Pages/Category";
import Footer from "./components/Footer";
import Products from "./components/Product";
const App = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/account" element={<Account />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:id" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
