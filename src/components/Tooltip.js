import React from 'react';

function Tooltip({ text, customStyles }) {
  return (
    // - parent element needs to be set as relative
    <div
      className={` absolute top-[-4rem] w-48 left-[3.8rem]
          text-sm bg-white text-gray-700 border border-gray-300 p-2 rounded-md shadow-lg ${customStyles}`}>
      Only sorts by country name
    </div>
  );
}

export default Tooltip;
