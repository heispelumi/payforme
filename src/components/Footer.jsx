import React from "react";
import applogo from '../assets/applogo.png';
import footer from '../assets/footer.png';
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="mx-auto flex flex-col items-center text-center px-4 md:px-[220px]">
        <p className="lg:w-[1256px] md:w-[400px] w-[286px] text-[10px] text-[#111827] font-thin lg:leading-[30px] lg:px-[100px] lg:h-[105px] lg:text-[18px]">
          Pay4Me facilitates quick and easy tuition and fee payments for international students and immigrants through partnerships with licensed financial institutions. All mentioned brands are trademarks of their respective owners and do not imply endorsement.
        </p>
        <div className="lg:w-[1256px] h-1 border bg-gray-100 mt-2 lg:mt-5 border-gray-100"></div>
      </div>

      <div className="mx-auto max-w-[1200px] px-8 md:px-0">
        {/* Top footer - Responsive flex-row for desktop */}
        <div className="flex flex-col md:flex-row justify-between items-start py-5">
          <div className="flex flex-col  items-center md:items-start">
            <img className="lg:w-[222px]  w-[110px] h-[45px] lg:h-[80px]" src={applogo} alt="App Logo" />
            <p className="md:text-[14px] text-[10px] text-gray-500 ">© 2020 - 2024 Pay4Me, Inc</p>
            <div className=" py-3 md:py-6 text-center md:text-left">
              <p className="md:text-[14px] text-[10px]">Follow us to stay updated</p>
              <div className='flex pt-4 space-x-2 sm:space-x-4 text-xl'>
                <CiFacebook />
                <FaInstagram />
                <RiTwitterXLine />
                <FaYoutube />
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:flex md:justify-between md:w-2/3 gap-x-12 py-6 md:pl-[50px]">
            <div>
              <h1 className="mb-3 font-thin text-[18px]">Company</h1>
              <div className="flex text-gray-500 flex-col text-[13px] md:text-[15px] space-y-2 md:space-y-4">
                <Link>About</Link>
                <Link>Blog</Link>
                <Link>FAQs</Link>
                <Link>Support</Link>
              </div>
            </div>
            <div>
              <h1 className="mb-3 font-thin text-[18px]">Legal</h1>
              <div className="flex text-gray-500 flex-col text-[13px] md:text-[15px] space-y-2 md:space-y-4">
                <Link>Terms of Service</Link>
                <Link>Order Cancellation Policy</Link>
                <Link>Privacy Policy</Link>
                <Link>KYC/AML Policy</Link>
              </div>
            </div>
            <div>
              <h1 className="mb-3 font-thin text-[18px]">Resources</h1>
              <div className="flex text-gray-500 flex-col text-[13px] md:text-[15px] space-y-2 md:space-y-4">
                <Link>Android Reviews</Link>
                <Link>iOS Reviews</Link>
                <Link>Jobs</Link>
                <Link>Testimonials</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer - Visible only on larger screens */}
        <div className="flex w-full  pt-10">
          <img src={footer} alt="Footer Image" className="w-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
