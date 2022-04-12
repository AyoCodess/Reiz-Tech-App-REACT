import React from 'react';

function FilterOptions({ selectedCountry, onClick }) {
  return (
    <div className='mt-4'>
      <button
        onClick={onClick}
        className='border-2 border-gray-400 rounded-md p-1 '
        type='button'>{`Countries smaller than ${selectedCountry} by area`}</button>
    </div>
  );
}

export default FilterOptions;
