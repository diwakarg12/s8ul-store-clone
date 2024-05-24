import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import HeaderLinks from './HeaderLinks';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleOutsideClick = () => {
    setShowSearch(false);
  };

  const handleMenuShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=' bg-[#1f1f21] text-slate-400 w-full flex items-center h-24'>
      <NavLink to='/' className='md:ml-12 sm:ml-8 md:w-20 sm:w-40 mr-12'>
        <img src='/images/S8UL_logo.avif' alt='S8UL LOGO' title='S8UL Logo' />
      </NavLink>

      {showSearch && <Search onClose={handleOutsideClick} />}

      <HeaderLinks
        handleSearchClick={handleSearchClick}
        showSearch={showSearch}
        style={'md:flex md:items-center md:justify-between sm:hidden'}
      />
      <div className='md:hidden flex w-full items-end justify-end text-3xl pl-24 pr-12'>
        <GiHamburgerMenu onClick={handleMenuShow} />
      </div>
      <HeaderLinks
        handleSearchClick={handleSearchClick}
        showSearch={showSearch}
        showMenu={showMenu}
        style={`md:hidden absolute text-center top-44 bg-black sm:flex sm:${
          showMenu ? `flex-col` : `hidden`
        } sm:items-center sm:justify-center text-2xl`}
      />
    </div>
  );
};

export default Header;
