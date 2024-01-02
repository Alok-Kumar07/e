// eslint-disable-next-line no-unused-vars
import React from 'react'
import Banner from '../Components/Banner'
import BestSellerBooks from './BestSellBook'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Review from './Review';

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default Home 