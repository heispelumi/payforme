import React from 'react';
import phone from '../assets/about/phone.png';
import transfer from '../assets/about/transfer.png';
import canada from '../assets/about/canada.png';
import us from '../assets/about/us.png';
import uk from '../assets/about/uk.png';
import Korea from '../assets/about/Korea.png';
import Sweden from '../assets/about/Sweden.png';
import atom from '../assets/about/atom.png';
import Frame from '../assets/about/Frame.png';

const About = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      {/* Title Section */}
      <div className="text-center pt-[60px]">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Why We Built the Pay4me App
        </h1>
      </div>

      {/* Card Section */}
      <div className=" flex flex-col lg:flex-row  space-x-4  items-center justify-center h-full py-[70px] ">


        <div className='flex lg:flex-row space-x-4 '>
        <div className="relative   lg:w-[370px] lg:h-[670px] bg-[rgba(236,232,82,0.1)] border-[rgba(0,0,0,0.2)] border rounded-[40px] flex flex-col items-center">
          {/* Card Content */}
          <div className="pt-6 ">
            <p className=" mt-6 text-[20px] leading-[29px] font-semibold w-[300px]">
              To Facilitate Global Education Payment
            </p>
            <p className="text-[12px] pt-[20px] w-[300px] font-thin text-gray-700">
              Pay4Me empowers international students to easily fund their
              educational pursuits by offering a diverse range of payment
              options, including visa fees, tuition, and other essential
              educational expenses.
            </p>
          </div>

          {/* Image Section */}
          <div className="pb-10">
            <img
              src={phone}
              alt="Phone"
              className="lg:w-[350px] lg:h-[500px] object-contain"
            />
          </div>
        </div>





        {/* Second and Third Cards Container */}
        <div className="flex flex-col  lg:w-[325px]   space-y-2 ">
          {/* Second Card */}
          <div className="relative  px-4 flex-grow bg-[rgba(245,108,44,0.1)] h-[300px] border-[rgba(0,0,0,0.2)] border w-[310px] rounded-[40px] flex flex-col items-center">
            {/* Card Content */}
            <div className="mt-6 pt-8">
              <p className="text-[20px] leading-[29px]  font-semibold w-[280px]">
                To Foster Financial Inclusion
              </p>
              <p className="text-[11px] pt-[20px] w-[260px] font-thin text-gray-700">
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
                className="lg:w-[205px] lg:h-[200px] object-contain"
              />
            </div>
          </div>

          {/* Third Card */}
          <div className="relative  h-[200px] w-[310px] py-8 px-6 flex-grow bg-[rgba(227,240,175,0.1)] border-[rgba(0,0,0,0.2)] border rounded-[40px] flex flex-col items-center">
            {/* Card Content */}
            <div className='pb-10'>
            <div className="">
              <p className="text-[16px] leading-[24px] font-semibold w-[200px]">
                Breaking Geographical Boundaries
              </p>
              <p className=" text-[11px] pt-[10px] font-thin text-gray-700">
                Pay4Me app connects students and institutions across borders,
                enabling seamless payment flows regardless of location.
              </p>
            </div>

            </div>

            {/* Icons */}
            <div className='absolute left-0 bottom-8'>
            <div className="absolute bottom-12  left-[70px] flex ">

                <div className='w-[28px] rounded-full border-[2px] border-brandSecondary'>
              <img
                src={canada}
                alt="Canada"
                className="w-[28px] h-[24px] rounded-full "
              />
                </div>
           
            </div>
            <div className="absolute bottom-9 left-[135px] flex ">

                <div className='w-[33px] rounded-full border-[4px] border-brandSecondary'>
              <img
                src={us}
                alt="Canada"
                className="w-[33px] h-[25px] rounded-full "
              />
                </div>
           
            </div>
            <div className="absolute bottom-[52px] left-[200px] flex ">

                <div className='w-[28px] rounded-full border-[2px] border-brandSecondary'>
              <img
                src={uk}
                alt="Canada"
                className="w-[28px] h-[24px] rounded-full "
              />
                </div>
           
            </div>
            <div className="absolute bottom-[20px] left-[180px] flex ">

                <div className='w-[22px] rounded-full border-[2px] border-brandSecondary'>
              <img
                src={Korea}
                alt="Canada"
                className="w-[22px] h-[18px] rounded-full "
              />
                </div>
           
            </div>
            <div className="absolute bottom-4 left-[90px] flex ">

                <div className='w-[24px] rounded-full border-[2px] border-brandSecondary'>
              <img
                src={Sweden}
                alt="Canada"
                className="w-[24px] h-[18px] rounded-full "
              />
                </div>
           
            </div>
            </div>
          </div>
        </div>

        </div>

        <div className="flex flex-row lg:flex-col  lg:w-[310px] lg:h-[700px]">
          {/* Forth Card */}
          <div className="relative flex-grow h-[250px] w-[315px] bg-[rgba(41,218,107,0.1)] border-[rgba(0,0,0,0.2)] border rounded-[40px] flex flex-col items-center">
            {/* Card Content */}
            <div className="py-8 px-8">
              <p className="text-[16px] leading-[29px] font-semibold w-[260px]">
              To Improve Convenience
                and Accessibility
              </p>
              <p className="text-[12px] pt-[20px] w-[280px] font-thin text-gray-700">
              Pay4Me App provides access to payment services anytime, anywhere, making it convenient for users across different time zones
              </p>
            </div>

            {/* Image Section */}
            <div className="absolute bottom-0 right-0">
              <img
                src={atom}
                alt="Transfer"
                className=" object-contain"
              />
            </div>
          </div>

          {/* fifth Card */}
          <div className="relative py-8 px-8 flex-grow bg-[rgba(249,248,2,0.1)] border-[rgba(0,0,0,0.2)] border rounded-[40px] flex flex-col items-center">
            {/* Card Content */}
            <div className='pb-10'>
            <div className="">
              <p className="text-[16px] leading-[24px] font-semibold w-[200px]">
                Breaking Geographical Boundaries
              </p>
              <p className="text-[11px] w-[280px] pt-[6px] font-thin text-gray-700">
              Pay4Me app prioritizes user security by integrating with industry-leading payment gateways like Stripe and PayPal. These gateways employ robust security measures, including encryption, tokenization, and sophisticated fraud detection systems,
              </p>
            </div>
                {/* Image Section */}
            <div className="absolute bottom-0 right-0">
              <img
                src={Frame}
                alt="Transfer"
                className="w-[200px] h-[2 00px] object-contain"
              />
            </div>

            </div>

        
          </div>
          
        </div>



      </div>
    </div>
  );
};

export default About;
