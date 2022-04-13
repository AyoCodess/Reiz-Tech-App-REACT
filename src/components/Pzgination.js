import React, { useEffect } from 'react';

const Pagination = ({
  countriesPerPage,
  totalCountries,
  paginate,
  currentPage,
  setPageNumbers,
  data,
}) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  let pageArray = pageNumbers.slice(currentPage, currentPage + 5);

  //   // - resets the pagination
  //   if (currentPage === 25) {
  //     pageArray = pageNumbers.slice(1, 6);
  //   }

  return (
    <nav className='max-w-[20rem] mx-auto flex items-center gap-1'>
      <button onClick={() => {}} type='button'>
        Previous
      </button>
      <ul className='flex flex-row mx-auto flex-wrap gap-1 justify-between p-2 '>
        {pageArray.map((number) => {
          return (
            <li key={number} className='border-2 p-1 rounded-md '>
              <div onClick={() => paginate(number)} className='text-gray-500'>
                {number}
              </div>
            </li>
          );
        })}
      </ul>
      <button type='button' onClick={() => {}}>
        Next
      </button>
    </nav>
  );
};

export default Pagination;
