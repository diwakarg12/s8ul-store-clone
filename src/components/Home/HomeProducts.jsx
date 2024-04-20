/* eslint-disable react/prop-types */
// import React from 'react'

import ProductCard from '../reusableComponents/ProductCard';

const HomeProducts = ({heading, Data, style, style2, number}) => {
  return (
    <div className={`py-12 md:px-12 sm:px-4 ${style} text-white`}>
      <h1 className='md:text-5xl sm:text-4xl font-oswald font-extrabold mb-8'>
        {heading}
      </h1>
      <div className='flex flex-wrap items-center lg:justify-start sm:justify-center'>
        {Data.slice(0,number).map((cap, index) => (
          <ProductCard
            key={index}
            url={cap.img}
            title={cap.title}
            price={cap.price}
            style2={style2}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
