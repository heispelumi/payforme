import s1 from '../assets/sponsors/s1.png'
import s2 from '../assets/sponsors/s2.png'
import s3 from '../assets/sponsors/s3.png'
import s4 from '../assets/sponsors/s4.png'
import s5 from '../assets/sponsors/s5.png'




const Partnership = () => {
  return (
    <div className="flex items-center justify-center w-full   bg-gray-100">
      {/* Content Container */}
      <div className="relative w-full max-w-[266px] bg-gray-100 p-4 flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="flex items-center justify-center">
          <h1 className="text-xl md:text-2xl font-bold text-center">In Good Company</h1>
        </div>


        {/* Imgages  */}
        <div className='flex flex-row p-4 md:p-12 space-x-3'>
        <div className='w-[50px] h-[10px] md:w-[90px] md:h-[20px]  lg:w-[140px] lg:-[50px]'>
          <img src={s1} alt="" />
        </div>
        <div className=' w-[50px] h-[10px]  md:w-[90px] md:h-[20px] lg:w-[140px] lg:h-[50px]'>
          <img src={s2} alt="" />
        </div>
        <div className=' w-[50px] h-[10px] md:w-[90px] md:h-[20px] lg:w-[140px] lg:h-[50px]'>
          <img src={s3} alt="" />
        </div>
        <div className=' w-[50px] h-[10px] md:w-[90px] md:h-[20px] lg:w-[140px] lg:-[50px]'>
          <img src={s4} alt="" />
        </div>
        <div className=' w-[50px] h-[10px] md:w-[90px] md:h-[20px] lg:w-[140px] lg:h-[50px]'>
          <img src={s5} alt="" />
        </div>


        </div>

        {/* link */}
        <div className="  pt-4 text-[12px] md:text-[16px] lg:text-[22px]">
          <a
            href="#"
            className="text-brandPrimary underline "
          >
            See More Sponsors
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partnership;