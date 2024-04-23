// import React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa6';
import { FaApple } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';

const Signup = () => {
  const [signup, setSignup] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setSignup({
      ...signup,
      [name]: value,
    });
  }

  const signupData = (e) => {
    e.preventDefault();
    console.log(signup);

    setSignup({
      name: '',
      email: '',
      phone: '',
      password: '',
    });
  };
  return (
    <section className='bg-[#1f1f1f] w-full h-full'>
      <div className='flex items-center justify-center  py-6'>
        <div className='lg:w-2/5 sm:w-11/12 border flex flex-col items-center justify-center my-4 lg:px-12 md:px-20 sm:px-2 pt-8 pb-12 bg-white'>
          <img
            src='/images/S8UL_logo.avif'
            className=' w-16 h-8 invert'
            alt=''
          />
          <h1 className='text-5xl font-[800] font-oswald py-6'>New Account</h1>
          <p className='text-xl font-medium font-avenir pb-2 text-center'>
            Already have an account ?{' '}
            <Link to='/login' className='text-blue-500 hover:underline'>
              Sign in
            </Link>
          </p>
          <form
            action=''
            className='flex flex-col items-center justify-center w-full'
            onSubmit={signupData}
          >
            <input
              placeholder='Name*'
              className='border-2 border-black bg-transparent text-lg font-medium font-avenir my-2 py-3 px-4 focus:outline-none placeholder:text-red-700 w-full'
              type='text'
              name='name'
              id='name'
              value={signup.name}
              onChange={handleChange}
            />
            <input
              placeholder='Email*'
              className='border-2 border-black bg-transparent text-lg font-medium font-avenir my-2 py-3 px-4 focus:outline-none placeholder:text-red-700 w-full'
              type='email'
              name='email'
              id='email'
              value={signup.email}
              onChange={handleChange}
            />
            <input
              placeholder='Phone*'
              className='border-2 border-black bg-transparent text-lg font-medium font-avenir my-2 py-3 px-4 focus:outline-none placeholder:text-red-700 w-full'
              type='number'
              name='phone'
              id='phone'
              value={signup.phone}
              onChange={handleChange}
            />
            <input
              placeholder='Password*'
              className='border-2 border-black bg-transparent text-lg font-medium font-avenir my-2 py-3 px-4 focus:outline-none placeholder:text-red-700 w-full'
              type='password'
              name='password'
              id='password'
              value={signup.password}
              onChange={handleChange}
            />
            <input
              type='submit'
              className='border-2 border-black bg-transparent text-black text-xl font-avenir font-semibold my-2 py-2 focus:outline-none w-full'
              value='Register'
            />
          </form>
          <div className='flex items-center justify-between w-full my-6'>
            <div className='flex-1 border-b border-slate-500'></div>
            <p className='px-2 font-avenir font-medium text-lg text-slate-700'>
              or continue with
            </p>
            <div className=' flex-1 border-b border-slate-500'></div>
          </div>
          <div className='flex py-4'>
            <FaGoogle className='w-14 h-14 border text-white bg-black py-4 px-4 mx-3 rounded-full' />
            <FaApple className='w-14 h-14 border text-white bg-[#1f1f1f] py-4 px-4 mx-3 rounded-full' />
            <FaFacebook className='w-14 h-14 border text-white bg-[#1f1f1f] py-4 px-4 mx-3  rounded-full' />
          </div>
        </div>
        <div className='lg:w-2/5 sm:w-0 lg:block sm:hidden h-[47.3rem] border object-cover text-center'>
          <p className='absolute w-[30%] lg:block sm:hidden top-80 right-60 text-lg font-avenir font-[500]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            voluptatibus quod alias. Distinctio ad neque tenetur fugiat possimus
            ipsam facilis, Omnis voluptatibus quod alias. Distinctio ad neque
            tenetur fugiat possimus ipsam facilis
          </p>
          <img
            src='https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Login page image'
            className='h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default Signup;
