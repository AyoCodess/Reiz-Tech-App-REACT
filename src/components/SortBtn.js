import React from 'react';

function SortBtn({ isAscending, setIsAscending, onClick }) {
  console.log({ isAscending });
  return (
    <div className='flex flex-col mb-2 mt-4'>
      <div className='flex items-center gap-2'>
        <p>Sort By </p>
        <button
          onClick={onClick}
          type='button'
          className='p-2 border-2 border-gray-100 rounded-md shadow'>
          {!isAscending && 'Ascending'}
          {isAscending && 'Descending'}
        </button>
      </div>
    </div>
  );
}

export default SortBtn;
