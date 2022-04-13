import React from 'react';

function FilterOptions({
  resultData,
  searchByAreaHandler,
  sortByOceaniaRegion,
}) {
  console.log(resultData.name);
  return (
    <div className=' flex flex-col gap-2 mt-8'>
      <div className='text-sm'>Filter Options:</div>
      <button
        onClick={searchByAreaHandler}
        className='border-2 border-gray-400 rounded-md p-1 '
        type='button'>{`Countries smaller than ${
        resultData.name ? resultData.name : resultData[0].name
      } by area`}</button>
      <button
        onClick={sortByOceaniaRegion}
        className='border-2 border-gray-400 rounded-md p-1 '
        type='button'>{`Countries in the Oceania Region`}</button>
    </div>
  );
}

export default FilterOptions;
