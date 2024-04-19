// import React from 'react'
import Visitpartner from './reusableComponents/Visitpartner'
import HomeProducts from './Home/HomeProducts';
import { Caps } from '../utilities/ProductData';
import Filter from './reusableComponents/Filter';

const Snapbacks = () => {
  return (
    <div>
      <div className='w-full bg-[#1f1f1f]'>
        <img
          src='https://s8ul.store/cdn/shop/files/hoodie_hero_image_edited_F_1.png?v=1699431089&width=3000'
          alt='Limited Edition Banner'
        />
        <h1 className='py-6 px-12 text-5xl font-extrabold font-oswald text-[#ffffffbf]'>
          Limited Drop
        </h1>
      </div>
      <Filter />
      <HomeProducts heading='' style={'bg-white'} Data={Caps} />
      <Visitpartner />
    </div>
  );
}

export default Snapbacks