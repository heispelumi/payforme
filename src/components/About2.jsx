import React from "react";
import About1 from '../assets/about/About1.png';

const About2 = () => {
  return (
    <div className="w-full lg:h-[957px] flex flex-col bg-white mx-auto  items-center justify-center">
    

           <div class="flex items-center  text-center  pt-[40px] lg:pt-[60px]  gap-3">
    <div class="flex  flex-col  md:gap-3  gap-2  ">
      <div class="md:h-[3px] h-[1px] w-[16px] md:w-[23px] rounded-[8px] rotate-[40deg] md:rotate-[40deg] bg-[#7AC52D]"></div>
      <div class="md:h-[3px] h-[1px] w-[16px] md:w-[23px] rounded-[8px] md:ml-[-10px] ml-[-5px]  bg-[#7AC52D]"></div>
      <div class="md:h-[3px] h-[1px] w-[16px] md:w-[23px] rounded-[8px] rotate-[-40deg] lg:rotate-[-40deg] bg-[#7AC52D]"></div>
      
    </div>
    <h1 className="text-[15px] md:text-[30px]  lg:text-[35px] font-bold">How to Download and Use the Pay4Me App</h1>
    <div class="flex w-[px] flex-col md:gap-3  gap-2  ">
      <div class="md:h-[3px] md:w-[23px] rounded-[8px] rotate-[-40deg] md:rotate-[-40deg] h-[1px] w-[16px]  bg-[#7AC52D]"></div>
      <div class="md:h-[3px] h-[1px] w-[16px] rounded-[8px] md:w-[23px] ml-[5px] bg-[#7AC52D]"></div>
      <div class="md:h-[3px] h-[1px] w-[16px] md:w-[23px] rounded-[8px] rotate-[40deg] bg-[#7AC52D]"></div>
      
  </div>
  </div>

      <div className="relative flex flex-row items-center pt-[10px]  w-full">
        <div className="lg:w-[900px] w-[300px] px-[35px] md:px-[150px] lg:px-[250px] lg:h-[740px]">
          <h1 className="w-[320px] lg:py-[100px] text-[12px]  lg:w-[750px] lg:h-[90px] leading-[22px] lg:leading-[45px] lg:text-[35px]">
            Here's a step-by-step guide to downloading the Pay4Me app and getting started:
          </h1>

          <div className="lg:w-[900px]  w-[350px] py-[40px] lg:py-[80px] space-y-[30px] lg:space-y-[60px] lg:h-[356px]"> 
            <div className="flex items-center"> 
            <div className="w-[4px] lg:w-[6px] h-[40px] lg:h-[50px] bg-brandPrimary"></div>
              <p className="w-[210px] text-[10px] md:w-[400px] lg:w-[896px] font-thin ml-3 lg:text-[20px]">
                Locate the App Store on your device: Open the App Store app for iOS users, 
                and the Google Play Store app for Android users.
              </p>
            </div>
            <div className="flex items-center"> 
              <div className="w-[4px] lg:w-[6px] h-[40px] lg:h-[50px] bg-brandPrimary"></div>
              <p className="w-[210px] text-[10px]  md:w-[400px] lg:w-[896px] font-thin ml-3 lg:text-[20px]">
                Download the official Pay4Me app from the App Store or Google Play Store.
              </p>
            </div>
            <div className="flex items-center"> 
              <div className="w-[4px] lg:w-[6px] h-[40px] lg:h-[50px] bg-brandPrimary"></div>
              <p className="w-[210px] text-[10px] md:w-[400px] lg:w-[896px] font-thin ml-3 lg:text-[20px]">
                Open the Pay4Me app and create an account. Then you are ready to go!
              </p>
            </div>
          </div>
        </div>

        {/* Image Section Positioned at the End */}
        <div className="absolute mt-[160px] md:mt-[-170px]  lg:mt-[110px] bottom-[-1000x] lg:top-0 right-0 lg:right-0 w-[160px] md:w-[300px] lg:w-[470px] h-full">
          <img className="w-full h-auto" src={About1} alt="Pay4Me App" />
        </div>

      </div>
    </div>
  );
};

export default About2;
