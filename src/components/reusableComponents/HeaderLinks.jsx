/* eslint-disable react/prop-types */
import Select from './Select';
import { IoMdSearch } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { country } from '../../utilities/SelectData';
import { Link } from 'react-router-dom';

const HeaderLinks = ({ handleSearchClick, showSearch, style }) => {
  return (
    <div className={`${style} w-full font-medium text-lg font-avenir`}>
      <div className='flex md:flex-row md:my-0 md:text-lg sm:flex-col sm:my-8 sm:text-2xl'>
        <Link
          className='hover:underline hover:text-white lg:mr-8 md:mr-2 md:py-0 md:font-normal sm:py-1 sm:font-semibold'
          to='/'
          title='Home'
        >
          Home
        </Link>
        <Link
          className='hover:underline hover:text-white lg:mr-8 md:mr-4 md:py-0 md:font-normal sm:py-1 sm:font-semibold'
          to='/snapbacks'
          title='Snapbacks'
        >
          Snapbacks
        </Link>
        <Link
          className='hover:underline hover:text-white lg:mr-8 md:mr-4 md:py-0 md:font-normal sm:py-1 sm:font-semibold'
          to='/limited-edition'
          title='Limited Edition'
        >
          Limited Edition
        </Link>
        <Link
          className='hover:underline hover:text-white lg:mr-8 md:mr-4 md:py-0 md:font-normal sm:py-1 sm:font-semibold'
          to='/s8ul-exclusive-merch'
          title='S8UL Exclusive Merch'
        >
          T-Shirts
        </Link>
        <Link
          className='hover:underline hover:text-white lg:mr-8 md:mr-4 md:py-0 md:font-normal sm:py-1 sm:font-semibold'
          to='/about'
          title='About'
        >
          About us
        </Link>
        <Link
          className='hover:underline hover:text-white lg:mr-8 md:mr-4 md:py-0 md:font-normal sm:py-1 sm:font-semibold'
          to='/contact'
          title='Contact'
        >
          Contact us
        </Link>
      </div>
      <div className='lg:flex sm:flex md:hidden items-center justify-center pl-10 md:pb-0 sm:pb-12'>
        {!showSearch && (
          <Select style={'bg-slate-800 text-slate-400'} data={country} />
        )}
        {!showSearch && (
          <Link
            to='/'
            className='hover:text-white mr-6'
            title='Search'
            onClick={handleSearchClick}
          >
            <IoMdSearch className='text-[1.5rem]' />
          </Link>
        )}
        {!showSearch && (
          <Link
            to='/login'
            className='hover:text-white mr-6'
            title='Login & Signup'
          >
            <FaUser className='text-xl' />
          </Link>
        )}
        {!showSearch && (
          <Link to='/register' className='hover:text-white mr-12' title='Cart'>
            <FiShoppingBag className='text-xl' />
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderLinks;
