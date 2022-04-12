import React from 'react';
import logo from '../assets/images/logo-inline@2x.webp';
import ukraine from '../assets/images/flag-of-ukraine.jpeg';

function Header() {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between'>
        <div>
          <img className='w-16' src={logo} alt='reiz-tech logo' />
        </div>
        <div className=' p-2 border bg-white text-gray-500  text-center rounded-md'>
          Find Your Country App
        </div>
      </div>
      <div className='flex  gap-2 justify-end mt-4'>
        <div>We Support</div>
        <img className='w-10' src={ukraine} alt='ukraine flag' />
      </div>
    </div>
  );
}

export default Header;
