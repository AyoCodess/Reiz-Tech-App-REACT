import React from 'react';
import FilterOptions from './FilterOptions';
import Header from './Header';
import Search from './Search';
import SortBtn from './SortBtn';

function Navbar({
  sortHandler,
  isAscending,
  filterHandler,
  isFilterOptionsOpen,
  setIsFilterOptionsOpen,
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
          setIsFilterOptionsOpen={setIsFilterOptionsOpen}
        />
        <SortBtn
          isAscending={isAscending}
          sortHandler={sortHandler}
          filterHandler={filterHandler}
          setDataReset={setDataReset}
          resetDataHandler={resetDataHandler}
          resultData={resultData}
          sortByOceaniaRegion={sortByOceaniaRegion}
          isFilterOptionsOpen={isFilterOptionsOpen}
          searchedValue={searchedValue}
        />
        {isFilterOptionsOpen && (
          <FilterOptions
            resultData={resultData}
            searchByAreaHandler={searchByAreaHandler}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
