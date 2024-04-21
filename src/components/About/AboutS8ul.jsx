// import React from 'react'
import AddToCart from '../reusableComponents/AddToCart'

const AboutS8ul = () => {
  return (
    <div className='bg-[#1F1F21] pt-12 pb-24 flex flex-col items-center justify-center w-full'>
      <div className='bg-transparent text-[#FFFFFFBF] md:w-1/2 sm:w-full md:text-center sm:text-start  md:px-0 sm:pl-4 '>
        <h1 className='md:text-6xl sm:text-5xl font-oswald text-white pb-8'>
          About S8UL Store
        </h1>
        <h4 className='text-base font-avenir mb-4'>
          Welcome to S8ul Gaming Merch - Your Ultimate Destination for Gaming
          Lifestyle
        </h4>
        <p className='text-lg font-avenir my-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          voluptates ducimus iste laborum. Exercitationem quam nobis ipsa
          expedita facere, praesentium aut minus adipisci possimus. Enim
          consectetur quam mollitia. Doloribus, quasi possimus minima amet
          ratione porro ad iusto illum ipsam repudiandae aperiam dolor
          perferendis atque eius veritatis assumenda quam blanditiis eveniet!
        </p>
        <h3 className='text-lg font-avenir font-semibold'>What we Offer:</h3>
        <p className='text-lg font-avenir my-3'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et labore
          aspernatur in nostrum voluptates molestiae aperiam blanditiis omnis
          saepe! Accusamus amet nostrum nesciunt et reiciendis repellat? Neque
          debitis, deleniti expedita quidem repellendus hic sit magnam, dicta
          accusantium consequuntur aspernatur, voluptatibus libero cupiditate
          voluptates deserunt! Eveniet aut voluptatibus culpa dolorum a.
        </p>
        <h4 className='text-lg font-avenir mt-4 mb-5'>
          Thank you for Choosing S8ul Gaming Merch - Where Gaming Comes to life!
        </h4>
        {/* <div className=" flex items-center justify-around"> */}
        {/* <button
          type='button'
          className='bg-[#e3fc02] text-[#1F1F21BF] py-2 px-4 mr-4'
        >
          Follow on instagram
        </button> */}
        <AddToCart
          text='Follow on instagram'
          style='bg-[#e3fc02] text-[#1F1F21BF] py-2 px-4 mr-4'
        />
        <AddToCart
          text=' Follow on Youtube'
          style='bg-[#e3fc02] text-[#1F1F21BF] py-2 px-4 ml-4'
        />
        {/* <button
          type='button'
          className='bg-[#e3fc02] text-[#1F1F21BF] py-2 px-4 ml-4'
        >
          Follow on Youtube
        </button> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default AboutS8ul;
