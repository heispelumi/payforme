import React from "react";
import About1 from '../assets/about/About1.png';

const About2 = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white mx-auto lg:pr-[100px] items-center justify-center">
      {/* Title Section */}
      <div className="text-center py-[60px] lg:pt-[120px]">
        <h1 className="text-[18px] font-bold">
          How to Download and Use the Pay4Me App
        </h1>
      </div>

      <div className="relative flex flex-row items-center pt-[10px] lg:pt-[60px] w-full">
        <div className="lg:w-[900px] w-[300px] px-[35px] md:px-[150px] lg:px-[300px] lg:h-[540px]">
          <h1 className="w-[320px] text-[15px]  lg:w-[750px] lg:h-[90px] leading-[24px] lg:leading-[45px] lg:text-[35px]">
            Here's a step-by-step guide to downloading the Pay4Me app and getting started:
          </h1>

          <div className="lg:w-[900px]  w-[350px] py-[40px] lg:py-[80px] space-y-[30px] lg:space-y-[60px] lg:h-[356px]"> 
            <div className="flex items-center"> 
            <div className="w-[4px] lg:w-[6px] h-[40px] lg:h-[50px] bg-brandPrimary"></div>
              <p className="w-[220px] text-[10px] md:w-[400px] lg:w-[896px] font-thin ml-3 lg:text-[26px]">
                Locate the App Store on your device: Open the App Store app for iOS users, 
                and the Google Play Store app for Android users.
              </p>
            </div>
            <div className="flex items-center"> 
              <div className="w-[4px] lg:w-[6px] h-[40px] lg:h-[50px] bg-brandPrimary"></div>
              <p className="w-[220px] text-[10px]  md:w-[400px] lg:w-[896px] font-thin ml-3 lg:text-[26px]">
                Download the official Pay4Me app from the App Store or Google Play Store.
              </p>
            </div>
            <div className="flex items-center"> 
              <div className="w-[4px] lg:w-[6px] h-[40px] lg:h-[50px] bg-brandPrimary"></div>
              <p className="w-[220px] text-[10px] md:w-[400px] lg:w-[896px] font-thin ml-3 lg:text-[26px]">
                Open the Pay4Me app and create an account. Then you are ready to go!
              </p>
            </div>
          </div>
        </div>

        {/* Image Section Positioned at the End */}
        <div className="absolute mt-[100px] md:mt-[-200px] lg:mt-0 bottom-[-1000x] lg:top-0 right-0 lg:right-[-100px] w-[180px] md:w-[300px] lg:w-[500px] h-full">
          <img className="w-full h-auto" src={About1} alt="Pay4Me App" />
        </div>

      </div>
    </div>
  );
};

export default About2;
