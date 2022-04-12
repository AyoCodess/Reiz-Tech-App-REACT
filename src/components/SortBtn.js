import React from 'react';

function SortBtn({
  isAscending,
  setIsAscending,
  sortHandler,
  filterHandler,
  selectedCountry,
  sortRegionHandler,
  resetDataHandler,
  resultData,
}) {
  return (
    <div className='flex flex-col mb-2 mt-4'>
      <div className='flex flex-wrap gap-2 items-center '>
        <div className='flex items-center gap-2'>
          <p>Sort By </p>
          <button
            onClick={sortHandler}
            type='button'
            className='p-2 border-2 border-gray-100 rounded-md shadow'>
            {!isAscending && 'Ascending'}
            {isAscending && 'Descending'}
          </button>
        </div>
        <div className='flex items-center'>
          <button
            onClick={sortRegionHandler}
            type='button'
            className='p-2 border-2 border-gray-100 rounded-md shadow'>
            Region
          </button>
        </div>
        {selectedCountry !== 'COUNTRY' ||
          (resultData && (
            <div className='flex items-center'>
              <button
                onClick={filterHandler}
                type='button'
                className='p-2 border-2 border-gray-100 rounded-md shadow'>
                filters
              </button>
            </div>
          ))}
        <div className='flex items-center '>
          <button
            onClick={resetDataHandler}
            type='button'
            className='p-2 border-2 border-gray-100 rounded-md shadow'>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default SortBtn;
