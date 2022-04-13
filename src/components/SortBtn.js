import React, { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/solid';
import Tooltip from './Tooltip';
import NavBtn from './NavBtn';

function SortBtn({
  isAscending,
  sortHandler,
  filterHandler,
  resetDataHandler,
  resultData,
  sortByOceaniaRegion,
  searchedValue,
}) {
  const [displayTip, setDisplayTip] = useState(false);
  return (
    <div className='flex flex-col mb-2 mt-4'>
      <div className='flex flex-wrap gap-2 items-center '>
        <div className='relative flex items-center gap-2'>
          <p>Sort By </p>
          <button
            onClick={sortHandler}
            type='button'
            className='p-2 border-2 border-gray-100 w-36 bg-gray-600 rounded-md shadow'>
            {!isAscending && 'Ascending'}
            {isAscending && 'Descending'}
            <span
              onClick={() => {
                displayTip ? setDisplayTip(false) : setDisplayTip(true);
              }}
              className='ml-2 inline-block mb-[-0.2rem]  '>
              <InformationCircleIcon className='h-4  ' />
            </span>
          </button>

          {displayTip && <Tooltip text={'Only sorts by country name'} />}
        </div>

        <NavBtn onClick={sortByOceaniaRegion} text={'Oceania Region'} />

        {resultData.length >= 1 &&
          resultData !== undefined &&
          searchedValue !== '' && (
            <NavBtn onClick={filterHandler} text={'Filters'} />
          )}

        <NavBtn onClick={resetDataHandler} text={'Reset'} />
      </div>
    </div>
  );
}

export default SortBtn;
