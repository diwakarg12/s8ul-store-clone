// import React from 'react'

import ContactForm from "./reusableComponents/ContactForm";

const Contact = () => {
  return (
    <div className='w-full'>
      <h1 className='text-7xl font-semibold pb-12 pt-2 font-oswald text-[#1F1F21] bg-white pl-[23rem]'>
        Contact us
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
