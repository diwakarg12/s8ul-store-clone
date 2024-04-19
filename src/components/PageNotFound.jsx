// import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <main className='w-full h-[100vh] grid place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-[url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1776&h=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover'>
      <div className='w-full h-full text-center flex flex-col items-center justify-center'>
        <p className='text-2xl font-bold font-oswald text-white'>404</p>
        <h1 className='mt-4 text-[10rem] font-extrabold font-oswald text-gray-900 sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-lg leading-7 text-gray-600'>
          Sorry, we couldn`t find the page you`re looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            to='/'
            className='bg-[#e6f302] px-6 py-2.5 text-base font-semibold font-avenir text-[#1f1f1f] hover:shadow-lg'
          >
            Go back home
          </Link>
          <Link
            to='/contact'
            className='bg-[#e6f302] px-6 py-2.5 text-base font-semibold font-avenir text-[#1f1f1f] hover:shadow-lg flex items-center justify-center'
          >
            Contact us{' '}
            <span
              aria-hidden='true'
              className='absolute bottom-[13.3rem] ml-28'
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
