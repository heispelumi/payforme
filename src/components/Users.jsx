import React from "react";
import World from "../assets/Users/World.png";
import Speed from "../assets/Users/Speed.png";
import image1 from "../assets/Users/image1.png";
import image2 from "../assets/Users/image2.png";
import image3 from "../assets/Users/image3.png";
import image4 from "../assets/Users/image4.png";
import play from "../assets/Users/play.png";
import playstore from "../assets/Users/playstore.png";
import apple from "../assets/Users/apple.png";
import { FaStar } from "react-icons/fa";

const Users = () => {
  return (
    <div className="flex flex-col items-center  w-full md:py-[60px] md:py-[50px py-[30px] justify-center h-full bg-white">
      <div className=" py-6 lg:w-[701px] lg:h-[120px] flex   lg:flex-row items-center  justify-center gap-y-[60px] text-center">
        {/* World Icon */}
        <img
          src={World}
          alt="World"
          className="mb-5 md:mb-10  mr-4  w-[25.4px] h-[25.4px] object-cover "
        />

        {/* Text */}
        <p className=" text-[15px] md:text-[30px] left-[53px] leading-[20px] md:leading-[40.52px] font-semibold">
          Trusted by thousands of students
          <span className="block">and immigrants around the world</span>
        </p>
        {/* Speed Icon */}
        <img
          src={Speed}
          alt="Speed"
          className=" mt-5 md:mt-10  mr-4 w-[25.4px] h-[25.4px] object-cover "
        />
      </div>

      {/* Images */}
      <div className="flex flex-col   justify-center lg:w-[1189px] md:py-[40px] lg:h-[694px] lg:pt-[70px] items-center ">
        <div className="flex flex-col  pb-[70px]  md:pb-[30px]  lg:pb-[0px] my-6 lg:flex-row justify-between items-center   lg:w-[1189px] lg:h-[694px]">
          {/* Image1 */}
           <div className=" flex flex-col lg:flex-row justify-center lg:justify-between  w-full  gap-y-[90px]  md:gap-y-[50px]"  >
          {/* Outer border */}
          <div className=" relative  w-[240px] h-[240px] md:w-[300px] md:h-[300px]  rounded-full flex items-center justify-center bg-[#AFE274]">
            {/* Inner border */}
            <div className=" w-[200px] h-[200px] md:w-[250px]  md:h-[250px] rounded-full flex items-center justify-center bg-brandPrimary">
              <img
                className="w-[170px] h-[170px] md:w-[200px] md:h-[200px] rounded-full object-cover"
                src={image1}
                alt="Profile"
              />
            </div>

            <div className="absolute">
              <img src={play} alt="" />
            </div>

            <div className="absolute w-[240px] h-[80px] bg-white top-[225px]  border  rounded-md shadow-2xl">
              <div className="flex items-center flex-col">
                <h1 className="pt-4 font-thin">Precious Mike</h1>
                <div className="flex text-yellow-500 pt-1 gap-x-1 flex-row">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>

          {/* Middle gradient */}
          <div className="lg:flex hidden flex-col items-center justify-center space-y-4 relative">
  {/* First Button */}
  <div className="w-[300px] p-4 h-[60px] bg-white border-gray-400 border-2 rounded-lg flex items-center justify-between relative z-10">
    {/* Playstore Section */}
    <div className="flex items-center">
      <img
        src={playstore}
        alt="Playstore"
        className="w-[30px] h-[30px] mr-2 object-contain"
      />
      <span className="text-gray-700 text-[20px] pr-2 font-thin">
        Playstore
      </span>
    </div>

    {/* Divider */}
    <div className="w-[2px] h-full bg-gray-300"></div>

    {/* Another Text Section */}
    <span className="text-gray-700 font-thin text-[20px] pl-2">
      More Reviews
    </span>
  </div>

   
  <div className="absolute  top-[60%] left-0 right-0 shadow-[0px_0px_400px_60px_rgba(122,197,45,0.5),_0px_0px_400px_60px_rgba(236,135,78,0.5),_0px_0px_400px_60px_rgba(173,221,28,0.5)]  z-0"></div>

  {/* Second Button */}
  <div className="w-[300px] p-4 h-[60px] bg-white border-gray-400 border-2 rounded-lg flex items-center relative z-10">
    {/* Asset Section */}
    <div className="flex items-center">
      <img
        src={apple}
        alt="Another Asset"
        className="w-[30px] h-[30px] mr-2 object-contain"
      />
      <span className="text-gray-700 text-[20px] pr-2 font-thin">
        Appstore
      </span>
    </div>

    {/* Divider */}
    <div className="w-[2px] h-full bg-gray-300"></div>

    {/* Another Text Section */}
    <span className="text-gray-700 font-thin text-[20px] pl-2">
      More Review
    </span>
  </div>


</div>


          {/* Image2 */}
  
            {/* Outer border */}
            <div className=" relative   w-[240px] h-[240px] md:w-[300px] md:h-[300px]  rounded-full flex items-center justify-center bg-[#AFE274]">
              {/* Inner border */}
              <div  className=" w-[200px] h-[200px] md:w-[250px]  md:h-[250px] rounded-full flex items-center justify-center bg-brandPrimary">
                <img
                  className="w-[170px] h-[170px] md:w-[200px] md:h-[200px] rounded-full object-cover"
                  src={image3}
                  alt="Profile"
                />
              </div>

              <div className="absolute">
                <img src={play} alt="" />
              </div>

              <div className="absolute w-[240px] h-[80px] bg-white top-[225px]  border  rounded-md shadow-2xl">
                <div className="flex items-center flex-col">
                  <h1 className="pt-4 font-thin">Precious Mike</h1>
                  <div className="flex text-yellow-500 pt-1 gap-x-1 flex-row">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
      
          </div>
        </div>

        <div className="flex flex-col  lg:flex-row justify-center lg:justify-between  lg:w-[800px] gap-y-[90px] md:gap-y-[50px]">
          {/* Image3*/}
          <div  className=" relative   w-[240px] h-[240px] md:w-[300px] md:h-[300px]  rounded-full flex items-center justify-center bg-[#AFE274]">
            {/* Outer border */}
            <div className=" w-[200px] h-[200px] md:w-[250px]  md:h-[250px] rounded-full flex items-center justify-center bg-brandPrimary">
              {/* Inner border */}
              <img
                className="w-[170px] h-[170px] md:w-[200px] md:h-[200px] rounded-full object-cover"
                src={image2}
                alt="Profile"
              />
            </div>

            <div className="absolute">
              <img src={play} alt="" />
            </div>

            <div className="absolute w-[240px] h-[80px] bg-white top-[225px] border rounded-md shadow-2xl">
              <div className="flex items-center flex-col">
                <h1 className="pt-4 font-thin">Obafemi Akinde</h1>
                <div className="flex text-yellow-500 pt-1 gap-x-1 flex-row">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>

          {/* Image4 */}
          <div className=" relative  w-[240px] h-[240px] md:w-[300px] md:h-[300px]  rounded-full flex items-center justify-center bg-[#AFE274]">
            {/* Outer border */}
            <div className= " w-[200px] h-[200px] md:w-[250px]  md:h-[250px] rounded-full flex items-center justify-center bg-brandPrimary"> 
              {/* Inner border */}

              <img
                className="w-[170px] h-[170px] md:w-[200px] md:h-[200px] rounded-full object-cover"
                src={image4}
                alt="Profile"
              />

              <div className="absolute">
                <img src={play} alt="" />
              </div>
            </div>
            <div className="absolute w-[240px] h-[80px] bg-white top-[225px] border rounded-md shadow-2xl">
              <div className="flex items-center flex-col">
                <h1 className="pt-4 font-thin">Chiamaka Chike</h1>
                <div className="flex text-yellow-500 pt-1 gap-x-1 flex-row">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex flex-col items-center justify-center pt-[100px] md:pt-[60px] space-y-3">
          {/* First Button */}
          <div className="w-[300px] p-4 h-[60px] shadow-[0px_0px_400px_60px_rgba(122,197,45,0.5),_0px_0px_400px_60px_rgba(236,135,78,0.5),_0px_0px_400px_60px_rgba(173,221,28,0.5)] bg-white border-gray-400 border-2 rounded-lg flex items-center justify-between">
            {/* Playstore Section */}
            <div className="flex items-center">
              <img
                src={playstore}
                alt="Playstore"
                className="w-[30px] h-[30px] mr-2 object-contain"
              />
              <span className="text-gray-700 text-[20px] pr-2 font-thin">
                Playstore
              </span>
            </div>

            {/* Divider */}
            <div className="w-[2px] h-full bg-gray-300"></div>

            {/* Another Text Section */}
            <span className="text-gray-700 font-thin text-[20px] pl-2">
              More Reviews
            </span>
          </div>

          {/* Second Button */}
          <div className="w-[300px] p-4 h-[60px]  bg-white border-gray-400 border-2 rounded-lg flex items-center ">
            {/* Asset Section */}
            <div className="flex items-center">
              <img
                src={apple}
                alt="Another Asset"
                className="w-[30px] h-[30px] mr-2 object-contain"
              />
              <span className="text-gray-700 text-[20px] pr-2 font-thin">
                Appstore
              </span>
            </div>

            {/* Divider */}
            <div className="w-[2px] h-full bg-gray-300"></div>

            {/* Another Text Section */}
            <span className="text-gray-700 font-thin text-[20px] pl-2 ">
              More Review
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
