import Image from 'next/image';
import React from 'react';
import bg1 from './images/bg3.jpg';

function HomePageLanding() {
  return ( 
    <div className=" w-screen h-screen flex flex-col justify-center items-center ">
      
       <div className="relative w-full h-full">
        <Image
          src={bg1}
          alt="Municipal Hall"
          style={{objectFit:'cover',width:'100%',height:'100%'}}
         
        />
        
        <h1 className="font-extrabold absolute max-md:top-1/3 right-7 md:top-52 md:right-10 xl:right-48 text-black text-start max-sm:text-2xl sm:text-3xl lg:text-4xl">
          Be prepared, stay safe
        </h1>
        <h2 className='font-bold absolute text-justify max-sm:top-72 right-5 w-3/5 sm:top-80 md:top-64 py-2 md:text-lg md:w-1/2  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium,</h2>

      <button className="bg-orange-400 border border-stone-300 absolute h-auto rounded-xl text-white font-mono font-bold underline hover:bg-lime-500 hover:text-gray-700 max-sm:w-28 my-10 top-85 left-6 text-xs p-3 sm:left-16 sm:p-4 sm:top-1/2 md:left-16 lg:left-28 lg:top-1/2 lg:w-40">
        Get Started
      </button>
     </div>
     
    </div>
  );
}

export default HomePageLanding;
