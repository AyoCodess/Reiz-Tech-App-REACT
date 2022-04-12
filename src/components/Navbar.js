import React, { useState } from 'react';
import FilterOptions from './FilterOptions';
import Header from './Header';
import Search from './Search';
import SortBtn from './SortBtn';

function Navbar({
  sortHandler,
  isAscending,
  setIsAscending,
  filterHandler,
  isFilterOptionsOpen,
  setIsFilterOptionsOpen,
  selectedCountry,
  sortRegionHandler,
  setDataReset,
  resetDataHandler,
}) {
  return (
    <div className='container mx-auto p-4 bg-gray-500 text-white shadow-md rounded-md '>
      <div className=' p-2'>
        <Header />
        <Search />
        <SortBtn
          isAscending={isAscending}
          setIsAscending={setIsAscending}
          sortHandler={sortHandler}
          filterHandler={filterHandler}
          selectedCountry={selectedCountry}
          sortRegionHandler={sortRegionHandler}
          setDataReset={setDataReset}
          resetDataHandler={resetDataHandler}
        />
        {isFilterOptionsOpen && (
          <FilterOptions selectedCountry={selectedCountry} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
