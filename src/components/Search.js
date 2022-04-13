import React from 'react';

function Search({
  setSearchedValue,
  searchedValue,
  onChange,
  setIsFilterOptionsOpen,
}) {
  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      setSearchedValue(event.target.value);
      onChange(searchedValue);
    }
  };

  return (
    <div className='mt-5'>
      <label htmlFor='search' className='block   text-white'>
        Search for a country for more options...
      </label>
      <div className='mt-1 relative flex items-center'>
        <input
          type='text'
          autoComplete='off'
          placeholder='Search for a country'
          value={searchedValue}
          onKeyDown={(event) => keyDownHandler(event)}
          onChange={(event) => {
            if (event.target.value !== '') {
              setSearchedValue(event.target.value);
              onChange(searchedValue);
            } else {
              setIsFilterOptionsOpen(false);
              setSearchedValue(event.target.value);
              onChange(searchedValue);
            }
          }}
          name='search'
          id='search'
          className=' text-black p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 border-2 border-gray-300 rounded-md'
        />
      </div>
    </div>
  );
}

export default Search;
