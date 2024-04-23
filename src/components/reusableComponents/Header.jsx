import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Select from './Select';
import { IoMdSearch } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { country } from '../../utilities/SelectData';
import Search from './Search';

const Header = () => {

  const [showSearch,setShowSearch] = useState(false);

  const handleSearchClick = () =>{
     setShowSearch(!showSearch);
  }

  const handleOutsideClick = () =>{
     setShowSearch(false);
  }

  return (
    <div className=' bg-[#1f1f21] text-slate-400 w-full flex items-center h-24'>
      <NavLink to='/' className='ml-12 w-20 mr-12'>
        <img src='/images/S8UL_logo.avif' alt='S8UL LOGO' title='S8UL Logo' />
      </NavLink>

      {showSearch && <Search onClose={handleOutsideClick} />}

      <div className='flex items-center justify-between w-full font-medium text-lg font-avenir'>
        <div className=''>
          <NavLink
            className='hover:underline hover:text-white mr-8'
            to='/'
            title='Home'
          >
            Home
          </NavLink>
          <NavLink
            className='hover:underline hover:text-white mr-8'
            to='/snapbacks'
            title='Snapbacks'
          >
            Snapbacks
          </NavLink>
          <NavLink
            className='hover:underline hover:text-white mr-8'
            to='/limited-edition'
            title='Limited Edition'
          >
            Limited Edition
          </NavLink>
          <NavLink
            className='hover:underline hover:text-white mr-8'
            to='/s8ul-exclusive-merch'
            title='S8UL Exclusive Merch'
          >
            T-Shirts
          </NavLink>
          <NavLink
            className='hover:underline hover:text-white mr-8'
            to='/about'
            title='About'
          >
            About us
          </NavLink>
          <NavLink
            className='hover:underline hover:text-white mr-8'
            to='/contact'
            title='Contact'
          >
            Contact us
          </NavLink>
        </div>
        <div className='flex items-center'>
          {!showSearch && (
            <NavLink to='/' className='hover:text-white mr-6' title='Country'>
              <Select style={'bg-slate-800 text-slate-400'} data={country} />
            </NavLink>
          )}
          {!showSearch && (
            <NavLink
              to='/'
              className='hover:text-white mr-6'
              title='Search'
              onClick={handleSearchClick}
            >
              <IoMdSearch className='text-[1.5rem]' />
            </NavLink>
          )}
          {!showSearch && (
            <NavLink
              to='/login'
              className='hover:text-white mr-6'
              title='Login & Signup'
            >
              <FaUser className='text-xl' />
            </NavLink>
          )}
          {!showSearch && (
            <NavLink
              to='/register'
              className='hover:text-white mr-12'
              title='Cart'
            >
              <FiShoppingBag className='text-xl' />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
