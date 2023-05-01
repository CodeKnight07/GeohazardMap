import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function LandingNav() {
    const [isSmallDevice, setIsSmallDevice] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth <=480 ){
        setIsSmallDevice(true)
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(false);
      }
      else if (480<=screenWidth && screenWidth <= 768) {
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
    <nav className='bg-white'>
        {isSmallDevice &&(
            <div className='bg-black w-screen h-16 flex flex-col justify-center items-center'>
                
            </div>
        )}

      {isMobile && (
        <div>Mobile Navigation</div>
      )}
      {isTablet && (
        <div>Tablet Navigation</div>
      )}
      {isDesktop && (
        <div>Desktop Navigation</div>
      )}
    </nav>
  );
  }    
export default LandingNav;