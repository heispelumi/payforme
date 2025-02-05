import React from "react";
import Store from "../assets/Users/Store.png";
import Player from "../assets/Users/Player.png";
import image21 from "../assets/Users/image21.png";
import pphone from "../assets/Users/pphone.png";
import p1 from "../assets/Users/p1.png";
import p2 from "../assets/Users/p2.png";
import p3 from "../assets/Users/p3.png";
import p5 from "../assets/Users/p5.png";

const Partnership2 = () => {
  return (
    <div className="w-full md:h-[300px] lg:h-[500px] h-[540px]  pt-[20px] flex flex-col bg-gray-100 mx-auto items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center md:w-full lg:w-[1511px]  h-[540px] md:h-[250px] lg:h-[401px] border rounded-[10px] bg-[#7AC52D] p-4 lg:p-0">
        
        {/* Left Side */}
        <div className="hidden lg:flex flex-col  lg:ml-[-137px]">
        <div className=" flex  mb-[100px]">
          <img src={p1} alt="" />

        </div>
 
          <div className="mt-2">
            <img src={p2} alt="" />
          </div>
        </div>

        {/* Center Content */}
        <div className="flex md:w-[200px] lg:w-[366px]  flex-col items-center text-center md:text-left  justify-center  lg:mr-[180px] lg:h-[220px]">
          <div className="lg:w-[566px] md:ml-[280px] lg:ml-[300px]   mt-[60px] md:mt-0 ">
            <h1 className="text-[25px]  md:w-[300px] lg:w-[700px] md:text-[25px] lg:text-[40px] text-white font-bold">
              Download the Pay4Me App
            </h1>
            <p className="text-white   font-thin lg:py-[5px]  text-[12px] lg:text-[20px]">
              Our custom QR code will take you to your app store to download our
              awesome native apps
            </p>
          {/* App Store Buttons */}
          <div className="flex pt-[20px] md:pt-[35px] w-full justify-center md:justify-start md::w-[374px] md:h-[52px] ">
            <div className="flex  flex-col md:flex-row  space-y-[10px] md:space-y-0 gap-x-[10px] md::gap-x-[15px]">
              <button>
                <img className="w-[95px] md:w-[110px] lg:w-[180px]" src={Store} alt="App Store" />
              </button>
              <button>
                <img  className="w-[95px] md:w-[110px] lg:w-[180px]" src={Player} alt="Google Play" />
              </button>
            </div>
          </div>
        </div>
          </div>


        {/* Right Side */}
        <div className="flex flex-col space-x-12  md:flex-row items-center md:ml-[300px] mt-6 md:mt-0">
          <button>
            <img className="w-[90px] lg:w-[200px] lg:h-[200px] md:w-[130px] md:h-[130px] h-[90px] " src={image21} alt="QR Code" />
          </button>

          
          <div className="relative flex justify-center ">
            <img className="relative hidden md:flex z-10 md:w-[100px] lg:w-auto" src={pphone} alt="Phone" />
            <img
              className="absolute hidden  md:flex z-0 top-[10px] lg:top-[90px] md:top-[50px] right-[30px] w-[160px] lg:w-auto"
              src={p3}
              alt="Background"
            />
            <img className="relative flex md:hidden mr-[50px]  mt-6 z-10 w-[130px] lg:w-auto" src={p5} alt="Phone" />
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership2;
