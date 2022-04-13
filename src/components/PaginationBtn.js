import React from 'react';

function PaginationBtn({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      type='button'
      className='py-1 px-2 bg-gray-500 text-white rounded-md shadow'>
      {title}
    </button>
  );
}

export default PaginationBtn;
