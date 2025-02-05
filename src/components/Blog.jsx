import React from "react";
import blog1 from '../assets/blog/ blog1.png'
import blog2 from '../assets/blog/blog2.png'
import blog3 from '../assets/blog/blog3.png'
import { TiArrowRight } from "react-icons/ti";

const Blog = () => {
  return (
    <div className="w-full  lg:h-[957px] pb-[50px] flex flex-col bg-gray-100 mx-auto  items-center justify-center">
        <div class="flex items-center  text-center  pt-[40px] lg:pt-[60px]  gap-3">
    <div class="flex w-[px] flex-col  md:gap-3  gap-2  ">
      <div class="md:h-[3px] h-[1px] w-[15px] md:w-[23px] rounded-[8px] rotate-[40deg] md:rotate-[40deg] bg-[#7AC52D]"></div>
      <div class="md:h-[3px] h-[1px] w-[15px] md:w-[23px] rounded-[8px] md:ml-[-10px] ml-[-2px]  bg-[#7AC52D]"></div>
      <div class="md:h-[3px] h-[1px] w-[15px] md:w-[23px] rounded-[8px] rotate-[-40deg] lg:rotate-[-40deg] bg-[#7AC52D]"></div>
      
    </div>
    <h1 className="text-[15px] lg:text-[35px] font-bold">Latest Blogs and Resources</h1>
    <div class="flex w-[px] flex-col md:gap-3  gap-2  ">
      <div class="md:h-[3px] md:w-[23px] rounded-[8px] rotate-[-40deg] md:rotate-[-40deg] h-[1px] w-[15px]  bg-[#7AC52D]"></div>
      <div class="md:h-[3px] h-[1px] w-[15px] rounded-[8px] md:w-[23px] ml-[5px] bg-[#7AC52D]"></div>
      <div class="md:h-[3px] h-[1px] w-[15px] md:w-[23px] rounded-[8px] rotate-[40deg] bg-[#7AC52D]"></div>
      
  </div>
  </div>

      <div className="lg:w-[1200px] flex items-center justify-center lg:pt-[50px] gap-y-[25px]  gap-x-[30px] flex-col lg:flex-row  h-[1200px] md:h-[1200px] lg:h-[700px] lg:py-[20px] ">
        {/* first div */} 
        <div className=" w-[263px] h-[349px] lg:w-[380px] bg-white lg:h-[582px]">
          <div className=""> 
            <img src={blog1} alt="" />
          </div>

          <div className='px-6 lg:px-10'>
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

          <div className='px-6 lg:px-10'>
              <div className="lg:py-2 py-1 pt-4 lg:pt-7">
                <p className=" text-[6px] lg:text-[15px] text-[#AAAAAA]">11 dec 2024 | BY Esther Ebere |</p>
              </div>


               
              <div className="lg:w-[282px] lg:h-[102px] ">
                <p className="lg:text-[24px] text-[12px] font-thin py-1 lg:leading-[34px] ">
                5 Tips for Finding the Best App for International Tuition Payments
                </p>
              </div>
           

            <div className="lg:w-[282px] border mt-2 lg:mt-5 border-[#DEDEDE] "></div>

            <div>
                <p className=" lg:w-[282px] text-[7px]  lg:text-[16px] py-4 text-[#AAAAAA] lg:leading-[26px] ">
                Choosing the right app for international tuition payments can be daunting. With many options available, students often struggle......
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

          <div className='px-6 lg:px-10'>
              <div className="lg:py-2 py-1 pt-4 lg:pt-7">
                <p className=" text-[6px] lg:text-[15px] text-[#AAAAAA]">12 dec 2024 | BY Ernest Emeka |</p>
              </div>


               
              <div className="lg:w-[282px] lg:h-[102px] ">
                <p className="lg:text-[24px] text-[12px] font-thin py-1 lg:leading-[34px] ">
                Why Universities Prefer Pay4Me App as their Africa's Payment Partner
                </p>
              </div>
           

            <div className="lg:w-[282px] border mt-2 lg:mt-5 border-[#DEDEDE] "></div>

            <div>
                <p className=" lg:w-[282px] text-[7px]  lg:text-[16px] py-4 text-[#AAAAAA] lg:leading-[26px] ">
                Things fell apart for Adaobi Ekeh, a Nigerian student going to the United States of America for her master's in Artificial......
                </p>
            </div>
          <div className='flex items-center   lg:gap-x-[10px] gap-x-[5px] text-[#7AC52D]'>
            <p className="uppercase  text-[10px] md:text-[16px]">Read More</p>
        
        <span ><TiArrowRight size={25} className="" /></span>
         

          </div>
          </div>

        </div>


      

  
         


    
      </div>
      {/* Link Section */}
      <div className="flex items-center pt-4 text-[12px] lg:pt-[16px] md:text-[16px] lg:text-[15px]">
       
        <a href="#" className="text-brandPrimary underline">
          See More
        </a>
      </div>
 
    </div>
  );
};

export default Blog;
