// import React from 'react'

import ContactForm from "./reusableComponents/ContactForm";

const Contact = () => {
  return (
    <div className='w-full'>
      <h1 className='text-7xl  font-semibold pb-12 pt-2 font-oswald text-[#1F1F21] bg-white lg::pl-[23rem] md:pl-16 sm:pl-6 '>
        Contact us
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
