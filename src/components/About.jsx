import React from "react";
import phone from "../assets/about/phone.png";
import transfer from "../assets/about/transfer.png";
import canada from "../assets/about/canada.png";
import us from "../assets/about/us.png";
import uk from "../assets/about/uk.png";
import Korea from "../assets/about/Korea.png";
import Sweden from "../assets/about/Sweden.png";
import atom from "../assets/about/atom.png";
import Frame from "../assets/about/Frame.png";

const About = () => {
  return (
    <div className="w-full lg:h-[957px] flex flex-col bg-gray-100  mx-auto  items-center justify-center ">
  
      <div class="flex items-center  text-center  pt-[40px] lg:pt-[60px]  gap-3">
    <div class="flex w-[px] flex-col  md:gap-3  gap-2  ">
      <div class="md:h-[3px] h-[1px] w-[15px] md:w-[23px] rounded-[8px] rotate-[40deg] md:rotate-[40deg] bg-[#7AC52D]"></div>
      <div class="md:h-[3px] h-[1px] w-[15px] md:w-[23px] rounded-[8px] md:ml-[-10px] ml-[-2px]  bg-[#7AC52D]"></div>
      <div class="md:h-[3px] h-[1px] w-[15px] md:w-[23px] rounded-[8px] rotate-[-40deg] lg:rotate-[-40deg] bg-[#7AC52D]"></div>
      
    </div>
    <h1 className="text-[15px] lg:text-[35px] font-bold">Why We Built the Pay4me App</h1>
    <div class="flex w-[px] flex-col md:gap-3  gap-2  ">
      <div class="md:h-[3px] md:w-[23px] rounded-[8px] rotate-[-40deg] md:rotate-[-40deg] h-[1px] w-[15px]  bg-[#7AC52D]"></div>
      <div class="md:h-[3px] h-[1px] w-[15px] rounded-[8px] md:w-[23px] ml-[5px] bg-[#7AC52D]"></div>
      <div class="md:h-[3px] h-[1px] w-[15px] md:w-[23px] rounded-[8px] rotate-[40deg] bg-[#7AC52D]"></div>
      
  </div>
  </div>

      {/* Card Section */}
      <div className=" flex flex-col lg:pr-[55px]  lg:flex-row space-y-3  space-x-2 lg:space-x-4  items-center justify-center h-full py-[40px] ">
        <div className="flex lg:flex-row   space-x-2 lg:space-x-4 ">
          <div className="relative  w-[180px] lg:w-[370px] h-[300px] lg:h-[670px] bg-[rgba(236,232,82,0.1)] border-[rgba(0,0,0,0.2)] border lg:rounded-[30px]  rounded-[20px] flex flex-col ">
            {/* Card Content */}
            <div className="px-6 text-start lg:pt-2 pt-6 ">
              <p className="  lg:mt-6 text-[8px] leading-[11px]  w-[120px] lg:text-[15px] lg:leading-[23px] font-semibold   lg:w-[280px]">
                To Facilitate Global Education Payment
              </p>
              <p className="text-[5px] lg:text-[10px]   lg:pt-[25px] pt-[10px]  w-[114px] lg:w-[320px] font-thin text-gray-700">
                Pay4Me empowers international students to easily fund their
                educational pursuits by offering a diverse range of payment
                options, including visa fees, tuition, and other essential
                educational expenses.
              </p>
            </div>

            {/* Image Section */}
            <div className="p-2">
              <img
                src={phone}
                alt="Phone"
                className="lg:w-[350px] w-[320px] h-[194px] lg:h-[587px] object-contain"
              />
            </div>
          </div>

          {/* Second and Third Cards Container */}
          <div className="flex flex-col  lg:w-[290px]  space-y-2 ">
            {/* Second Card */}
            <div className="relative  px-4 flex-grow bg-[rgba(245,108,44,0.1)] lg:h-[300px] h-[130px] border-[rgba(0,0,0,0.2)] border w-[150px] lg:w-[290px] rounded-[20px] lg:rounded-[30px] flex flex-col ">
              {/* Card Content */}
              <div className=" text-start lg:pt-2 pt-6 ">
                <p className="lg:mt-6 text-[8px] leading-[11px]  w-[120px] lg:text-[15px] lg:leading-[23px] font-semibold    lg:w-[280px]">
                  To Foster Financial Inclusion
                </p>
                <p className="text-[5px] lg:text-[10px]   lg:pt-[25px] pt-[10px]  w-[114px]  lg:w-[260px] font-thin text-gray-700">
                  Pay4Me empowers international students to easily fund their
                  educational pursuits by offering a diverse range of payment
                  options, including visa fees, tuition, and other essential
                  educational expenses.
                </p>
              </div>

              {/* Image Section */}
              <div className="">
                <img
                  src={transfer}
                  alt="Transfer"
                  className="lg:w-[405px] w-[300px] h-[80px] lg:h-[200px] object-contain"
                />
              </div>
            </div>

            {/* Third Card */}
            <div className="relative  lg:h-[200px] w-[150px] h-[80px] lg:w-[290px] px-3 py-6 lg:py-6 lg:px-6 flex-grow bg-[rgba(227,240,175,0.1)] border-[rgba(0,0,0,0.2)] border rounded-[20px] lg:rounded-[30px]  flex flex-col ">
              {/* Card Content */}

              <div className="">
                <p className="lg:mt-2 text-[8px] leading-[11px]  w-[120px] lg:text-[15px] lg:leading-[23px] font-semibold    lg:w-[180px]">
                  Breaking Geographical Boundaries
                </p>
                <p className=" text-[5px] lg:text-[10px] lg:pt-[10px] pt-2 font-thin lg:w-[240px] text-gray-700">
                  Pay4Me app connects students and institutions across borders,
                  enabling seamless payment flows regardless of location.
                </p>
              </div>

              {/* Icons */}
              <div className="absolute left-[-65px] bottom-0 lg:left-[-0px] lg:bottom-5">
                <div className="absolute bottom-6 left-[90px] lg:bottom-16 lg:left-[50px] flex ">
                  <div className="lg:w-[33px] w-[16px]  rounded-full  border lg:border-[2px] border-brandSecondary">
                    <img
                      src={canada}
                      alt="Canada"
                      className="lg:w-[33px]  lg:h-[33px]  rounded-full object-cover "
                    />
                  </div>
                </div>
                <div className="absolute bottom-4 left-[130px] lg:bottom-12  lg:left-[130px] flex ">
                  <div className="lg:w-[33px] w-[20px]  rounded-full  border lg:border-[2px] border-brandSecondary">
                    <img
                      src={us}
                      alt="Canada"
                      className="lg:w-[33px]  lg:h-[33px]  rounded-full object-cover "
                    />
                  </div>
                </div>
                <div className="absolute bottom-6 left-[165px] lg:bottom-16 lg:left-[200px]  flex ">
                  <div className="lg:w-[30px] w-[15px]  rounded-full  border lg:border-[2px] border-brandSecondary">
                    <img
                      src={uk}
                      alt="Canada"
                      className="lg:w-[30px]  lg:h-[30px]  rounded-full object-cover "
                    />
                  </div>
                </div>
                <div className="absolute bottom-2 left-[160px] lg:left-[180px]  flex ">
                  <div className="lg:w-[24px] w-[12px]  rounded-full  border lg:border-[2px] border-brandSecondary">
                    <img
                      src={Korea}
                      alt="Canada"
                      className="lg:w-[24px]  lg:h-[24px]  rounded-full object-cover "
                    />
                  </div>
                </div>
                <div className="absolute bottom-1.5  lg:bottom-4  lg:left-[70px] left-[106px] flex ">
                  <div className="lg:w-[29px] w-[13px]  rounded-full  border lg:border-[2px] border-brandSecondary">
                    <img
                      src={Sweden}
                      alt="Canada"
                      className="lg:w-[29px]  lg:h-[29px]  rounded-full object-cover "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-row space-x-2  lg:flex-col lg:space-y-2  lg:h-[670px] lg:w-[200px]  ">
          {/* Forth Card */}
          <div className="relative flex-grow   h-[190px] w-[160px] lg:w-[290px] bg-[rgba(41,218,107,0.1)] border-[rgba(0,0,0,0.2)] border rounded-[20px] lg:rounded-[30px]  flex flex-col ">
            {/* Card Content */}

            <div className="px-4  text-start lg:pt-2 pt-6  ">
              <p className="lg:mt-6 text-[8px] leading-[11px]  w-[120px] lg:text-[15px] lg:leading-[23px] font-semibold    lg:w-[280px]">
                Breaking Geographical Boundaries
              </p>
              <p className="text-[5px] lg:text-[10px]   lg:pt-[25px] pt-[10px]  w-[114px]  lg:w-[240px] font-thin text-gray-700">
                Pay4Me app prioritizes user security by integrating with
                industry-leading payment gateways like Stripe and PayPal. These
                gateways employ robust security measures, including encryption,
                tokenization, and sophisticated fraud detection systems,
              </p>
            </div>
            {/* Image Section */}
            <div className="absolute bottom-0 right-[-10px]">
              <img
                src={atom}
                alt="Transfer"
                className="w-[80px] h-[60px] lg:w-[150px] lg:h-[140px] object-contain"
              />
            </div>
          </div>

          {/* fifth Card */}
          <div className="relative flex-grow   h-[190px] w-[160px] lg:w-[290px] bg-[rgba(249,248,2,0.1)] border-[rgba(0,0,0,0.2)] border rounded-[20px] lg:rounded-[30px]  flex flex-col ">
            {/* Card Content */}

            <div className="px-4  text-start lg:pt-2 pt-6  ">
              <p className="lg:mt-6 text-[8px] leading-[11px]  w-[120px] lg:text-[15px] lg:leading-[23px] font-semibold    lg:w-[280px]">
                Breaking Geographical Boundaries
              </p>
              <p className="text-[5px] lg:text-[10px]   lg:pt-[25px] pt-[10px]  w-[114px]  lg:w-[260px] font-thin text-gray-700">
                Pay4Me app prioritizes user security by integrating with
                industry-leading payment gateways like Stripe and PayPal. These
                gateways employ robust security measures, including encryption,
                tokenization, and sophisticated fraud detection systems,
              </p>
            </div>
            {/* Image Section */}
            <div className="absolute bottom-0 lg:bottom-[2px] lg:right-[5px] right-[-10px]">
              <img
                src={Frame}
                alt="Transfer"
                className="w-[80px] h-[60px] lg:w-[150px] lg:h-[140px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
