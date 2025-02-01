import React from "react";
import blog1 from '../assets/blog/ blog1.png'
import blog2 from '../assets/blog/blog2.png'
import blog3 from '../assets/blog/blog3.png'
import { TiArrowRight } from "react-icons/ti";

const Blog = () => {
  return (
    <div className="w-full h-full flex flex-col mx-auto lg:pt-[150px] lg:pb-[40px]   items-center justify-center">
      <div className="text-center  ">
        <h1 className="text-[15px] lg:text-[45px] font-bold">
          Latest Blogs and Resources
        </h1>
      </div>

      <div className="lg:w-[1200px] flex items-center justify-center lg:pt-[50px] gap-y-[15px] lg;py-[30px] gap-x-[30px] flex-col lg:flex-row  h-[1200px] md:h-[1200px] lg:py-[20px] ">
        {/* first div */} 
        <div className=" w-[263px] h-[349px] lg:w-[380px] bg-white lg:h-[582px]">
          <div className=""> 
            <img src={blog1} alt="" />
          </div>

          <div className='px-10 lg:px-10'>
              <div className="lg:py-2 py-1 pt-4 lg:pt-7">
                <p className=" text-[6px] lg:text-[15px] text-[#AAAAAA]">19 dec 2024 | BY Esther Ebere |</p>
              </div>


               
              <div className="lg:w-[282px] lg:h-[102px] ">
                <p className="lg:text-[24px] text-[12px] font-thin py-1 lg:leading-[34px] ">
                How to naviagate international payments for education without stress
                </p>
              </div>
           

            <div className="lg:w-[282px] border mt-2 lg:mt-5 border-[#DEDEDE] "></div>

            <div>
                <p className=" lg:w-[282px] text-[7px]  lg:text-[16px] py-4 text-[#AAAAAA] lg:leading-[26px] ">
                Studying abroad can be an exciting journey, but it comes with its fair share of challenges—one of the biggest being......
                </p>
            </div>
          <div className='flex items-center   lg:gap-x-[10px] gap-x-[5px] text-[#7AC52D]'>
            <p className="uppercase  text-[10px] md:text-[16px]">Read More</p>
        
        <span ><TiArrowRight size={25} className="" /></span>
         

          </div>
          </div>

        </div>
        <div className=" w-[263px] h-[349px] lg:w-[380px] bg-white lg:h-[582px]">
          <div className=""> 
            <img src={blog2} alt="" />
          </div>

          <div className='px-10 lg:px-10'>
              <div className="lg:py-2 py-1 pt-4 lg:pt-7">
                <p className=" text-[6px] lg:text-[15px] text-[#AAAAAA]">19 dec 2024 | BY Esther Ebere |</p>
              </div>


               
              <div className="lg:w-[282px] lg:h-[102px] ">
                <p className="lg:text-[24px] text-[12px] font-thin py-1 lg:leading-[34px] ">
                How to naviagate international payments for education without stress
                </p>
              </div>
           

            <div className="lg:w-[282px] border mt-2 lg:mt-5 border-[#DEDEDE] "></div>

            <div>
                <p className=" lg:w-[282px] text-[7px]  lg:text-[16px] py-4 text-[#AAAAAA] lg:leading-[26px] ">
                Studying abroad can be an exciting journey, but it comes with its fair share of challenges—one of the biggest being......
                </p>
            </div>
          <div className='flex items-center   lg:gap-x-[10px] gap-x-[5px] text-[#7AC52D]'>
            <p className="uppercase  text-[10px] md:text-[16px]">Read More</p>
        
        <span ><TiArrowRight size={25} className="" /></span>
         

          </div>
          </div>

        </div>
        <div className=" w-[263px] h-[349px] lg:w-[380px] bg-white lg:h-[582px]">
          <div className=""> 
            <img src={blog3} alt="" />
          </div>

          <div className='px-10 lg:px-10'>
              <div className="lg:py-2 py-1 pt-4 lg:pt-7">
                <p className=" text-[6px] lg:text-[15px] text-[#AAAAAA]">19 dec 2024 | BY Esther Ebere |</p>
              </div>


               
              <div className="lg:w-[282px] lg:h-[102px] ">
                <p className="lg:text-[24px] text-[12px] font-thin py-1 lg:leading-[34px] ">
                How to naviagate international payments for education without stress
                </p>
              </div>
           

            <div className="lg:w-[282px] border mt-2 lg:mt-5 border-[#DEDEDE] "></div>

            <div>
                <p className=" lg:w-[282px] text-[7px]  lg:text-[16px] py-4 text-[#AAAAAA] lg:leading-[26px] ">
                Studying abroad can be an exciting journey, but it comes with its fair share of challenges—one of the biggest being......
                </p>
            </div>
          <div className='flex items-center   lg:gap-x-[10px] gap-x-[5px] text-[#7AC52D]'>
            <p className="uppercase  text-[10px] md:text-[16px]">Read More</p>
        
        <span ><TiArrowRight size={25} className="" /></span>
         

          </div>
          </div>

        </div>


      

  
         


    
      </div>
        <div className="text-center  ">
        <div className="flex">
          <button className="relative -top-1 -left-1 rounded-xl border-[1px] md:leading-[14.84px] lg:leading-[19.84px] md:w-[135px] md:h-[35px] lg:w-[154px] lg:h-[45px] md:text-[10px] lg:text-[13.5px] bg-brandPrimary md:py-1 md:px-4  lg:py-2.5 lg:px-6 text-white transition-all before:absolute lg:before:top-2 md:before:top-1 before:border-brandPrimary before:border-[2px] before:left-2 before:-z-[1] before:rounded-xl before:h-full before:w-full before:bg-brandSecondary before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
           View More
          </button>
        </div>
     
      </div>
    </div>
  );
};

export default Blog;
