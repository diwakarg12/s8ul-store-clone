// import React from 'react';

const HomeHeroSection = () => {
  return (
    <div className='sm:w-full sm:h-full'>
      <video
        muted
        loop
        autoPlay
        playsInline
        controls={false}
        className='h-[90vh] w-full object-cover'
        onError={(e) => {
          const videoElement = e.target;
          videoElement.style.display = 'none';
          const fallbackImage = document.getElementById('fallbackImage');
          fallbackImage.style.display = 'block';
        }}
      >
        <source
          src='https://cdn.shopify.com/videos/c/o/v/89363ed547964923b1371c3d08d13dc7.mp4'
          type='video/mp4'
        />
      </video>
      <img
        id='fallbackImage'
        src='https://s8ul.store/cdn/shop/files/hoodie_hero_image_edited_F_1.png?v=1699431089&width=3000' // URL to your fallback image
        alt='Fallback Image'
        className=' w-full object-cover hidden'
        // style={{ display: 'none' }} // Initially hidden
      />
    </div>
  );
};

export default HomeHeroSection;
