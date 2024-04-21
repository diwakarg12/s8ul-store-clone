// import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';

const Subscribe = () => {
  return (
    <div className='bg-[#e3fc02] h-auto flex flex-col items-center justify-center py-12 w-full'>
      <h1 className='text-[#1F1F21] text-center text-[3rem] font-extrabold font-oswald mb-6'>
        SUBSCRIBE TO OUR EMAILS
      </h1>
      <h4 className='text-[#1F1F21BF] text-center text-base font-avenir mb-[1.5rem] mt-0'>
        Be the first to know about new collections and exclusive offers
      </h4>
      <input
        type='email'
        placeholder='Email'
        className='py-4 pl-4 w-[22.5rem] bg-transparent border border-black placeholder:text-black focus:outline-none'
        required
      />
      <FaArrowRightLong className='absolute lg:mt-36 lg:ml-72 md:mt-36 sm:mt-60 sm:ml-72 font-avenir font-normal' />
    </div>
  );
};

export default Subscribe;
