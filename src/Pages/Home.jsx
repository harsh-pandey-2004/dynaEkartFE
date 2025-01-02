import React from 'react'
import PopularProducts from '../components/PopularProducts'
import TopDeals from '../components/TopDeals'
import ProductBanner from '../components/DiscountBanner'
import BrandsWeDistribute from '../components/BrandDistribute'
import PopularSearch from '../components/PopularSearch'

const Home = () => {
  return (
    <>
    {<PopularProducts/>}
    {<TopDeals/>}
    {<PopularSearch/>}
    {<ProductBanner/>}
    {<BrandsWeDistribute/>}
    
    
    </>
  )
}

export default Home