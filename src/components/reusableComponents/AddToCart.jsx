/* eslint-disable react/prop-types */
// import React from 'react'

const AddToCart = ({text, style}) => {
  return (
    <button
      type='button'
      className={style}
    >
      {text}
    </button>
  );
}

export default AddToCart