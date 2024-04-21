/* eslint-disable react/prop-types */
// import React from 'react'

import ProductCard from '../reusableComponents/ProductCard';

const HomeProducts = ({ heading, Data, style, style2, number }) => {
  return (
    <div className={`py-12 lg:px-12 md:px-8 sm:px-4 ${style} text-white`}>
      <h1 className='md:text-5xl sm:text-4xl font-oswald font-extrabold mb-8'>
        {heading}
      </h1>
      <div className='flex flex-wrap items-center lg:justify-start sm:justify-center'>
        {Data.slice(0, number).map((data) => (
          <ProductCard
            key={data.id}
            url={data.img}
            title={data.title}
            price={data.price}
            style2={style2}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
