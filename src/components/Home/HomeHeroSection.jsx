// import React from 'react'

const HomeHeroSection = () => {
  return (
    <div className='w-full h-full'>
      <video muted loop autoPlay playsInline>
        <source
          src='https://cdn.shopify.com/videos/c/o/v/89363ed547964923b1371c3d08d13dc7.mp4'
          type='video/mp4'
          className='h-[90vh]'
        />
      </video>
    </div>
  );
};

export default HomeHeroSection;
