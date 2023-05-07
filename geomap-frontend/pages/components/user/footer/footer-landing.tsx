import React from 'react'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'

function FooterLanding() {
  return (
    <footer className='w-screen h-auto bg-lime-300 mt-4'>
      <div className='w-full flex max-sm: flex-col items-center justify-between'>
        <div className='max-sm: w-full h-20 md:w-1/2 '>
          <h1 className='p-4  max-md:text-lg font-semibold md:font-bold'>Follow us:</h1>
          <div className='flex flex-row justify-start max-md:items-center px-4 space-x-4'>
              <a href="#">
                <FaFacebook/>
              </a>
              <a href="#">
                <FaInstagram/>
              </a>
              <a href="#">
                <FaGithub />
              </a>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center w-screen bg-slate-400'>
        <p>&copy; 2023 Smile Alabel. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default FooterLanding