import PopularProducts from "../componants/PopularProducts";
import TopDeals from "../componants/TopDeals";
import ProductBanner from "../componants/DiscountBanner";
import BrandsWeDistribute from "../componants/BrandDistribute";
import Imageslider from "./Imageslider";
const Home = () => {
  return (
    <>
      {<Imageslider />}
      {<PopularProducts />}
      {<TopDeals />}
      {<ProductBanner />}
      {<BrandsWeDistribute />}
    </>
  );
};

export default Home;
