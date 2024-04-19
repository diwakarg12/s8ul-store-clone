// import React from 'react'
// import Visitpartner from './reusableComponents/Visitpartner';
import HomeProducts from './Home/HomeProducts';
import { Tshirt } from '../utilities/ProductData';
import Filter from './reusableComponents/Filter';

const Tshirts = () => {
  return (
    <div>
      <div className='w-full bg-[#1f1f1f]'>
        <img
          src='https://s8ul.store/cdn/shop/files/Collab_edited_banner.png?v=1691346233&width=3000'
          alt='Tshirt Banner'
        />
        <h1 className='py-6 px-12 text-5xl font-extrabold font-oswald text-[#ffffffbf]'>
          T-shirts
        </h1>
      </div>
      <Filter />
      <HomeProducts heading='' style={'bg-white'} Data={Tshirt} />
      {/* <Visitpartner /> */}
    </div>
  );
};

export default Tshirts;
