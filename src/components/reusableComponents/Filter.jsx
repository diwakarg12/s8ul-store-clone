// import React from 'react'
import Select from '../reusableComponents/Select';
import { shortby } from '../../utilities/SelectData';

const Filter = () => {
  return (
    <div>
      <div className='w-11/12 absolute flex justify-between ml-12'>
        <p className='flex mt-10 font-avenir text-base'>
          <svg
            className='w-6 h-6 mr-2'
            aria-hidden='true'
            focusable='false'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path
              fillRule='evenodd'
              d='M4.833 6.5a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0ZM4.05 7H2.5a.5.5 0 0 1 0-1h1.55a2.5 2.5 0 0 1 4.9 0h8.55a.5.5 0 0 1 0 1H8.95a2.5 2.5 0 0 1-4.9 0Zm11.117 6.5a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0ZM13.5 11a2.5 2.5 0 0 1 2.45 2h1.55a.5.5 0 0 1 0 1h-1.55a2.5 2.5 0 0 1-4.9 0H2.5a.5.5 0 0 1 0-1h8.55a2.5 2.5 0 0 1 2.45-2Z'
              fill='currentColor'
            ></path>
          </svg>
          Filter
        </p>
        <p className='flex font-avenir text-base mt-10'>
          Short by : <Select style={'bg-white text-[#1f1f1f]'} data={shortby} />
        </p>
      </div>
    </div>
  );
}

export default Filter