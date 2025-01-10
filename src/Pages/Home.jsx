import PopularProducts from "../componants/PopularProducts";
import TopDeals from "../componants/TopDeals";
import ProductBanner from "../componants/DiscountBanner";
import BrandsWeDistribute from "../componants/BrandDistribute";

const Home = () => {
  return (
    <>
      {<PopularProducts />}
      {<TopDeals />}
      {<ProductBanner />}
      {<BrandsWeDistribute />}
    </>
  );
};

export default Home;
