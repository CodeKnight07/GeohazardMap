import { useEffect, useState } from "react";
import React from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import {SlArrowDown} from 'react-icons/sl'
function UserDashboardNav () {
  const [smallDevice, setSmallDevice] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleScreen = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setSmallDevice(true);
    } else {
      setSmallDevice(false);
    }
  };

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreen);
    handleScreen(); // Set initial value
    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);

  return (
    <div className="">
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
        <div>Large Device View</div>
      )}
      {showSidebar && (
        <div className="fixed top-20 left-0 w-1/3 h-5/6 bg-gradient-to-b from-white via-cyan-100 to-green-600 z-50 flex flex-col items-center">
          <button
            className="text-2xl absolute top-3 right-3"
            onClick={handleSidebar}
          >
            <FaTimes />
          </button>

          <div className=" w-10/12 h-1/6 mt-11 bg-black">

          </div>
          <ul className="mt-8 flex flex-col space-y-4">
            <li className="text-lg border-collapse hover:border-b border-royal-blue-400"><a href="#">Home</a></li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-lg pr-1 border-collapse hover:border-b border-royal-blue-400">Maps</span>
                <button onClick={handleDropdown}>
                  <SlArrowDown/>
                </button>
              </div>
              {showDropdown && (
                <ul className="ml-4">
                  <li className="border-collapse hover:border-b border-royal-blue-400"><a href="#">Landslide</a></li>
                  <li className="border-collapse hover:border-b border-royal-blue-400"><a href="#">Flood</a></li>
                  <li className="border-collapse hover:border-b border-royal-blue-400"><a href="#">Evacuation</a></li>
                </ul>
              )}
            </li>
            <li className="text-lg border-collapse hover:border-b border-royal-blue-400"><a href="#">History </a></li>
            <li className="text-lg border-collapse hover:border-b border-royal-blue-400"><a href="#"> Contacts </a></li>
            <li className="text-lg border-collapse hover:border-b border-royal-blue-400"><a href="#">Guidelines</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserDashboardNav;
