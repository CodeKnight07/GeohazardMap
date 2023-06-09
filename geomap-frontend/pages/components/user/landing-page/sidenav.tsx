import React, { useEffect, useState } from "react";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import { FaHome, FaQuestionCircle } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";

function SideNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [isIconClicked, setIsIconClicked] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setIsIconClicked(!isIconClicked);
  };

  useEffect(() => {
    function resize() {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 640) {
        setSideNav(true);
      } else {
        setSideNav(false);
      }
    }

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {sideNav && (
        <div
          className={`fixed top-20 left-1 transition-all duration-300 mx-0${
            isVisible ? "translate-x-0" : "-translate-x-20"
          }`}
        >
          <div className=" w-auto h-1/2">
            {isIconClicked ? (
              <TfiArrowCircleRight
                className="cursor-pointer text-white"
                size={18}
                onClick={toggleVisibility}
              />
            ) : (
              <TfiArrowCircleLeft
                className="cursor-pointer text-white"
                size={18}
                onClick={toggleVisibility}
              />
            )}
            {isVisible && (
              <div className="bg-black p-4 rounded-lg h-1/2">
                <ul className="flex flex-col justify-start items-center h-72 py-3 gap-6">
                  <li className="">
                    <a href="#">
                      <FaHome className="text-white hover:text-yellow-400" />
                    </a>
                  </li>
                  <li className="">
                    <a href="#">
                      <MdPersonSearch className="text-white hover:text-yellow-400" />
                    </a>
                  </li>
                  <li className="">
                    <a href="#">
                      <FaQuestionCircle className="text-white hover:text-yellow-400" />
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SideNav;
