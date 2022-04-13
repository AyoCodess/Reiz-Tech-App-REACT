import React from 'react';

function FilterOptions({ resultData, searchByAreaHandler }) {
  if (resultData.length === 0) return;
  return (
    <div className=' flex flex-col gap-2 mt-8'>
      <div className='text-sm'>Filter Options:</div>
      <button
        onClick={searchByAreaHandler}
        className='border-2 border-gray-400 bg-gray-600 rounded-md p-1 '
        type='button'>{`Countries smaller than ${resultData[0].name} by area`}</button>
    </div>
  );
}

export default FilterOptions;
