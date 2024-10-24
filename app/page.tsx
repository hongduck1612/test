"use client";
import Image from "next/image";
import ligh_img from "../app/public/image/top-lightimage.png";
import about_img2 from "../app/public/image/about-image2.png";
import about_img1 from "../app/public/image/about-image1.png";
import { motion } from "framer-motion"
import process_1 from "../app/public/image/process-icon1.png";
import process_2 from "../app/public/image/process-icon2.png";
import process_3 from "../app/public/image/process-icon3.png";
import work_img from '../app/public/image/work-imagebackground.jpg'
import work_img2 from '../app/public/image/work-image.jpg'
import recentwork_image1 from './public/image/recentwork-image1.jpg'
import recentwork_image2 from './public/image/recentwork-image2.jpg'
import recentwork_image3 from './public/image/recentwork-image3.jpg'
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowUpRight, Plus } from "lucide-react";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Service from "./components/Service";
import Journey from "./components/Journey";
import Blog from "./components/Blog";
import { useEffect, useState } from "react";



export default function Home() {

  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 375 && window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <Banner/>
      <Service/>
      <div className="about-section relative pt-[145px] pb-[120px] custom-mobile:pt-[100px] custom-mobile:pb-[80px] lg:pt-[200px] lg:pb-[150px]">
        <div className="left-[1340px] z-0 lg:block custom-mobile:hidden lg:left-[1500px]">
          <Image className="absolute top-0 right-4" src={ligh_img} alt="" width={156} height={284}/>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-5 relative z-10 custom-mobile:gap-2 lg:gap-8">
          <motion.div
            
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5, repeatType: "loop",}}
            className="lg:block custom-mobile:px-[15px] lg:px-[35px]"
            >
            <Image className="z-10" src={about_img1} width={457} height={533} alt="about_img1" />
          </motion.div>
          <div className="w-[457px] h-[533px] px-4 custom-mobile:w-[300px] custom-mobile:h-[400px] lg:w-[500px] lg:h-[600px] text-center lg:text-left mt-6 lg:mt-0">
            <div data-aos="fade-right">
              <p className="text-primary tracking-widest custom-mobile:text-[14px] custom-mobile:px-[15px] custom-mobile:mb-[6px] lg:text-[18px]">About Us</p>
              <p className="lg:leading-[58px] font-semibold custom-mobile:text-[18px] custom-mobile:mb-[10px] lg:text-[48px]">We Provide Best Interior Design Services</p>
              <p className="pl-[17px] lg:text-center custom-mobile:text-start mb-[18px] text-[20px] font-medium border-l border-l-[#E1B261] custom-mobile:pl-[10px] custom-mobile:mb-[10px] custom-mobile:text-[14px] lg:pl-[20px] lg:mb-[20px] lg:text-[22px]">
                Molestias exceaturi sint ecaecati cua non provident similiue
              </p>
              <p className="text-[#A7A7A7]  pb-[32px] text-[20px] custom-mobile:text-[16px] lg:text-[22px]">
                Dolores aet ruas molestias exceaturi sint ecaecati cupiditate non provident, similiue sunt in culpa qui officia deserunt mollitia animi facere omnis.
              </p>
            <div className="flex items-center group gap-4 w-fit custom-mobile:gap-2 lg:gap-6">
              <a className="items-center text-[#ffff] custom-mobile:pl-[70px] group-hover:text-primary custom-mobile:text-[14px] lg:text-[22px]" href="./service.html">
                Read More
              </a>
              <span className="border text-primary border-[#E1B261] group-hover:text-[#ffff] group-hover:bg-[#E1B261] transition-all duration-800 rounded-full cursor-pointer custom-mobile:p-2 lg:p-5">
                <ArrowUpRight />
              </span>
            </div>
          </div>
        </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={ { duration: 1.5, ease: 'easeOut', delay: 1, repeatType: "loop", }}
            className="custom-mobile:hidden lg:block custom-mobile:px-[15px] lg:px-[35px]"
            >
            <Image className="z-10" src={about_img2} width={457} height={533} alt="about_img2" />
          </motion.div>
      </div>
      </div>
      <div className="process-section pt-[142px] pb-[150px] lg:pt-[142px] lg:pb-[150px] custom-mobile:pt-[100px] custom-mobile:pb-[80px]">
        <div className="container mx-[120px] px-20 lg:mx-[120px] lg:px-20 custom-mobile:mx-[30px] custom-mobile:px-5">
          <div className="text-center" data-aos="fade-up">
            <p className="text-[18px] pb-[18px] text-primary tracking-[2px]">Our Process</p>
            <h2 className="text-[46px] mb-[48px] font-semibold custom-mobile:text-[36px]">See How We Work For You</h2>
          </div>
          {/* Điều chỉnh layout cho màn hình từ 375px đến dưới 1024px */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
            {/* Phần tử 01 */}
            <div className="w-fit pt-[50px] relative lg:pb-[20px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary hover:-translate-y-2 transition-all duration-700 custom-mobile:pt-[30px] custom-mobile:pb-[20px] custom-mobile:px-[20px]">
              <p className="text-[80px] font-semibold leading-[90px] text-primary mb-[18px] custom-mobile:text-[60px] custom-mobile:mb-[10px]">01</p>
              <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px] custom-mobile:text-[18px]">Strategy and Planning</h5>
              <p className="font-normal text-[#a7a7a7] text-[18px] custom-mobile:text-[16px]">Aut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
              <Image className="relative top-[-200px] right-[-200px] custom-mobile:mt-4 hover:-translate-y-2 transition-all duration-700" src={process_1} width={78} height={78} alt="process_1" />
            </div>
            {/* Phần tử 02 */}
            <div className="w-fit pt-[50px] relative lg:pb-[20px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary hover:-translate-y-2 transition-all duration-700 custom-mobile:pt-[30px] custom-mobile:pb-[20px] custom-mobile:px-[20px]">
              <p className="text-[80px] font-semibold leading-[90px] text-primary mb-[18px] custom-mobile:text-[60px] custom-mobile:mb-[10px]">02</p>
              <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px] custom-mobile:text-[18px]">Concept Design</h5>
              <p className="font-normal text-[#a7a7a7] text-[18px] custom-mobile:text-[16px]">Dut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
              <Image className="relative top-[-200px] right-[-200px] custom-mobile:mt-4 hover:-translate-y-2 transition-all duration-700" src={process_2} width={78} height={78} alt="process_2" />
            </div>
            {/* Phần tử 03 */}
            <div className="w-fit pt-[50px] relative lg:pb-[20px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary hover:-translate-y-2 transition-all duration-700 custom-mobile:pt-[30px] custom-mobile:pb-[20px] custom-mobile:px-[20px]">
              <p className="text-[80px] font-semibold leading-[90px] text-primary mb-[18px] custom-mobile:text-[60px] custom-mobile:mb-[10px]">03</p>
              <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px] custom-mobile:text-[18px]">Design Development</h5>
              <p className="font-normal text-[#a7a7a7] text-[18px] custom-mobile:text-[16px]">Aut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
              <Image className="relative top-[-200px] right-[-200px] custom-mobile:mt-4 hover:-translate-y-2 transition-all duration-700" src={process_3} width={78} height={78} alt="process_3" />
            </div>
          </div>
        </div>
      </div>
      <div className="work-section flex justify-center relative lg:pt-[94px] lg:pb-[174px] custom-mobile:pt-[24px] custom-mobile:pb-[48px]">
        <div className="absolute left-[57px] lg:block custom-mobile:hidden top-0">
          <Image className="" src={ligh_img} alt="" width={157} height={284} />
        </div>
        <div className="container lg:flex lg:flex-row items-center lg:gap-2 mx-auto px-20 custom-mobile:flex-col">
          <div className="work-content">
            <div className="px-4 flex gap-0">
              <p className="lg:text-[250px] font-bold lg:leading-[250px] pb-2 custom-mobile:text-[144px] custom-mobile:leading-[152px]">10</p>
              <span>
                <Plus
                  size={isMobile ? 80 : 150}
                  color="#E1B261"
                  strokeWidth={isMobile ? 2 : 3}
                />
              </span>
            </div>
            <h2 className="lg:text-[46px] lg:leading-[58px] font-semibold custom-mobile:text-[18px] lg:text-start custom-mobile:text-center custom-mobile:leading-[26px]">Years of Successful Work in Market</h2>
            <p className="flex items-center gap-5 w-fit lg:pt-[48px] custom-mobile:pt-[20px] custom-mobile:mb-[30px] custom-mobile:pl-[40px] group cursor-pointer">
              <a className="group-hover:text-primary transition-all duration-300 lg:text-[20px] custom-mobile:text-[14px] font-medium leading-[26px]" href="">
                Discover More
              </a>
              <span className="rounded-full text-primary bg-[transparent] border border-[#E1B261] lg:p-5 custom-mobile:p-3 group-hover:bg-[#E1B261] group-hover:text-[#fff] transition-all duration-300">
                <ArrowUpRight />
              </span>
            </p>
          </div>
          <div className="work-content pl-2">
            <Image className="custom-mobile:mt-[-10px] custom-mobile:ml-[30px]" data-aos="fade-up" src={work_img} alt="work_img" width={720} height={550} />
            <Image className="lg:mt-[-400px] lg:ml-[-30px] custom-mobile:mt-[-155px] custom-mobile:ml-[10px]" data-aos="fade-right" src={work_img2} alt="work_img" width={720} height={550} />
          </div>
        </div>
      </div>
      <div className="recentwork-section lg:pt-[142px] lg:pb-[140px] custom-mobile:px-[15px] custom-mobile:py-[55px]">
        <div className="container mx-auto px-4">
          <div>
            <div>
              <div className="recentwork_content text-center" data-aos="fade-up">
                <h6 className="lg:text-lg font-normal lg:mb-[18px] custom-mobile:mb-[6px] text-primary tracking-[2px] custom-mobile:text-[14px] custom-mobile:leading-[20px]">What’s New</h6>
                <h2 className="lg:text-[46px] custom-mobile:text-[18px] custom-mobile:leading-[23px] lg:leading-[46px] font-semibold text-white">Recent Work We Have Done</h2>
              </div>
            </div>
          </div>
          <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides = {true}
          spaceBetween={60}
          loop={true}
          slidesPerView={1.5}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination = {{el: '.swiper-pagination', clickable: true,}}
          modules={[EffectCoverflow,Pagination,Navigation, Autoplay]}
          className="recentwork-carousel mt-12"
        >
          <SwiperSlide className="scale-75 swiper-slide">
            <div className="relative">
              <figure className="recentwork-image mb-0">
                <Image
                  src={recentwork_image1}
                  className="w-full h-auto object-cover"
                  alt="Recent Work 1"
                />
              </figure>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-8">
                <span className="text-white lg:text-lg custom-mobile:text-[10px]">Interior – Luxury Living</span>
                <h4 className="text-white lg:text-3xl font-bold custom-mobile:text-[13px]">Kawa - Glamorous Penthouse</h4>
                <a className="text-decoration-none mt-4" href="/portfolio">
                  <div className="flex justify-center items-center bg-primary hover:-translate-y-2 transition-all duration-300 lg:w-12 lg:h-12 rounded-full">
                    <ArrowUpRight/>
                  </div>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="scale-75 swiper-slide">
            <div className="relative">
              <figure className="recentwork-image mb-0">
                <Image
                  src={recentwork_image1}
                  className="w-full h-auto object-cover"
                  alt="Recent Work 1"
                />
              </figure>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-8">
                <span className="text-white lg:text-lg custom-mobile:text-[10px]">Interior – Luxury Living</span>
                <h4 className="text-white lg:text-3xl font-bold custom-mobile:text-[13px]">Kawa - Glamorous Penthouse</h4>
                <a className="text-decoration-none mt-4" href="/portfolio">
                  <div className="flex justify-center items-center bg-primary hover:-translate-y-2 transition-all duration-300 lg:w-12 lg:h-12 rounded-full">
                    <ArrowUpRight/>
                  </div>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="scale-75 swiper-slide">
            <div className="relative">
              <figure className="recentwork-image mb-0">
                <Image
                  src={recentwork_image1}
                  className="w-full h-auto object-cover"
                  alt="Recent Work 1"
                />
              </figure>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-8">
                <span className="text-white lg:text-lg custom-mobile:text-[10px]">Interior – Luxury Living</span>
                <h4 className="text-white lg:text-3xl font-bold custom-mobile:text-[13px]">Kawa - Glamorous Penthouse</h4>
                <a className="text-decoration-none mt-4" href="/portfolio">
                  <div className="flex justify-center items-center bg-primary hover:-translate-y-2 transition-all duration-300 lg:w-12 lg:h-12 rounded-full">
                    <ArrowUpRight/>
                  </div>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="scale-75 swiper-slide">
            <div className="relative">
              <figure className="recentwork-image mb-0">
                <Image
                  src={recentwork_image1}
                  className="w-full h-auto object-cover"
                  alt="Recent Work 1"
                />
              </figure>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-8">
                <span className="text-white lg:text-lg custom-mobile:text-[10px]">Interior – Luxury Living</span>
                <h4 className="text-white lg:text-3xl font-bold custom-mobile:text-[13px]">Kawa - Glamorous Penthouse</h4>
                <a className="text-decoration-none mt-4" href="/portfolio">
                  <div className="flex justify-center items-center bg-primary hover:-translate-y-2 transition-all duration-300 lg:w-12 lg:h-12 rounded-full">
                    <ArrowUpRight/>
                  </div>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide w-[450px] h-[600px]">
            <div className="relative">
              <figure className="recentwork-image mb-0">
              <Image
                  src={recentwork_image2}
                  className="w-full h-full object-cover"
                  alt="Recent Work 3"
                />
              </figure>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-8">
                <span className="text-white lg:text-lg custom-mobile:text-[10px]">Interior – Luxury Living</span>
                <h4 className="text-white lg:text-3xl font-bold custom-mobile:text-[13px]">Kawa - Glamorous Penthouse</h4>
                <a className="text-decoration-none mt-4" href="/portfolio">
                  <div className="flex justify-center items-center bg-primary hover:-translate-y-2 transition-all duration-300 lg:w-12 lg:h-12 rounded-full">
                    <ArrowUpRight />
                  </div>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="scale-75 swiper-slide">
            <div className="relative">
              <figure className="recentwork-image mb-0">
              <Image
                  src={recentwork_image3}
                  className="w-full h-auto object-cover"
                  alt="Recent Work 3"
                />
              </figure>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-8">
                <span className="text-white lg:text-lg custom-mobile:text-[10px]">Interior – Luxury Living</span>
                <h4 className="text-white lg:text-3xl font-bold custom-mobile:text-[13px]">Kawa - Glamorous Penthouse</h4>
                <a className="text-decoration-none mt-4" href="/portfolio">
                  <div className="flex justify-center items-center bg-primary hover:-translate-y-2 transition-all duration-300 lg:w-12 lg:h-12 rounded-full">
                    <ArrowUpRight />
                  </div>
                </a>
              </div>
            </div>
          </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination flex justify-center items-center gap-8 mt-12">
          </div>
        </div>
      </div> 
      <Testimonials/>
      <Journey/>
      <Blog/>
    </div> 
  );
}
