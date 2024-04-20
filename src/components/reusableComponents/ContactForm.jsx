// import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[#1F1F21] flex flex-col items-center justify-center border w-full pb-8'>
      <form
        action=''
        className='text-base bg-transparent text-[FFFFFFBF] font-avenir flex flex-col md:w-1/2 sm:w-full pt-2 md:px-0 sm:px-2'
      >
        <div className='flex w-full'>
          <input
            type='text'
            placeholder='Name*'
            name='name'
            id=''
            className='border border-slate-400 text-white font-medium mr-4 w-1/2 p-4 bg-transparent placeholder:text-slate-300 focus:outline-white'
          />
          <input
            type='email'
            placeholder='Email*'
            name='email'
            id=''
            className='border border-slate-400 text-white font-medium ml-4 w-1/2 p-4 bg-transparent placeholder:text-slate-300 focus:outline-white'
          />
        </div>
        <input
          type='number'
          placeholder='Phone Number'
          name='phone'
          id=''
          className='appearance-none border border-slate-400 text-white font-medium mt-4 p-4 bg-transparent w-full placeholder:text-slate-300 focus:outline-white'
        />
        <textarea
          name='message*'
          id=''
          cols='30'
          rows='4'
          placeholder='message'
          className='border block p-4 border-slate-400 text-white font-medium mt-4 bg-transparent placeholder:text-slate-300 focus:outline-white'
        ></textarea>
        <button
          type='button'
          className='bg-[#e3fc02] text-black text-base font-medium font-avenir md:mt-10 sm:mt-6 w-32 h-12 text-center'
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm