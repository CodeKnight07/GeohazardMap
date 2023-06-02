import React from 'react';

function Landslide() {
  return (
    <div className='top-20 -z-50 flex flex-col justify-start items-center space-y-5 max-md:w-screen max-md:left-0 absolute h-auto md:w-10/12 md:relative md:h-auto left-40 lg:left-44'>
      <div className='w-full bg-green-500 max-md:h-screen md:h-4/5'>
        {/* Content */}
      </div>
      <div className='w-11/12 bg-red-500 max-md:h-28 md:h-16'>
        {/* Content */}
      </div>
    </div>
  );
}

export default Landslide;
