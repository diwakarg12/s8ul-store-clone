// import React from 'react'
import { Caps, Limited, Champion, Tshirt } from '../../utilities/ProductData';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import HomeProducts from '../Home/HomeProducts';
import Size from './Size';
import ProductQunatity from '../../components/ProductQunatity';
import AddToCart from './AddToCart';
import { CiShare1 } from 'react-icons/ci';

const SingleProduct = () => {
  const { title } = useParams();

  const allproduct = [...Caps, ...Limited, ...Champion, ...Tshirt];
  const data = allproduct.find((product) => product.title === title);

  if (!data) {
    return <div>No Data Found..</div>;
  }
  return (
    <>
      <div className='flex md:flex-row sm:flex-col justify-center items-center w-full lg:h-[70rem] md:h-[38rem] bg-white text-[#1f1f1fbf]'>
        <div className='md:w-1/2 sm:w-full md:h-auto md:pl-8 md:pr-4 sm:px-2 lg:py-2 md:py-0'>
          <img
            src={data.img}
            alt={data.title}
            className='w-full md:h-auto sm:h-72 object-cover'
          />
          <div className='flex items-center justify-center py-4 w-full'>
            <img
              src={data?.img2}
              alt={data.title}
              className='lg:w-40 sm:w-24 lg:h-44 sm:h-24 mr-[0.5rem] border border-black'
            />
            <img
              src={data?.img3}
              alt={data.title}
              className='lg:w-40 sm:w-24 lg:h-44 sm:h-24 mx-[0.5rem] border border-black'
            />
            <img
              src={data?.img4}
              alt={data.title}
              className='lg:w-40 sm:24 lg:h-44 sm:h-24 mx-[0.5rem] border border-black'
            />
            <img
              src={data?.img5}
              alt={data.title}
              className='lg:w-40 sm:w-24 lg:h-44 sm:h-24 ml-[0.5rem] border border-black'
            />
          </div>
        </div>
        <div className='md:w-1/2 sm:w-full md:pl-8 sm:pl-4 lg:pt-4 md:pt-2 sm:pt-4 sm:pb-4 pr-4 lg:mt-[14rem] md:mt-12 md:mb-12 lg:mb-56 overflow-y-scroll lg:h-[67.5rem] md:h-[34.2rem]'>
          <p className='text-xs font-avenir'>S8UL STORE</p>
          <h1 className='lg:text-[3.5rem] md:text-[2rem] font-oswald font-extrabold text-[#1f1f1f]'>
            {data.title}
          </h1>
          <h3 className='text-lg font-avenir'>{data.price}</h3>
          <p className='font-avenir text-sm mb-4'>
            Tax included.{' '}
            <Link to='' className='underline font-medium text-[#1f1f1f]'>
              Shipping
            </Link>{' '}
            calculated at checkout.
          </p>
          <p className='font-avenir text-sm mb-'>Size</p>
          <div className='flex flex-wrap items-center justify-start mb-3'>
            <Size size='Small' />
            <Size size='Medium' />
            <Size size='Large' />
            <Size size='Extra Large' />
          </div>
          <p>Quantity</p>
          <ProductQunatity />
          <div className='flex flex-col'>
            <AddToCart
              text='Add to Cart'
              style='py-4 px-12 my-2 bg-transparent text-[#1f1f1f] font-avenir text-base font-medium border border-black md:w-4/5 sm:w-full'
            />
            <AddToCart
              text='Buy Now'
              style='py-4 px-12 my-2 bg-[#1f1f21] text-white font-avenir text-base font-medium md:w-4/5 sm:w-full'
            />
          </div>
          <p className='text-sm font-avenir mb-2 md:mt-8 sm:mt-4 flex'>
            <svg
              className='text-sm font-avenir font-bold w-5 h-5 mr-1'
              aria-hidden='true'
              focusable='false'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                fill='#108043'
                stroke='#fff'
                d='M16.136 6.979h0l.003-.004a1.499 1.499 0 00-2.275-1.954l-5.945 6.777-1.858-1.859A1.499 1.499 0 103.94 12.06l2.999 3s0 0 0 0c.289.29.675.44 1.1.439h.019a1.5 1.5 0 001.08-.522l6.998-7.998z'
              ></path>
            </svg>
            Pickup available at Munisamappa Garden road , Chunchghatta Main
            Road.
          </p>
          <p className='text-sm font-avenir mb-2 ml-6'>
            Usually Ready in 24 Hrs
          </p>
          <Link className='underline text-sm font-avenir mb-2 ml-6'>
            View Store Information
          </Link>
          <p className='md:text-lg sm:text-base md:my-4 sm:mt-4 mb-2 font-medium font-avenir'>
            Trending Flannel Fabric | Smooth Hand Feel | 100% Cotton
          </p>
          <p className='md:text-lg sm:text-base md:my-4 sm:my-2 font-medium font-avenir'>
            High Density Screen Print
          </p>
          <p className='md:text-lg sm:text-base md:my-4 sm:my-2 font-medium font-avenir'>
            Wash care:
          </p>
          <p className='md:text-lg sm:text-base md:my-4 sm:my-2 font-medium font-avenir'>
            Wash Inside out | Do not Bleach | Do not Iron on the Print
          </p>
          <p className='md:text-lg sm:text-base md:my-4 sm:my-2 font-medium font-avenir'>
            Size Exchanges are Subjected to availablity | Please refer Size
            Chart properly
          </p>
          <img
            src='https://cdn.shopify.com/s/files/1/0804/7188/4062/files/Screenshot2023-12-26161121_480x480.png?v=1703587701'
            alt='Size Chart'
          />
          <p className='flex'>
            <CiShare1 className='mt-1 ml-2 text-lg font-bold' /> Share
          </p>
        </div>
      </div>
      <div>
        <HomeProducts
          heading={'YOU MAY ALSO LIKE'}
          Data={Limited}
          style={'bg-[#1f1f1f]'}
          style2={'text-white'}
          number={4}
        />
      </div>
    </>
  );
};

export default SingleProduct;
