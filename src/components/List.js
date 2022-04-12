import React from 'react';
import Lists from './Lists';

function List({
  data,
  isLoading,
  selectedCountry,
  setSelectedCountry,
  filteredCountries,
  resultData,
  results,
}) {
  console.log({ resultData });
  if (isLoading)
    return (
      <div className='flex justify-center items-center tex-xl mt-20'>
        <div>Loading... </div>
      </div>
    );
  return (
    <div className='grid grid-cols-1 gap-4 mt-5 '>
      {results && (
        <>
          <div className='text-xs text-gray-400'>Search Result </div>
          <Lists data={resultData} customStyles={`border-green-500`} />
          <hr className='border w-2/3 border-gray-200 mx-auto' />
        </>
      )}

      {/* {data.length === 0 && <h1>No country found.</h1>} */}

      {data.map((country) => (
        <div
          key={country.name}
          className=' rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center justify-center space-x-10 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
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
      ))}
    </div>
  );
}

export default List;
