// import React from 'react'
import { Link } from 'react-router-dom';

const Visitpartner = () => {
  return (
    <div className='bg-[#1f1f1f] text-[#ffffffbf] w-full flex flex-col items-center justify-center py-12'>
      <div className='w-1/2 flex flex-col items-center justify-center'>
        <p className='text-center text-lg font-avenir mb-6'>
          For more Extraordinary collection of Gaming & Pop culture inspired
          fashion and accecories from Drippen Moncky, Click the link below
        </p>
        <Link
          to=''
          className='bg-[#e3fc02] text-[#1f1f1f] text-lg font-avenir py-3 px-8'
        >
          Visit Drippen Mocky
        </Link>
      </div>
    </div>
  );
};

export default Visitpartner;
