import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

const Faq = () => {
  // FAQ Data
  const faqData = [
    {
      question: "What is Pay4Me?",
      answer:
        "Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad.",
    },
    {
      question: "How does the Pay4Me app work?",
      answer:
        "The app provides various payment methods: credit/debit cards, bank transfers, or mobile wallets.",
    },
    {
      question: "What is the payment processing timeline on the Pay4Me App?",
      answer: "Yes! Pay4Me uses industry-standard encryption to protect user data.",
    },
    {
      question: "How do I get started using the Pay4Me App?",
      answer: "Download the Pay4Me app, enter your details, and create an account.",
    },
    {
      question: "Who can use the Pay4Me App?",
      answer: "Yes!",
    },
  ];

  return (
    <div className="w-full pt-[50px] pb-[50px] lg:pt-[60px] flex flex-col bg-white mx-auto items-center">
      {/* Header Section */}
      <div className="flex items-center text-center pt-[40px] lg:pt-[60px] gap-3">
        <div className="flex flex-col md:gap-3 gap-2">
          <div className="md:h-[3px] h-[1px] w-[15px] md:w-[23px] rounded-[8px] rotate-[40deg] bg-[#7AC52D]"></div>
          <div className="md:h-[3px] h-[1px] w-[15px] md:w-[23px] rounded-[8px] md:ml-[-10px] ml-[-2px] bg-[#7AC52D]"></div>
          <div className="md:h-[3px] h-[1px] w-[15px] md:w-[23px] rounded-[8px] rotate-[-40deg] bg-[#7AC52D]"></div>
        </div>
        <h1 className="text-[15px] md:text-[30px]  lg:text-[35px] font-bold">FAQs</h1>
        <div className="flex flex-col md:gap-3 gap-2">
          <div className="md:h-[3px] h-[1px] w-[15px] md:w-[23px] rounded-[8px] rotate-[-40deg] bg-[#7AC52D]"></div>
          <div className="md:h-[3px] h-[1px] w-[15px] md:w-[23px] ml-[5px] bg-[#7AC52D]"></div>
          <div className="md:h-[3px] h-[1px] w-[15px] md:w-[23px] rounded-[8px] rotate-[40deg] bg-[#7AC52D]"></div>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="w-[300px] md:w-[520px] lg:w-[720px] py-[30px] lg:py-[70px] space-y-8">
        {faqData.map((faq, index) => (
          <Accordion key={index} title={faq.question} content={faq.answer} />
        ))}
      </div>

      {/* Link Section */}
      <div className="flex items-center pt-4 text-[12px] lg:pt-[16px] md:text-[16px] lg:text-[15px]">
        <span className="text-black mr-[2px]">Have more questions?</span>
        <a href="#" className="text-brandPrimary underline">
          See the full FAQs
        </a>
      </div>
    </div>
  );
};

// Accordion Component
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border lg:w-[768px] border-gray-300 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex items-center">
        <button
          className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-200 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[8px] md:text-[10px] lg:text-[20px] font-thin">
            {title}
          </span>
          {isOpen ? <GrSubtractCircle /> : <IoIosAddCircleOutline />}
        </button>
      </div>

      {/* Content Section */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className=''>
        <div className="p-4 text-[8px] md:text-[7px] lg:text-[15px]  font-thin bg-white text-gray-700">
          {content}
        </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Faq;
