import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {MdArrowForwardIos} from 'react-icons/md'
function LandingNav() {
    const [isSmallDevice, setIsSmallDevice] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);


 

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth <=640 ){
        setIsSmallDevice(true)
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(false);
      }
      else if (640<=screenWidth && screenWidth <= 768) {
        setIsSmallDevice(false)
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);

      } else if (screenWidth >= 768 && screenWidth < 1024) {
        setIsMobile(false);
        setIsTablet(true);
        setIsDesktop(false);
      } else {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="fixed bg-gradient-to-br from-green-500 via-blue-400 to-purple-500">
      {isSmallDevice && (
        <div className=" w-screen h-16 flex flex-row justify-start items-center">
          <div className=" w-3/5 h-full flex flex-row justify-center items-center">
            <div>Company Name</div>
          </div>
          <div className=" w-36 h-auto flex flex-row justify-end items-start">
            <button className="bg-green-500 px-3 py-1 rounded-md text-sm hover:bg-emerald-700" >
              Sign In
            </button>
          </div>
        </div>
      )}

      {isMobile && <div></div>}
      {isTablet && <div>Tablet Navigation</div>}
      {isDesktop && <div>Desktop Navigation</div>}
    </nav>
  );
  }    
export default LandingNav;