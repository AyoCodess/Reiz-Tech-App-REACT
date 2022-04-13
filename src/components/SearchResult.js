import React from 'react';

function SearchResult({ data, customStyles, searchedValue, setResultData }) {
  if (!data || searchedValue === '' || data.length === 0)
    return <div className='text-center'>Country not found</div>;
  return (
    <>
      {data.map((country) => {
        return (
          <div
            // - select country in filtered list
            onClick={() => {
              data.find((dataCountry) => {
                if (country.name === dataCountry.name) {
                }

                return setResultData([country]);
              });
            }}
            key={country.name}
            className={`rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center justify-center space-x-10 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 cursor-pointer ${customStyles}`}>
            <div className=' w-48'>
              <div className=' text-md '>{country.name}</div>
            </div>
            <div className='w-48'>
              <p className='text-sm font-medium text-gray-900'>
                Region: {country.region}
              </p>
              <p className='text-sm text-gray-500 truncate'>
                Area Size: {country.area}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SearchResult;
