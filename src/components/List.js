import React from 'react';

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
];

function List({ data }) {
  console.log({ data });
  return (
    <div className='grid grid-cols-1 gap-4 mt-5 '>
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
          {/* // - data is not useful */}
          {/* <div className='text-sm'>
            {country.independent === false && (
              <span className='text-red-500'>
                Not <br /> Independant
              </span>
            )}
            {country.independent === true && (
              <span className='text-green-500'>'Independant'</span>
            )}
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default List;
