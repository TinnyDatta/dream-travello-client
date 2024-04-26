
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
  useEffect(()=> {
    Aos.init({duration: 2000});
  },[])
    return (
        <div>
            <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <div className='relative' data-aos = "zoom-in">
           <img className=' lg:w-[1152px] h-[500px] rounded-xl bg-opacity-100 opacity-100' src="/images/slide1.jpg" alt="" /> 
           <div>
            <h2 className="absolute sm:top-[15%] md:-top[35%] lg:top-[30%] sm:left-[15%] md:left-[20%] lg:left-[25%] text-5xl font-bold text-white ">Welcome to <span className='text-purple-600'>DreamTravello</span></h2>
            <p className='text-5xl font-extrabold text-base-100 absolute sm:top-[25%] md:top-[30%] lg:top-[40%] sm:left-[10%] md:left-[15%] lg:left-[20%]'>Explore The World Together.</p>
            <p className='text-2xl font-semibold text-base-100 absolute sm:top-[35%] md:top-[45%] lg:top-[50%] sm:left-[10%] md:left-[15%] lg:left-[5%]'>For Choosing destination, our main concerns are <span className='text-3xl font-extrabold text-purple-500'>Safety</span> and <span className='text-3xl font-extrabold text-purple-500'>Budget</span>. We have a variety of price and area ranges so that people of all background can explore their travel dream.</p>
            <p className='text-2xl bg-purple-500 px-4 mt-4 text-white absolute sm:top-[45%] md:top-[65%] lg:top-[65%] sm:left-[10%] md:left-[15%] lg:left-[35%]'>Slide to see some nice demos</p>
           </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='relative' data-aos = "zoom-in">
           <img className=' lg:w-[1152px] h-[500px] rounded-xl bg-opacity-100 opacity-100' src="/images/slide2.jpg" alt="" /> 
           <div>
            <h2 className="absolute sm:top-[15%] md:-top[45%] lg:top-[30%] sm:left-[15%] md:left-[15%] lg:left-[25%] text-3xl font-semibold bg-sky-100 text-purple-600 lg:px-3 ">Is not it is a peaceful and awesome place? </h2>
            <p className='text-2xl  bg-sky-100 text-purple-600 absolute sm:top-[25%] md:top-[35%] lg:top-[40%] sm:left-[10%] md:left-[15%] lg:left-[35%]'>There are many more with lots of variation.</p>
            </div>
           </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='relative' data-aos = "zoom-in">
           <img className=' lg:w-[1152px] h-[500px] rounded-xl bg-opacity-100 opacity-100' src="/images/slide3.jpg" alt="" /> 
           <div>
            <h2 className="absolute sm:top-[15%] md:-top[45%] lg:top-[30%] sm:left-[15%] md:left-[15%] lg:left-[15%] text-2xl font-semibold bg-sky-100 text-purple-600 lg:px-3 ">Any people DreamTravello do not need to worry about safety. </h2>
            <p className='text-2xl  bg-sky-100 text-purple-600 absolute sm:top-[15%] md:top-[35%] lg:top-[45%] sm:left-[10%] md:left-[15%] lg:left-[25%]'>We design every tour according to individuals demand.</p>
            </div>
           </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='relative' data-aos = "zoom-in">
           <img className=' lg:w-[1152px] h-[500px] rounded-xl bg-opacity-100 opacity-100' src="/images/slide4.jpg" alt="" /> 
           <div>
            <h2 className="absolute sm:top-[15%] md:-top[45%] lg:top-[55%] sm:left-[15%] md:left-[5%] lg:left-[15%] text-2xl font-semibold bg-sky-100 text-purple-600 lg:px-3 ">Every travel lover person will be amazed seeing these natural travel places  </h2>
            <p className='text-2xl  bg-sky-100 text-purple-600 absolute sm:top-[25%] md:top-[35%] lg:top-[70%] sm:left-[10%] md:left-[5%] lg:left-[20%]'>These natural places will add more pleasure to your journey.</p>
            </div>
           </div>
        </SwiperSlide>
    
    </Swiper>
        </div>
    );
};

export default Banner;