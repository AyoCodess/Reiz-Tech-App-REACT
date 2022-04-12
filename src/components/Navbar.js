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
  setDataReset,
  resetDataHandler,
  searchHandler,
  resultData,
  searchByAreaHandler,
  sortByOceaniaRegion,
  searchedValue,
  setSearchedValue,
}) {
  return (
    <div className='container mx-auto p-4 bg-gray-500 text-white shadow-md rounded-md '>
      <div className=' p-2'>
        <Header />
        <Search
          onChange={searchHandler}
          searchedValue={searchedValue}
          setSearchedValue={setSearchedValue}
        />
        <SortBtn
          isAscending={isAscending}
          setIsAscending={setIsAscending}
          sortHandler={sortHandler}
          filterHandler={filterHandler}
          selectedCountry={selectedCountry}
          setDataReset={setDataReset}
          resetDataHandler={resetDataHandler}
          resultData={resultData}
          sortByOceaniaRegion={sortByOceaniaRegion}
        />
        {isFilterOptionsOpen && (
          <FilterOptions
            selectedCountry={selectedCountry}
            resultData={resultData}
            searchByAreaHandler={searchByAreaHandler}
            sortByOceaniaRegion={sortByOceaniaRegion}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
