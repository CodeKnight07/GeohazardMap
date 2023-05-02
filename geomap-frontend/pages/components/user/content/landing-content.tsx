import Image from 'next/image'
import React from 'react'
import hall from './images/hall.jpg'
function LandingContent() {
  return (
   <div className=' w-full h-5/6 bg-white'>
     <Image 
     src={hall}
     alt='hall image'
     className='relative w-full h-full object-cover object-center opacity-90'
    
     />
     <div className='w-screen h-screen'>About</div>
   </div>
  )
}

export default LandingContent