import React from 'react';

function Lists({ data, customStyles }) {
  if (!data) return <div className='text-center'>Country not found</div>;
  return (
    <div
      key={data.name}
      className={`rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center justify-center space-x-10 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 ${customStyles}`}>
      <div className=' w-48'>
        <div className=' text-md '>{data.name}</div>
      </div>
      <div className='w-48'>
        <p className='text-sm font-medium text-gray-900'>
          Region: {data.region}
        </p>
        <p className='text-sm text-gray-500 truncate'>Area Size: {data.area}</p>
      </div>
    </div>
  );
}

export default Lists;
