import React from "react";
import PopularProducts from "../components/PopularProducts";
import TopDeals from "../components/TopDeals";
import ProductBanner from "../components/DiscountBanner";
import BrandsWeDistribute from "../components/BrandDistribute";
// import Slider from "../components/";
const Home = () => {
  return (
    <>
      {/* {<Slider />} */}
      {<PopularProducts />}
      {<TopDeals />}
      {<ProductBanner />}
      {<BrandsWeDistribute />}
    </>
  );
};

export default Home;
