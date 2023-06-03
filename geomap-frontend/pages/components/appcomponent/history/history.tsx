import Image from 'next/image';
import React from 'react';
import flood from '../history/img/flood.jpg'
function History() {
  return (
    <div className='bg-gray-400 -z-50 flex flex-col justify-start items-center space-y-5 max-md:w-screen top-24 max-md:left-0 absolute h-auto md:w-10/12 md:relative md:h-auto left-36 lg:left-44 lg:top-24'>
      <div className='w-11/12 flex bg-green-500 max-md:flex-col items-center h-auto md:h-40vh md:flex-row justify-start space-x-3 max-md:space-x-0'>
        <div className=' max-sm:w-11/12  max-md:h-30vh sm:w-1/2 md:w-2/5 h-full '>
            <Image 
            alt='flood'
            src={flood}
            className=' border-2 border-gray-500 md:object-cover '
            style={{objectPosition:'center', width:'100%', height:'100%'}}
            />
        </div>
        <div className='bg-blue-400 flex flex-col justify-start items-center max-sm:w-full py-5 my-4 sm:w-11/12 md:w-3/5 h-full '>
            <h2 className='max-md:text-md max-md:font-semibold md:text-2xl font-bold'>Title</h2>
            <p className=' w-11/12 indent-3 text-justify max-sm:text-xs md:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit iste vitae laboriosam fuga minima inventore mollitia, debitis nulla asperiores obcaecati quisquam officia praesentium suscipit. Reprehenderit mollitia numquam a perspiciatis!</p>
        </div>
      </div>
    
    </div>
  );
}

export default History;
