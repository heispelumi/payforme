import pic from "../assets/pic.png";
import creditcard from "../assets/creditcard.png";
import Graduation from "../assets/Graduation.png";
import profits from "../assets/profits.png";
import Vector2 from "../assets/Vector2.png";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="flex  items-center relative   h-full justify-center ">
      {/* Top Hero button */}
      <div className="flex items-center justify-center w-[178px] ml-[-10px] h-[32px] md:w-[430px]  md:h-[48px]  ">
        <div className="flex w-full items-center md:mx-[-24px] lg:mx-4 border-brandPrimary rounded-xl border-dotted border-[2px] pt-[8px] pr-[12px] pb-[8px] md:pt-[16px] pl-[20px] gap-[14px] md:pr-[20px] md:pb-[16px] md:pl-[20px] md:gap-[14px] bg-[#AFE27429]">
          <div className="w-[20px] h-[25] md:w-[100.27px] md:h-[32px]">
            <img src={pic} alt="/" />
          </div>

          <div className="md:w-[300px] w-[120px] h-[9px] md:h-[16px]">
            <p className="text-[5.3px] md:text-[13px] text-brandPrimary font-bold leading-[10px] md:leading-[16.12px]">
              Joined by a global community of students
            </p>
          </div>
        </div>
      </div>

      {/* Hero text */}
      <div className="w-[1104px.91px]  md:h-[372px] h-[250px] md:top-[148.79px] ">
        <div className="relative flex-col items-center left-[30px]  md:left-[-20px] justify-center">



   

          {/* Image1 */}
          <div className="absolute w-[45px] h-[30px] md:w-[80px] md:h-[100px] top-[185.38px] md:top-[260.38px] lg:top-[264.38px] right-[245px] md:right-[470px]  lg:right-[700px] transform rotate-37.21">
            <img src={creditcard} alt="" />
          </div>

          {/* Image2 */}
          <div className="absolute w-[45px] h-[30px] md:w-[80px]  lg:w-[126px] md:h-[90.46px] top-[330.38px] md:top-[430.38px] lg:top-[500.38px] right-[200px] md:right-[410px] lg:right-[500px] transform rotate-37.21">
            <img src={Graduation} alt="" />
          </div>

          {/* Image3 */}
          <div className="absolute w-[45px] h-[45px] lg:w-[80px] md:h-[100px] top-[182.38px]  left-[15px] md:left-[66px] lg:left-[240px] lg:top-[260.38px]  md:top-[260.38px]  transform rotate-37.21">
            <img src={profits} alt="" />
          </div>

          {/* Image4 */}
          <div className="absolute w-[30px] h-[30px] md:h-[90px] left-[-30px] top-[340.32px] sm:w-[60px] sm:h-[110px] md:w-[50px] md:left-[10px] lg:left-[120px] lg:top-[520px] md:top-[440px] lg:w-[80px] lg:h-[150px] transform rotate-37.21">
            <img src={Vector2} alt="Decorative Element" />
          </div>

          
          <div className="absolute flex flex-col items-center  w-[417.52px]  mt-[-105px] md:mt-0 lg:h-[80px] h-[10px] pl-[350px] md:pl-[0px]  md:w-[742px] md:h-[120px] top-[290px] md:left-[-580px]  left-[-500px] text-center">
            {/* Central h1 Text */}
            <div className="text-[18px] w-[300px] md:w-[500px] lg:w-[700px]  md:text-[30px] lg:text-[48px]  font-semibold lg:leading-[59.52px]   md:leading-[38.52px] leading-[20.52px]   text-center">
              <h1> 
                Cross-border{" "}
                <span className="relative">
                  Payment
                  <span className="absolute bottom-0 left-0 w-[60px] h-[3.52px] md:w-[150px] lg:w-[200px] lg:h-[10px] bg-brandSecondary block mx-auto"></span>
                </span>{" "}
                for
              </h1>
              <h1>International Students</h1>
            </div>

            <div className="w-[159px]  h-[27px] text-[7.6px] leading-[10.72px] my-6  md:w-[320px] md:h-[60px] md:text-[12px] md:leading-[19px] md:my-8  lg:w-[542px] lg:h-[90px] font-[400px] lg:text-[24px] lg:leading-[29.76px] lg:my-8  align-middle text-[#111827B2] ">
              <p>
                The easiest and fastest way to pay tuition and fees to
                educational institutions, businesses, and government agencies
                worldwide.
              </p>
            </div>

            {/* Button */}
            <div className="flex ">
              <button className="relative -top-1 -left-1 rounded-xl border-[1px] leading-[14.52px]  lg:leading-[19.84px] lg:w-[154px] w-[120px] h-[35px] lg:h-[45px] lg:text-[13.5px] text-[10px] bg-brandPrimary py-1.5 lg:py-2.5 md:px-6 px-2 text-white transition-all before:absolute before:top-1.5 before:border-brandPrimary before:border-[2px] before:left-2  before:-z-[1] before:rounded-xl before:h-full before:w-full before:bg-brandSecondary before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
                Read more
              </button>
            </div>

            {/* Image */}
            <div className="w-[300px] h-[235px] ml-[55px] mt-[65px]  md:w-[500px] md:h-[320px] md:ml-[130px] md:mt-[40px]  lg:mt-[80px] lg:w-[960px] lg:h-[536px]  lg:ml-[260px] lg:left-[315px] ">
              <img src={hero} alt="/" />
            </div>
          </div>

        </div>


      </div>

    
    


    </div>
  );
};

export default Hero;
