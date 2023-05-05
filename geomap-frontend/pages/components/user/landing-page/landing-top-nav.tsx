import React from "react";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import logo from './images/app-logo.jpg'
function TopNav() {
  return (
    <div className=" fixed top-0 left-0 right-0 w-full z-40 bg-gradient-to-b from-cyan-400 to-teal-400 ">
      <nav className=" border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-2 px-4 ">
          <div className="flex items-center space-x-2">
            <div className="max-[480px]:w-11 h-9 sm:w-12 sm:h-11 md:w-19  ">
               <Image src={logo} alt="My Image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} className="rounded-xl"/>
            </div>
            
            <span className="self-center whitespace-nowrap dark:text-white max-[480px]:text-base font-semibold sm:text-lg md:text-2xl md:font-bold">
              Geohazard Map
            </span>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="  hover:underline  text-white max-[480px]:text-base md:text-xl "
            >
              <FaUser className="inline-block mr-1 text-white" />
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav className="">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center ">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm sm:space-x-9 ">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline  max-[480px]:text-sm sm:text-base "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline max-[480px]:text-sm sm:text-base "
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline max-[480px]:text-sm sm:text-base "
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline max-[480px]:text-sm sm:text-base "
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopNav;
