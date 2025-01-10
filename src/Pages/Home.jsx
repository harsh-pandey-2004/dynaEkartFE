import React from "react";
import PopularProducts from "../componants/PopularProducts";
import TopDeals from "../componants/TopDeals";
import ProductBanner from "../componants/DiscountBanner";
import BrandsWeDistribute from "../componants/BrandDistribute";
import Slider from "../components/Slider";
import Imageslider from "./Imageslider";
const Home = () => {
  return (
    <>
      {<Imageslider />}
      {<Slider />}
      {<PopularProducts />}
      {<TopDeals />}
      {<ProductBanner />}
      {<BrandsWeDistribute />}
    </>
  );
};

export default Home;
