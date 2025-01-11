import pic from '../assets/pic.png'

const Hero = () => {
    return (
    <div className='flex items-center  justify-center mt-[180px]'>
          <div className='w-[430px] h-[48px] items-center justify-center  '>

        <div className='flex w-full items-center mx-8  border-brandPrimary rounded-xl  border-dotted border-[2px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] gap-[14px] bg-[#AFE27429] '>
        <div className='w-[100.27px] h-[32px]'>
        <img src={pic} alt="/" />   
        </div>

        <div className='w-[300px] h-[16px]'>
            <p className='text-[13px] text-brandPrimary font-bold  leading-[16.12px]'>Joined by a global community of students</p>
        </div>

    </div> 

          </div>
    </div>
    );
  };

  

  export default Hero;