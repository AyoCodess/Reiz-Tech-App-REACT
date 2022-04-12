import React from 'react';

function Search({ onChange }) {
  return (
    <div className='mt-10'>
      <label htmlFor='search' className='block   text-white'>
        Search for a country for more options...
      </label>
      <div className='mt-1 relative flex items-center'>
        <input
          type='text'
          onChange={(event) => onChange(event.target.value)}
          name='search'
          id='search'
          className=' text-black p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 border-2 border-gray-300 rounded-md'
        />
      </div>
    </div>
  );
}

export default Search;
