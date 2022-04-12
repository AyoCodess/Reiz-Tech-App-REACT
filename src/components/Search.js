import React from 'react';

function Search() {
  return (
    <div className='mt-10'>
      <label htmlFor='search' className='block   text-white'>
        Search for a country...
      </label>
      <div className='mt-1 relative flex items-center'>
        <input
          type='text'
          name='search'
          id='search'
          className='p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 border-2 border-gray-300 rounded-md'
        />
      </div>
    </div>
  );
}

export default Search;
