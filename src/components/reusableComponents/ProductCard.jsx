/* eslint-disable react/prop-types */

const ProductCard = ({ url, title, price }) => {
  return (
    <div className='w-[19rem] h-auto flex flex-col mr-[2.3rem] my-6'>
      <div className='bg-white overflow-hidden'>
        <img
          src={url}
          alt={title}
          className='hover:transform hover:scale-110 transition-transform duration-300'
          title=''
        />
      </div>
      <div className='font-oswald ml-4 my-4 text-xl font-medium'>
        <h2 className='hover:underline'>{title}</h2>
        <p>{`Rs. ${price}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
