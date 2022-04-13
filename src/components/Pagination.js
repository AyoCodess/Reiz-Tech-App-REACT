import React from 'react';
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
        <nav className='absolute bottom-[-8rem] left-3 max-w-[25rem]  flex flex-wrap items-center gap-1 mt-4 pb-3'>
          {/* // - hides next and prev buttons when there is less 5 page numbers to be displayed in the UI  */}
          {pageNumbers.length !== numberOfPageNumbersDisplayed && (
            <PaginationBtn
              title={'Previous'}
              onClick={() => {
                if (currentPage > 1) {
                  paginate(currentPage - 1);
                }
              }}
            />
          )}
          <p className='py-1 px-2 bg-gray-400 text-white shadow rounded-md'>
            Page {currentPage}
          </p>
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
          {pageNumbers.length !== numberOfPageNumbersDisplayed && (
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
          )}
        </nav>
      )}
    </>
  );
};

export default Pagination;
