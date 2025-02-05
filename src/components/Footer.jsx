import React from "react";

import applogo from '../assets/applogo.png'
import footer from '../assets/footer.png'
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";



const Footer = () => {
  return (
    <>
      <footer className=" bg-white  text-black">
        <div className=" mx-auto flex flex-col items-center text-center  pt-[50px] md:px-[220px]">
          <p className="md:w-[1256px]  w-[286px] text-[10px] text-[#111827] font-thin lg:leading-[30px] lg:px-[100px] lg:h-[105px] lg:text-[18px]">
            Pay4Me facilitates quick and easy tuition and fee payments for
            international students and immigrants through partnerships with
            licensed financial institutions. All mentioned brands are trademarks
            of their respective owners and do not imply endorsement.
          </p>
        <div className=" lg:w-[1256px] h-1 border bg-gray-100 mt-2 lg:mt-5 border-gray-100 "></div>
        </div>



        <div className=" mx-auto max-w-[1200px] p-4">
          {/* top footer */}
          <div className="grid py-5 md:grid-cols-3">
            <div className="px-2 ">
              <img className="lg:w-[222px] w-[110px] h-[45px] font-thin lg:h-[80px]" src={applogo} alt="" />
              <p className="md:text-[14px] text-[10px] text-gray-500  px-3">© 2020 - 2024 Pay4Me, Inc</p>

              <div className="px-3 md:gap-y-6 gap-y-1    font-thin py-3 md:py-6">
              <p className=" md:text-[14px] text-[10px]">Follow us to stay updated</p>
              <div className='flex pt-4 space-x-2 sm:space-x-4 text-xl '>
                 <CiFacebook />
                 <FaInstagram />
                 <RiTwitterXLine />
                 <AiOutlineYoutube />

                 </div>
              </div>

              <br />

             
            </div>

            <div className="grid grid-cols-2  px-[20px] md:px-0 sm:grid sm:grid-cols-3 gap-x-12 py-6 col-span-2 md:pl-[50px] ">

                <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0">
              <div>
                <h1 className="mb-3 font-thin text-justify text-[18px]   sm:text-left">
              Company
                </h1>
                <div className="flex text-gray-500 flex-col text-[13px] md:text-[15px] space-y-2  md:space-y-4">
                  <Link>About</Link>
                  <Link>Blog</Link>
                  <Link>FAQs</Link>
                  <Link>Support</Link>
                </div>
              </div>
              <div>
                <h1 className="mb-3 font-thin text-justify text-[18px]  sm:text-left">
                 Legal
                </h1>
                <div className="flex text-gray-500 flex-col text-[13px] md:text-[15px] space-y-2  md:space-y-4">
                  <Link>Terms of Service</Link>
                  <Link>Order Cancellation Policy</Link>
                  <Link>Privacy Policy</Link>
                  <Link>KYC/AML Policy</Link>
                </div>
              </div>

                </div>
              <div>
                <h1 className="mb-3 font-thin text-justify text-[18px]  sm:text-left">
                 Resources
                </h1>
                <div className="flex text-gray-500 flex-col text-[13px] md:text-[15px] space-y-2  md:space-y-4">
                  <Link>Android Reviews</Link>
                  <Link>IOS Reviews</Link>
                  <Link>Jobs</Link>
                  <Link>Testimonials</Link>
                </div>
              </div>
             
            </div>
          </div>

          {/* bottom footer */}
          <div className="hidden md:flex w-full pt-[40px">
           <img className="" src={footer} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
