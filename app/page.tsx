"use client";
import Image from "next/image";
import  {useInView } from 'react-intersection-observer'
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
import { ArrowUpRight, Circle, Plus } from "lucide-react";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Service from "./components/Service";
import Journey from "./components/Journey";
import Blog from "./components/Blog";


export default function Home() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <div>
      <Banner/>
      {/* Service Section start */}
      <Service/>
      {/* End of Service Section */}
      {/* About Section */}
      {/* <div className="about-section relative pt-[145px] pb-[120px]">
        <div className="absolute left-[1340px] top-0 z-0">
          <Image className="" src={ligh_img} alt="" width={157} height={284} />
        </div>
        <div className="flex justify-center items-center gap-4 mb-5 relative z-10">
          <motion.div ref={ref} initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}  transition={{ duration: 1.5, ease: 'easeOut' }}>
            <Image className="z-10" src={about_img1} width={457} height={533} alt="about_img1"/>
          </motion.div>
          <div>
            <div className="w-[457px] h-[533px] px-4">
              <div className="" data-aos="fade-right">
                <p className="text-[18px] text-primary tracking-widest">About Us</p>
                <p className="text-[46px] leading-[]58px font-semibold">We Provide Best Interior Design Services</p>
                <p className="pl-[17px] mb-[18px] text-[20px] font-medium border-l border-l-[#E1B261]">Molestias exceaturi sint ecaecati cua non provident similiue</p>
                <p className="text-[#A7A7A7] pb-[32px] text-[20px]">Dolores aet ruas molestias exceaturi sint ecaecati cupiditate non provident, similiue sunt in culpa qui officia deserunt mollitia animi facere omnis.</p>
                <div className="flex items-center group gap-4 w-fit">
                  <a className="items-center text-[20px] text-[#ffff] group-hover:text-primary" href="./service.html">
                    Read More
                  </a>
                  <span className="p-5 border text-primary border-[#E1B261] group-hover:text-[#ffff] group-hover:bg-[#E1B261] transition-all duration-800 rounded-full cursor-pointer"><ArrowUpRight/></span>
                </div>
              </div>
            </div> 
          </div>
          <div>
          <motion.div ref={ref} initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}  transition={{ duration: 1.5, ease: 'easeOut' }}>
            <Image className="z-10" src={about_img2} width={457} height={533} alt="about_img1"/>
          </motion.div>
          </div>
        </div>
      </div> */}
      {/* End of About Section */}
      {/* process-section start*/}
      {/* <div className="process-section pt-[142px] pb-[150px] ">
        <div className="container mx-[120px] px-20">
          <div className="text-center" data-aos="fade-up">
            <p className="text-[18px] pb-[18px] text-primary tracking-[2px]">Our Prosess</p>
            <h2 className="text-[46px] mb-[48px] font-semibold">See How We Work For You</h2>
          </div>
          <div className="flex justify-between gap-8 items-center">
            <div className="w-fit pt-[50px] relative pb-[20px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary hover:-translate-y-2 transition-all duration-700">
              <p className="text-[80px] font-semibold leading-[90px] text-primary mb-[18px]">01</p>
              <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Strategy and Planning</h5>
              <p className="font-normal text-[#a7a7a7] text-[18px]">Aut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
              <Image className="relative top-[-245px] right-[-200px] hover:-translate-y-2 transition-all duration-700" src={process_1} width={78} height={78} alt="process_1"/>
            </div>
            <div className="w-fit pt-[50px] relative pb-[20px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary hover:-translate-y-2 transition-all duration-700">
              <p className="text-[80px] font-semibold leading-[90px] text-primary mb-[18px]">02</p>
              <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Concept Design</h5>
              <p className="font-normal text-[#a7a7a7] text-[18px]">Dut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
              <Image className="relative top-[-245px] right-[-200px] hover:-translate-y-2 transition-all duration-700" src={process_2} width={78} height={78} alt="process_2"/>
            </div>
            <div className="w-fit pt-[50px] relative pb-[20px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary hover:-translate-y-2 transition-all duration-700">
              <p className="text-[80px] font-semibold leading-[90px] text-primary mb-[18px]">03</p>
              <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Design Development</h5>
              <p className="font-normal text-[#a7a7a7] text-[18px]">Aut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
              <Image className="relative top-[-245px] right-[-200px] hover:-translate-y-2 transition-all duration-700" src={process_3} width={78} height={78} alt="process_3"/>
            </div>
          </div>
        </div>
      </div> */}
      {/* End of process-section */}
      {/* work-section */}
      {/* <div className="work-section flex justify-center relative pt-[94px] pb-[174px] ">
        <div className="absolute left-[57px] top-0">
          <Image className="" src={ligh_img} alt="" width={157} height={284} />
        </div>
        <div className="container flex gap-2 mx-auto px-20">
          <div className="work-content">
            <div className="px-4 flex gap-0">
              <p className="text-[250px] font-bold leading-[250px] pb-2">10</p>
              <span><Plus size={150} color="#E1B261" strokeWidth={3} /></span>
            </div>
            <h2 className="text-[46px] leading-[58px] font-semibold">Years of Successful Work in Market</h2>
            <p className="flex items-center gap-5 w-fit pt-[48px] group cursor-pointer">
              <a className="group-hover:text-primary transition-all duration-300 text-[20px] font-medium leading-[26px]" href="">
                Discover More
              </a>
              <span className="rounded-full text-primary bg-[transparent] border border-[#E1B261] p-5 group-hover:bg-[#E1B261] group-hover:text-[#fff] transition-all duration-300">
                <ArrowUpRight />
              </span>
            </p>
          </div>
          <div className="work-content pl-2 mb">
            <Image data-aos="fade-up" src={work_img} alt="work_img" width={720} height={550} />
            <Image className="mt-[-400px] ml-[-30px] " data-aos="fade-right" src={work_img2} alt="work_img" width={720} height={550} />
          </div>
        </div>
      </div> */}
      {/* End of work-section */}
      {/* Start of recentwork-section */}
      {/* <div className="recentwork-section pt-[142px] pb-[140px]">
        <div className="container mx-auto px-4">
          <div>
            <div>
              <div className="recentwork_content text-center" data-aos="fade-up">
                <h6 className="text-lg font-normal mb-[18px] text-primary tracking-[2px]">What’s New</h6>
                <h2 className="text-[46px] leading-[46px] font-semibold text-white">Recent Work We Have Done</h2>
              </div>
            </div>
          </div>
          {/* Swiper Carousel */}
          {/* <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides = {true}
          spaceBetween={60}
          loop={true}
          slidesPerView={1.5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
                <span className="text-white text-lg">Interior – Luxury Living</span>
                <h4 className="text-white text-3xl font-bold">Kawa - Glamorous Penthouse</h4>
                <a className="text-decoration-none mt-4" href="/portfolio">
                  <div className="flex justify-center items-center bg-primary hover:-translate-y-2 transition-all duration-300 w-12 h-12 rounded-full">
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
                <span className="text-white text-lg">Interior – Luxury Living</span>
                <h4 className="text-white text-3xl font-bold">Kawa - Glamorous Penthouse</h4>
                <a className="text-decoration-none mt-4" href="/portfolio">
                  <div className="flex justify-center items-center bg-primary hover:-translate-y-2 transition-all duration-300 w-12 h-12 rounded-full">
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
                <span className="text-white text-lg">Interior – Luxury Living</span>
                <h4 className="text-white text-3xl font-bold">Kawa - Glamorous Penthouse</h4>
                <a className="text-decoration-none mt-4" href="/portfolio">
                  <div className="flex justify-center items-center bg-primary hover:-translate-y-2 transition-all duration-300 w-12 h-12 rounded-full">
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
                <span className="text-white text-lg">Interior – Luxury Living</span>
                <h4 className="text-white text-3xl font-bold">Kawa - Glamorous Penthouse</h4>
                <a className="text-decoration-none mt-4" href="/portfolio">
                  <div className="flex justify-center items-center bg-primary hover:-translate-y-2 transition-all duration-300 w-12 h-12 rounded-full">
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
              {/* Overlay Content */}
              {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-8">
                <span className="text-white text-lg">Interior – Luxury Living</span>
                <h4 className="text-white text-3xl font-bold">Kawa - Glamorous Penthouse</h4>
                <a className="text-decoration-none mt-4" href="/portfolio">
                  <div className="flex justify-center items-center bg-primary hover:-translate-y-2 transition-all duration-300 w-12 h-12 rounded-full">
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
                <span className="text-white text-lg">Interior – Luxury Living</span>
                <h4 className="text-white text-3xl font-bold">Kawa - Glamorous Penthouse</h4>
                <a className="text-decoration-none mt-4" href="/portfolio">
                  <div className="flex justify-center items-center bg-primary hover:-translate-y-2 transition-all duration-300 w-12 h-12 rounded-full">
                    <ArrowUpRight />
                  </div>
                </a>
              </div>
            </div>
          </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination flex justify-center items-center gap-8 mt-12">
            <span className="text-gray-500 bg-gray-500 rounded-full hover:bg-primary hover:text-primary cursor-pointer hover:-translate-y-2 transition-all duration-500"><Circle /></span>
            <span className="text-gray-500 bg-gray-500 rounded-full hover:bg-primary hover:text-primary cursor-pointer hover:-translate-y-2 transition-all duration-500"><Circle /></span>
            <span className="text-gray-500 bg-gray-500 rounded-full hover:bg-primary hover:text-primary cursor-pointer hover:-translate-y-2 transition-all duration-500"><Circle /></span>
          </div>
        </div>
      </div> 
      */}
    </div> 
  );
}
