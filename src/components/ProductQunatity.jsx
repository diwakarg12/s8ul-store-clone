import { useState } from 'react';

const ProductQunatity = () => {
  const [count, setCount] = useState(1); // Initial count value is 1

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className='mb-8 text-white flex'>
      <div
        className='w-8 h-6 flex items-center justify-center border-l border-t border-b focus:outline-none'
        onClick={decreaseCount}
      >
        -
      </div>
      <div>
        <input
          type='text'
          value={count}
          readOnly // Make the input field read-only
          className=' w-8 h-6 flex items-center justify-center border-t border-b bg-transparent focus:outline-none'
        />
      </div>
      <div
        className='w-8 h-6 flex items-center justify-center border-r border-t border-b'
        onClick={increaseCount}
      >
        +
      </div>
    </div>
  );
};

export default ProductQunatity;
