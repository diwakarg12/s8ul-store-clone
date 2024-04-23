/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

const Search = ({ onClose }) => {
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={searchRef} className='w-full flex items-center justify-center'>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search anything.....'
        title='Search Here'
        className='border-2 border-black bg-transparent text-slate-300 text-lg font-medium font-avenir my-2 py-3 px-4 focus:outline-none placeholder:text-slate-400 w-4/5'
      />
      <button
        onClick={onClose}
        title='close'
        className='absolute top-[5.5rem] right-[47%] px-3 py-2 text-white text-2xl font-extrabold focus:outline-none'
      >
        <IoMdClose />
      </button>
    </div>
  );
};

export default Search;
