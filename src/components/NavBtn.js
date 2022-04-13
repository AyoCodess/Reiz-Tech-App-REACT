import React from 'react';

function NavBtn({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className='p-2 border-2 border-gray-100 bg-gray-600 rounded-md shadow'
      type='button'>
      {text}
    </button>
  );
}

export default NavBtn;
