import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";  // For routing on mobile
import { Link } from "react-scroll";  // For smooth scrolling
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import applogo from "../assets/applogo.png";
import {
  RiInstagramFill,
  RiTiktokFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const Nav = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [nav]);

  return (
    <nav className="fixed overflow-x-hidden items-center justify-center md:py-6 w-full bg-gray-100 z-20">
      {/* Desktop View */}
      <div className="w-full fixed px-6 md:px-[50px] md:pb-[20px] bg-gray-100 lg:px-[150px] flex justify-between items-center h-[83.58px] md:h-[80px]">
        {/* Brand Logo */}
        <div className="flex items-center py-8">
          <img
            className="w-[112px] h-[30px] lg:w-[200px] lg:h-[50px] object-cover"
            src={applogo}
            alt="Nexcent Logo"
          />
        </div>

        {/* Menu Links for Desktop and Tablet */}
        <div className="hidden md:flex lg:flex items-center text-brandNavyblue">
          <div className="flex items-center lg:ml-[-85px] md:space-x-[25px] lg:space-x-[30px]">
            {/* Smooth Scroll Links for Desktop */}
            <Link to="about" smooth={true} duration={500} offset={-100} className="text-[16px]">
              About
            </Link>
            <Link to="blog" smooth={true} duration={500} className="text-[16px]">
              Blog
            </Link>
            <Link to="faq" smooth={true} duration={500} className="text-[16px]">
              Support
            </Link>
          </div>
        </div>

        {/* Button for Desktop and Tablet */}
        <div className="hidden md:flex">
          <button className="relative -top-1 -left-1 rounded-xl border-[1px] md:leading-[14.84px] lg:leading-[19.84px] md:w-[135px] md:h-[35px] lg:w-[154px] lg:h-[45px] md:text-[10px] lg:text-[13.5px] bg-brandPrimary md:py-1 md:px-4 lg:py-2.5 lg:px-6 text-white transition-all before:absolute lg:before:top-2 md:before:top-1 before:border-brandPrimary before:border-[2px] before:left-2 before:-z-[1] before:rounded-xl before:h-full before:w-full before:bg-brandSecondary before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
            Make a payment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden lg:hidden">
          <AiOutlineMenu
            onClick={() => setNav(!nav)}
            className="text-black w-[18px] h-[16px] cursor-pointer absolute top-[40px] right-8"
          />
        </div>
      </div>

      {/* Mobile Overlay */}
      {nav && (
        <div
          className="bg-black/80 fixed top-0 left-0 w-full h-screen z-20 transition-opacity duration-300 ease-in-out"
          onClick={() => setNav(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`${
          nav
            ? "fixed top-0 left-0 w-full h-[490px] bg-white flex flex-col items-center z-30 transform translate-y-0 transition-transform duration-300 ease-out"
            : "fixed top-0 left-0 w-full h-[490px] bg-white flex flex-col items-center z-30 transform -translate-y-full transition-transform duration-300 ease-in"
        }`}
      >
        <AiOutlineClose
          onClick={() => setNav(false)}
          className="text-black w-[18px] h-[16px] cursor-pointer absolute top-[40px] right-8"
        />

        {/* Menu Links */}
        <div className="flex flex-col items-center pt-[130px] space-y-8">
          {/* Routing Links for Mobile */}
          <Link to="about" smooth={true} duration={500}  onClick={() => setNav(false)} className="text-[16px]">
            About
          </Link>
          <Link to="blog" smooth={true} duration={500}  onClick={() => setNav(false)} className="text-[16px]">
            Blog
          </Link>
          <Link to="faq" smooth={true} duration={500}  onClick={() => setNav(false)} className="text-[16px]">
            Support
          </Link>
        </div>

        {/* Button for Mobile */}
        <div className="flex my-8">
          <button className="relative -top-1 -left-1 rounded-xl border-[1px] leading-[19.84px] w-[154px] h-[45px] text-[13.5px] bg-brandPrimary py-2.5 px-6 text-white transition-all before:absolute before:top-2 before:border-brandPrimary before:border-[2px] before:left-2 before:-z-[1] before:rounded-xl before:h-full before:w-full before:bg-brandSecondary before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
            Make a payment
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-4 mt-[20px] md:hidden">
          <RiTwitterXFill className="w-[15px] h-[15px]" />
          <RiTiktokFill className="w-[15px] h-[15px]" />
          <RiInstagramFill className="w-[15px] h-[15px]" />
          <FaFacebookF className="w-[15px] h-[15px]" />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
