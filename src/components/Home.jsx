// import React from 'react';

import HomeHeroSection from './Home/HomeHeroSection';
import HomeProducts from './Home/HomeProducts';
import { Caps, Limited, Tshirt, Champion } from '../utilities/ProductData';
import SpecialProduct from './Home/SpecialProduct';

const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeProducts
        heading='New In Snapbacks'
        style={'bg-[#1f1f1f]'}
        Data={Caps}
        number={18}
      />
      <SpecialProduct
        url='https://s8ul.store/cdn/shop/files/Untitled-1-min.png?v=1711016472&width=823'
        title='All 18 Snapbacks'
        amount='Rs. 15,284.70'
      />
      <SpecialProduct
        url='https://s8ul.store/cdn/shop/files/4_85af33de-0e9a-49ce-b7a5-000e617fa4c6.png?v=1712840789&width=823'
        title='Iced Out Rocket Pendant - by freshice'
        amount='Rs. 1,399.00'
      />
      <HomeProducts
        heading='Limited Drop'
        style={'bg-[#1f1f1f]'}
        Data={Limited}
        number={6}
      />
      <HomeProducts
        heading='Back in Stock'
        style={'bg-[#1f1f1f]'}
        Data={Tshirt}
        number={6}
      />
      <HomeProducts
        heading='Champions Edition'
        style={'bg-[#1f1f1f]'}
        Data={Champion}
        number={2}
      />
    </>
  );
};

export default Home;
