import pic from "../assets/pic.png";
import creditcard from "../assets/creditcard.png";
import Graduation from "../assets/Graduation.png";
import profits from "../assets/profits.png";
import Vector from "../assets/Vector.png";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="flex items-center  justify-center">
      {/* Top Hero button */}
      <div className="w-[300px] h-[32px] md:w-[430px] md:h-[48px] items-center justify-center">
        <div className="flex w-full items-center md:mx-[-24px] lg:mx-4 border-brandPrimary rounded-xl border-dotted border-[2px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] gap-[14px] bg-[#AFE27429]">
          <div className="w-[60px] h-[25] md:w-[100.27px] md:h-[32px]">
            <img src={pic} alt="/" />
          </div>

          <div className="md:w-[300px] w-[280px] h-[5px] md:h-[16px]">
            <p className="text-[9px] md:text-[13px] text-brandPrimary font-bold leading-[9px] md:leading-[16.12px]">
              Joined by a global community of students
            </p>
          </div>
        </div>
      </div>




      {/* Hero text */}
      <div className="w-[1104px.91px] md:h-[372px] h-[250px] md:top-[148.79px]  left-[84px]">


        <div className="relative flex flex-col items-center justify-center">
          {/* Image1 */}
          <div className="absolute w-[45px] h-[60px] md:w-[80px] md:h-[100px] top-[264.38px] right-[600px] transform rotate-37.21">
            <img src={creditcard} alt="" />
          </div>

          {/* Image2 */}
          <div className="absolute w-[126px] h-[90.46px] top-[480.38px] right-[460px] transform rotate-37.21">
            <img src={Graduation} alt="" />
          </div>

          {/* Image3 */}
          <div className="absolute w-[80px] h-[100px] top-[274.38px] left-[180px] transform rotate-37.21">
            <img src={profits} alt="" />
          </div>

          {/* Image4 */}
          <div className="absolute w-[126px] h-[90.46px] top-[500.38px] left-[65px] transform rotate-37.21">
            <img src={Vector} alt="" />
          </div>

          <div className="absolute flex flex-col items-center w-[517.52px] mt-[-105px] md:mt-0 lg:h-[80px] h-[10px]  md:w-[742px] md:h-[120px] top-[290px] md:left-[-580px]  left-[-420px] text-center">
            {/* Central h1 Text */}
            <div className="text-[20px]  md:text-[30px] lg:text-[48px]  font-semibold lg:leading-[59.52px]  md:leading-[38.52px] leading-[24.52px]   text-center">
              <h1>
                Cross-border{" "}
                <span className="relative">
                  Payment
                  <span className="absolute bottom-0 left-0 w-[94px] h-[6px] md:w-[150px] lg:w-[200px] lg:h-[10px] bg-brandSecondary block mx-auto"></span>
                </span>{" "}
                for
              </h1>
              <h1>International Students</h1>
            </div>

            <div className="w-[360px] px-6 h-[40px] text-[14px] leading-[24px] my-8  md:w-[420px] md:h-[60px] md:text-[18px] md:leading-[24px] md:my-8  lg:w-[542px] lg:h-[90px] font-[400px] lg:text-[24px] lg:leading-[29.76px] lg:my-8  align-middle text-[#111827B2] ">
              <p>
                The easiest and fastest way to pay tuition and fees to
                educational institutions, businesses, and government agencies
                worldwide.
              </p>
            </div>

            {/* Button */}
            <div className="flex my-8">
          <button className="relative -top-1 -left-1 rounded-xl border-[1px] leading-[19.84px] w-[154px] h-[45px] text-[13.5px] bg-brandPrimary py-2.5 md:px-6 px-2 text-white transition-all before:absolute before:top-2 before:border-brandPrimary before:border-[2px] before:left-2 before:-z-[1] before:rounded-xl before:h-full before:w-full before:bg-brandSecondary before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
            Read more
          </button>
             </div>

            {/* Image */}
            <div className=" w-[300px] h-[235px] ml-[60px] my-[20px]  md:w-[500px] md:h-[320px] md:ml-[150px] md:my-[20px]  lg:w-[960px] lg:h-[536px] lg:my-[50px] lg:ml-[250px] lg:left-[315px] ">
              <img src={hero} alt="/" />
            </div>
          </div>
        </div>


      </div>


    </div>
  );
};

export default Hero;
