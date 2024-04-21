/* eslint-disable react/prop-types */
// import React from 'react'
import { NavLink } from 'react-router-dom'

const Size = ({size}) => {
  return (
    <NavLink to="#" className={({isActive})=>`${isActive ? 'bg-[#1F1F21] text-white' : 'text-[#1F1F21] bg-transparent'} text-base font-avenir mt-2 mr-1 mb-1 py-2 px-6 rounded-3xl`}>{size}</NavLink>
  )
}

export default Size