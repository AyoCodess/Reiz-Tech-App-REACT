import React, { useEffect } from 'react';

const Pagination = ({
  countriesPerPage,
  totalCountries,
  paginate,
  currentPage,
  pageNumbers,
  setPageNumbers,
}) => {
  useEffect(() => {
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
      setPageNumbers((prev) => [i, ...prev]);
    }
  }, []);

  console.log(pageNumbers);

  return (
    <nav>
      <ul className='flex flex-row flex-wrap gap-1 justify-between p-2 '>
        {pageNumbers.map((number, count) => {
          return count < 5 ? (
            <li key={number} className='border-2 p-1 rounded-md '>
              <a
                onClick={() => paginate(number)}
                href='!#'
                className='text-gray-500'>
                {number}
              </a>
            </li>
          ) : null;
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
