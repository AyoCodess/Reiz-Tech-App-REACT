import React, { useState } from 'react';
import Header from './Header';
import Search from './Search';
import SortBtn from './SortBtn';

function Navbar({ sortHandler, isAscending, setIsAscending }) {
  return (
    <div className='container mx-auto p-4 bg-gray-500 text-white shadow-md rounded-md '>
      <div className=' p-2'>
        <Header />
        <Search />
        <SortBtn
          isAscending={isAscending}
          setIsAscending={setIsAscending}
          onClick={sortHandler}
        />
      </div>
    </div>
  );
}

export default Navbar;
