import React from 'react';

function Landslide() {
  return (
    <div className='-z-50 flex flex-col justify-start items-center space-y-5 max-md:w-screen top-20 max-md:left-0 absolute h-auto md:w-10/12 md:relative md:h-auto left-40 lg:left-44 lg:top-24'>
      <div className='w-full bg-green-500 max-md:h-screen md:h-4/5'>
        {/* Content */}
      </div>
      <div className='w-full'>
        <h1 className=' font-bold text-gold-dark underline max-md:text-lg max-md:text-center md:text-2xl text-left'>Danger Legend</h1>
      </div>
      <div className=' bg-slate-300 rounded-md shadow-md w-11/12 m-0 flex justify-center items-center max-md:h-40 flex-col space-y-3 md:h-28 md:flex-row md:space-x-3 '>
        {/* Content */}
        <div className='  items-center flex md:w-2/5 md:flex-col md:h-5/6 max-md:w-11/12 h-1/3 flex-row '>
          <div className=' flex items-center max-md:w-1/2 flex-row space-x-2 md:flex-row h-1/2 md:w-full'>
              <div className='bg-red-800 border border-red-900 max-md:w-5 h-5 md:w-1/4 md:h-1/2 '></div>
              <h3 className='text-black font-semibold max-md: text-sm md:text-lg uppercase'>Very High Risk</h3>
          </div> 
          <div className=' flex items-center max-md:w-1/2 flex-row space-x-2 md:flex-row h-1/2 md:w-full'>
              <div className='max-md:w-5 h-5 bg-orange-600 border border-orange-700 md:w-1/4 md:h-1/2'></div>
              <h3 className='text-black font-semibold max-md: text-sm md:text-lg uppercase'>Moderate Risk</h3>
          </div>
        </div>
        <div className='  items-center flex md:w-2/5 md:flex-col md:h-5/6 max-md:w-11/12 h-1/3 flex-row '>
          <div className=' flex items-center  max-md:w-1/2 flex-row space-x-2 md:flex-row h-1/2 md:w-full'>
              <div className='max-md:w-5 h-5 bg-green-700 border border-green-900 md:w-1/4 md:h-1/2 '></div>
              <h3 className='text-black font-semibold max-md: text-sm md:text-lg uppercase'>Low Risk</h3>
          </div> 
          <div className=' w-1/2 flex items-center max-md:flex-row space-x-2 md:flex-col h-1/2'>
              
          </div>
        </div>

      </div>
    </div>
  );
}

export default Landslide;
