import React from 'react';
import SearchResult from './SearchResult';

function List({
  data,
  isLoading,
  resultData,
  results,
  searchedValue,
  setResultData,
  setIsFilterOptionsOpen,
}) {
  if (isLoading)
    return (
      <div className='flex justify-center items-center tex-xl mt-20'>
        <div>Loading... </div>
      </div>
    );

  return (
    <div className='grid grid-cols-1 gap-4 mt-2 '>
      {results && (
        <>
          {!resultData && (
            <div className='text-xs text-gray-400'>
              Select from Search Results{' '}
            </div>
          )}
          {resultData && (
            <div className='text-xs text-gray-400'>
              Current Selected Country (Top Result)
            </div>
          )}
          <SearchResult
            data={resultData}
            setResultData={setResultData}
            customStyles={`border-green-500`}
            textArea={'Area'}
            searchedValue={searchedValue}
          />
          <hr className='border w-2/3 border-gray-200 mx-auto' />
        </>
      )}
      <div className='text-xs text-gray-400 '>List of Countries </div>
      {data.map((country) => (
        <div
          key={country.name}
          className=' rounded-lg shadow border border-gray-300 bg-white px-6 py-3  flex items-center justify-center space-x-10'>
          <div className=' w-96 mx-auto'>
            <div className=' text-md '>{country.name}</div>
          </div>
          <div className='w-96 mx-auto'>
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
