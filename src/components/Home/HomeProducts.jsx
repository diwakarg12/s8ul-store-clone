/* eslint-disable react/prop-types */
// import React from 'react'

import ProductCard from '../reusableComponents/ProductCard';

const HomeProducts = ({heading, Data, style, number}) => {
  return (
    <div className={`py-12 px-12 ${style} text-white`}>
      <h1 className='text-5xl font-oswald font-extrabold mb-8'>
        {heading}
      </h1>
      <div className='flex flex-wrap items-center justify-start'>
        {Data.slice(0,number).map((cap, index) => (
          <ProductCard
            key={index}
            url={cap.img}
            title={cap.title}
            price={cap.price}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
