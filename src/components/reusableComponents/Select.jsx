/* eslint-disable react/prop-types */

const Select = ({ style, data }) => {
  const countriesArray = data.split(', ');
  return (
    <div className='mr-6'>
      <select
        name='Currency Selector'
        className={`${style} border-none focus:outline-none w-32`}
      >
        {countriesArray.map((item, index) => (
          <option
            className='hover:text-white py-4 my-4'
            value={item}
            key={index}
          >{`${item}`}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
