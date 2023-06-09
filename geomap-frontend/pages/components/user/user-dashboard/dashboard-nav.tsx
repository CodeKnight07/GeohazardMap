import { useEffect, useState } from "react";
import React from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaCog, FaSignOutAlt, FaMapMarkedAlt, FaBook, FaHistory } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl'
import { MdPermContactCalendar } from 'react-icons/md'
import { AiFillDashboard } from 'react-icons/ai'

import logo from './images/logo.png'
import Image from "next/image";

function UserDashboardNav() {
  const [smallDevice, setSmallDevice] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setSmallDevice(screenWidth <= 767);
      setShowSidebar(screenWidth >= 767);
    };

    // Set initial screen width on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" md:fixed">
      {smallDevice ? (
        <div className="fixed top-24 left-3">
          {!showSidebar ? (
            <button className="text-2xl" onClick={handleSidebar}>
              <FaBars />
            </button>
          ) : (
            <button className="text-2xl" onClick={handleSidebar}>
              <FaTimes />
            </button>
          )}
        </div>
      ) : (
        <div className="fixed top-20 left-0 w-40 h-screen bg-slate-800 flex flex-col justify-start items-center">
          <div className="w-3/5 h-24 my-5">
            <Image
              src={logo}
              alt=''
              style={{objectFit:'cover', width:'100%', height:'100%', borderRadius:'100%'}}
            />
          </div>
          <div className="my-5"> <AiFillDashboard className="text-white font-semibold text-3xl"/></div>
          <ul className="flex flex-col space-y-5">
            <li className="text-white text-xl flex flex-row items-center space-x-2">
              <FaHome/>
              <a href="#" className="border-collapse hover:border-b-2 border-royal-blue-400 ">Home</a>
            </li>
            <li>
              <div className="flex flex-row items-center space-x-2">
                <FaMapMarkedAlt className="text-white"/>
                <span className="text-xl flex-row items-center space-x-1 w-auto text-white pr-1 border-collapse hover:border-b border-royal-blue-400">
                  Maps 
                </span>
                <SlArrowDown onClick={handleDropdown} className="text-white"/>
              </div>
              {showDropdown && (
                <ul className="ml-5">
                  <li className="text-white border-collapse hover:border-b border-royal-blue-400"><a href="#">Landslide</a></li>
                  <li className="text-white border-collapse hover:border-b border-royal-blue-400"><a href="#">Flood</a></li>
                  <li className="text-white border-collapse hover:border-b border-royal-blue-400"><a href="#">Evacuation</a></li>
                </ul>
              )}
            </li>
            <li className="text-white text-xl flex flex-row items-center space-x-2">
              <FaHistory/>
              <a href="#" className="border-collapse hover:border-b-2 border-royal-blue-400">History</a>
            </li>
            <li className="text-white text-xl flex flex-row items-center space-x-2">
              <MdPermContactCalendar/>
              <a href="#" className="border-collapse hover:border-b-2 border-royal-blue-400">Contacts</a>
            </li>
            <li className="text-white text-xl flex flex-row items-center space-x-2">
              <FaBook/>
              <a href="#" className="border-collapse hover:border-b-2 border-royal-blue-400">Guidelines</a>
            </li>
          </ul>
        </div>
      )}

      {/* For small screen */}
      {showSidebar && smallDevice && (
        <div className="fixed top-20 left-0 w-1/3 h-9/10 bg-slate-700 z-50 flex flex-col items-center">
          <button
            className="text-2xl absolute top-3 right-3"
            onClick={handleSidebar}
          >
            <FaTimes />
          </button>
          <div className="w-10/12 h-1/6 mt-11 bg-black"></div>
          <ul className="mt-8 flex flex-col space-y-4">
            <li className="text-md text-white border-collapse hover:border-b border-royal-blue-400 flex flex-row items-center space-x-2">
              <FaHome/>
              <a href="#">Home</a>
            </li>
            <li>
              <div className="text-white flex items-center justify-between space-x-1">
                <FaMapMarkedAlt/>
                <span className="text-md pr-1 border-collapse hover:border-b border-royal-blue-400">Maps</span>
                <SlArrowDown onClick={handleDropdown}/>
              </div>
              {showDropdown && (
                <ul className="ml-4 text-neutral-300">
                  <li className="border-collapse hover:border-b border-royal-blue-400"><a href="#">Landslide</a></li>
                  <li className="border-collapse hover:border-b border-royal-blue-400"><a href="#">Flood</a></li>
                  <li className="border-collapse hover:border-b border-royal-blue-400"><a href="#">Evacuation</a></li>
                </ul>
              )}
            </li>
            <li className="text-md text-white border-collapse hover:border-b border-royal-blue-400 flex flex-row items-center space-x-2">
              <FaHistory/>
              <a href="#">History</a>
            </li>
            <li className="text-md text-white border-collapse hover:border-b border-royal-blue-400 flex flex-row items-center space-x-2">
              <MdPermContactCalendar/>
              <a href="#">Contacts</a>
            </li>
            <li className="text-md text-white border-collapse hover:border-b border-royal-blue-400 flex flex-row items-center space-x-2">
              <FaBook/>
              <a href="#">Guidelines</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserDashboardNav;
