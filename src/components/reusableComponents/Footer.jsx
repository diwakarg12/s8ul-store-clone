// import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='bg-[#1f1f21]'>
      <div className='py-12 border-b-2 border-slate-400'>
        <h1 className='text-center font-oswald text-white text-2xl font-bold mb-6'>
          Quick links
        </h1>
        <div className='flex md:flex-row sm:flex-col items-center justify-center text-slate-400 text-base font-avenir '>
          <Link
            to='/'
            className='hover:text-white hover:underline md:mr-8 sm:mr-0 md:py-0 sm:py-2'
          >
            About Us
          </Link>
          <Link
            to='/'
            className='hover:text-white hover:underline md:mr-8 sm:mr-0 md:py-0 sm:py-2'
          >
            Privacy Policy
          </Link>
          <Link
            to='/'
            className='hover:text-white hover:underline md:mr-8 sm:mr-0 md:py-0 sm:py-2'
          >
            Refund Policy
          </Link>
          <Link
            to='/'
            className='hover:text-white hover:underline md:mr-8 sm:mr-0 md:py-0 sm:py-2'
          >
            Terms of Service
          </Link>
          <Link
            to='/'
            className='hover:text-white hover:underline md:mr-8 sm:mr-0 md:py-0 sm:py-2'
          >
            Shipping Policy
          </Link>
        </div>
      </div>
      <div className='py-12'>
        <div className='flex items-center justify-center text-slate-400 text-lg font-avenir mb-12'>
          <img
            src='/images/apple-pay.png'
            alt=''
            className='w-12 h-[1.8rem] object-contain mr-4 bg-white'
          />
          <img
            src='/images/mastercard.png'
            alt=''
            className='w-12 h-[1.8rem] object-contain mr-4 bg-white'
          />
          <img
            src='/images/paytm.png'
            alt=''
            className='w-12 h-[1.8rem] object-contain mr-4 bg-white'
          />
          <img
            src='/images/razorpay.png'
            alt=''
            className='w-12 h-[1.8rem] object-contain mr-4 bg-white'
          />
          <img
            src='/images/visa.png'
            alt=''
            className='w-12 h-[1.8rem] object-fill mr-4 bg-white'
          />
        </div>
        <p className='text-slate-300 font-avenir pl-8'>
          &copy; 2024, S8UL STORE Powered by Drippin Moncky
        </p>
      </div>
    </footer>
  );
};

export default Footer;
