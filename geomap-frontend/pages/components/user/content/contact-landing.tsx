import Image from 'next/image'
import React from 'react'
import contact from '../landing-page/images/contact.jpg'
function ContactLanding() {
  return (
    <div className='bg-white w-screen max-md:h-auto md:h-9/10 flex flex-col justify-center items-center'>
        <div className='bg-blue-500 flex max-md:w-11/12 max-md:flex-col max-md:h-auto md: w-4/5 h-5/6 md:flex-row lg:w-2/3'>
            <div className=' border-none max-md:h-60 md:w-1/2 h-full'>
              <Image
              src={contact}
              alt='contact'
              style={{objectFit:'cover',objectPosition:'center', width:'100%', height:'100%'}}
              />
            </div>
            <div className='bg-slate-500 flex justify-center items-center max-md:h-4/6 py-5 md:w-1/2 h-full'>
           
                <form action="" className='w-11/12 flex flex-col justify-center items-center space-y-3 md: '>
                    <h1 className='text-white font-extrabold max-sm:text-xl sm:text-2xl lg:text-3xl'>Contact Us </h1>
                    <input type="text" placeholder='Enter Your Name' className='pl-6 max-md:w-11/12 p-2 rounded-2xl md: w-10/12' />
                    <input type="email" placeholder='Enter Your Email Address' className='pl-6 max-md:w-11/12 p-2 rounded-2xl md: w-10/12' />
                    <textarea name="concern" id="concern" placeholder='Say something ....' rows={6} className='pl-4 rounded-xl max-md:w-11/12 md: w-10/12'></textarea>
                    <button className='bg-yellow-300 max-md:px-6 py-2 w-2/5 rounded-lg'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactLanding