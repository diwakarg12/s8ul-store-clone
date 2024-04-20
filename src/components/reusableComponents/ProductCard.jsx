/* eslint-disable react/prop-types */

const ProductCard = ({ url, title, price, style2 }) => {
  return (
    <div className='lg:w-[19rem] md:w-[18rem] sm:w-[12rem] h-auto flex flex-col md:mr-[2.3rem] sm:px-2 my-6'>
      <div className='bg-white overflow-hidden'>
        <img
          src={url}
          alt={title}
          className='hover:transform hover:scale-110 transition-transform duration-300'
          title=''
        />
      </div>
      <div className={`font-oswald ml-4 my-4 md:text-xl sm:text-base font-medium ${style2}`}>
        <h2 className={`hover:underline truncate`} title={title}>
          {title}
        </h2>
        <p>{`Rs. ${price}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
