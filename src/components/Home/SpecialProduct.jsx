/* eslint-disable react/prop-types */
// import React from 'react'
import { CiShare1 } from 'react-icons/ci';
import { FaArrowRightLong } from 'react-icons/fa6';
import ProductQunatity from '../ProductQunatity';

const SpecialProduct = ({ url, title, amount }) => {
  return (
    <div className='bg-black flex flex-wrap items-center justify-center md:py-24 lg:px-32 md:px-16 sm:py-12 px-4 border-b w-full'>
      <div className='lg:w-1/2 sm:w-full'>
        <img
          src={url}
          alt={title}
          className='lg:h-[75vh] sm:h-[55vh] sm:w-full'
        />
      </div>
      <div className='lg:w-1/2 sm:w-full lg:pl-24 sm:pl-4 sm:mt-12 lg:mt-0'>
        <p className='text-slate-400 text-sm font-avenir'>S8UL STORE</p>
        <h1 className='text-white md:text-[3.5rem] sm:text-[2.5rem] font-oswald mb-4'>
          {title}
        </h1>
        <div className='flex items-center justify-start mb-6'>
          {/* <p className="text-slate-300"></p> */}
          <p className='text-white text-lg font-avenir'>{amount}</p>
          <p className='py-1 px-4 mb-1 text-xs font-avenir bg-white rounded-2xl ml-20'>
            Sale
          </p>
        </div>
        <p className='mb-4 text-sm font-avenir text-[#FFFFFFBF]'>
          Tax included.{' '}
          <span className='underline text-[#E3FC02D9] '>Shipping</span>{' '}
          calculated at Checkout.
        </p>
        <p className='text-sm font-avenir mb-1 text-[#FFFFFFBF]'>Quantity</p>
        <ProductQunatity />
        <button className='border border-[#E3CF02] h-12 w-full bg-transparent text-[#E3CF02] text-center font-avenir text-base'>
          Add to cart
        </button>{' '}
        <br />
        <button className='text-white text-center text-base w-full font-medium font-avenir my-6'>
          Buy now
        </button>
        <div className='flex items-start justify-between text-[#E3CF02] font-avenir'>
          <p className='flex'>
            Share <CiShare1 className='mt-1 ml-2 text-lg font-bold' />
          </p>
          <p className='flex'>
            View Description <FaArrowRightLong className='mt-1 ml-2' />
          </p>
        </div>
        <p className='text-white mt-4 lg:ml-4 sm:ml-0'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero iusto
          modi iste accusamus praesentium aut blanditiis, officiis eum vitae
          enim est, omnis qui ullam delectus! Iure qui aliquam facere libero id
          doloribus quod exercitationem explicabo omnis cupiditate deserunt
          natus vitae tenetur asperiores ab, nulla maiores. Excepturi corrupti
          saepe, itaque et nesciunt amet exercitationem ut similique quia minus
          aliquid. Minus natus, excepturi et explicabo porro iusto doloremque
          esse, animi tenetur autem consequatur exercitationem iure quas tempora
          hic in, dolore quasi eum expedita eligendi voluptatem provident
          consequuntur cupiditate minima! Illum, sunt, obcaecati tempora,
          voluptates numquam rem consequuntur sequi quibusdam ad minus eaque.
        </p>
      </div>
    </div>
  );
};

export default SpecialProduct;
