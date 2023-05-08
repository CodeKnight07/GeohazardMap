import Image from 'next/image'
import React from 'react'
import bg1 from './images/bg1.png'
function AboutLanding() {
  return (
    <div className='w-sccreen h-9/10  flex flex-col justify-center items-center bg-white'>
      <div className=' w-11/12 h-9/10 flex flex-col items-center space-y-3'>
       

        <div className=' p-3 w-full auto flex md:flex-row md:items-start  max-sm: flex-col justify-center items-center space-x-4'>
          <div className='flex max-sm:flex-col items-start max-md:w-full  md:items-center w-2/5 h-1/2'>
              <h1 className='text-black font-extrabold max-sm:text-xl indent-3 sm:text-2xl lg:text-3xl'>About Us</h1>
          </div>
          <div className=' flex max-md:flex-row w-11/12 md:flex-col justify-end md:w-1/2 h-9/10'>
              <p className='indent-4 text-justify max-sm:text-xs sm:text-sm md:text-base lg:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos animi consequuntur nulla libero ex repellat similique, maiores, nam quod praesentium inventore ut blanditiis. At dicta nobis sint consequuntur labore facilis.</p>
          </div>
        </div>
        <div className=' w-full h-9/10 flex max-md:flex-col space-y-4 max-md:space-x-3 max-md:items-start md:flex-row justify-center items-center space-x-5'>
          <div className=' shadow-slate-700 flex flex-col shadow-2xl justify-center-center max-md:w-1/2 mx-4 max-md:h-1/3 md:w-2/5 h-9/10 '>
            <Image
            src={bg1}
            alt='image'
            style={{objectFit:'cover',objectPosition:'center', width:'100%', height:'100%'}}
            />
          </div>
          <div className=' space-y-2 h-auto text-justify flex max-md:w-11/12 flex-col items-start md:w-1/2'>
              <p className='py-3 max-sm:text-xs indent-4 mt-3 sm:text-sm md:text-base lg:text-lg lg:indent-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi expedita unde molestiae ullam quae dignissimos 
                eligendi iusto voluptate voluptatem tenetur, tempore numquam itaque rem doloremque, blanditiis labore eveniet commodi nesciunt.</p>
              <p className='py-3 max-sm:text-xs indent-4 sm:text-sm md:text-base lg:text-lg lg:indent-10'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam voluptatem, quis architecto repellat commodi quia culpa magnam modi corporis, possimus aliquid veniam debitis necessitatibus minima sed libero sit quod minus!
              </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutLanding