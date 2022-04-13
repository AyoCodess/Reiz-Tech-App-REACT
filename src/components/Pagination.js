import React, { useState } from 'react';
import PaginationBtn from './PaginationBtn';

const Pagination = ({
  countriesPerPage,
  totalCountries,
  paginate,
  currentPage,
  isLoading,
  data,
}) => {
  let pageNumbers = [];
  let numberOfPageNumbersDisplayed = 4;

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log({ data });

  //   Array.from(
  //     { length: Math.ceil(totalCountries / countriesPerPage) },
  //     (x, v) => v + 1
  //   );

  // - dynamically re-renders page numbers based on where the user is
  let numbersArray = pageNumbers.slice(
    currentPage,
    currentPage + numberOfPageNumbersDisplayed
  );

  // - resets pagination
  if (currentPage === pageNumbers.length) {
    numbersArray = pageNumbers.slice(0, numberOfPageNumbersDisplayed);
  }

  return (
    <>
      {!isLoading && data.length > 10 && (
        <div className=' flex flex-wrap items-center justify-between w-full'>
          <nav className='max-w-[22rem]  flex items-center gap-1'>
            <PaginationBtn
              title={'Previous'}
              onClick={() => {
                if (currentPage > 1) {
                  paginate(currentPage - 1);
                }
              }}
            />
            <ul className='flex flex-row  mx-auto flex-wrap gap-1 justify-between p-2 '>
              {numbersArray.map((number, i) => {
                return (
                  <li
                    key={number}
                    className='border-2 p-1 w-8 text-center rounded-md '>
                    <div
                      onClick={() => {
                        paginate(number);
                      }}
                      className='text-gray-500'>
                      {number}
                    </div>
                  </li>
                );
              })}
            </ul>
            <PaginationBtn
              title={'Next'}
              onClick={() => {
                if (
                  currentPage <
                  pageNumbers.length - numberOfPageNumbersDisplayed
                )
                  paginate(currentPage + 1);
              }}
            />
          </nav>
          <p className='py-1 px-2 bg-gray-400 text-white shadow rounded-md'>
            Page {currentPage}
          </p>
        </div>
      )}
    </>
  );
};

export default Pagination;
