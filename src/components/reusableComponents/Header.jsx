import { Link } from 'react-router-dom';
import Select from './Select';
import { IoMdSearch } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { country } from '../../utilities/SelectData';

const Header = () => {
  return (
    <div className=' bg-slate-800 text-slate-400 w-screen flex items-center h-24'>
      <Link to='/' className='ml-12 w-20 mr-12'>
        <img src='/images/S8UL_logo.avif' alt='S8UL LOGO' />
      </Link>
      <div className='flex items-center justify-between w-full font-medium text-lg font-avenir'>
        <div className=''>
          <Link className='hover:underline hover:text-white mr-8' to='/'>
            Home
          </Link>
          <Link
            className='hover:underline hover:text-white mr-8'
            to='/snapbacks'
          >
            Snapbacks
          </Link>
          <Link
            className='hover:underline hover:text-white mr-8'
            to='/limited-edition'
          >
            Limited Edition
          </Link>
          <Link
            className='hover:underline hover:text-white mr-8'
            to='/s8ul-exclusive-merch'
          >
            T-Shirts
          </Link>
          <Link className='hover:underline hover:text-white mr-8' to='/about'>
            About us
          </Link>
          <Link className='hover:underline hover:text-white mr-8' to='/contact'>
            Contact us
          </Link>
        </div>
        <div className='flex items-center'>
          <Link to='/' className='hover:text-white mr-6'>
            <Select style={'bg-slate-800 text-slate-400'} data={country} />
          </Link>
          <Link to='/' className='hover:text-white mr-6'>
            <IoMdSearch className='text-[1.5rem]' />
          </Link>
          <Link to='/' className='hover:text-white mr-6'>
            <FaUser className='text-xl' />
          </Link>
          <Link to='/' className='hover:text-white mr-12'>
            <FiShoppingBag className='text-xl' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
