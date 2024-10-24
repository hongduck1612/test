"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos"; 
import "aos/dist/aos.css";

import about1 from "../public/image/about-image1.png";
import about2 from "../public/image/about-image2.png";
import about3 from "../public/image/partner1.png";
import about4 from "../public/image/partner2.png";
import about5 from "../public/image/partner3.png";
import about6 from "../public/image/partner4.png";
import processIcon1 from "../public/image/process-icon1.png";
import processIcon2 from "../public/image/process-icon2.png";
import processIcon3 from "../public/image/process-icon3.png";
import Banner from "../public/image/about-bannerimage.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";;
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Pagination, Autoplay } from 'swiper/modules';
import Blog from "../components/Blog";
import Journey from "../components/Journey";
const About = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 1000 });
    let timer: NodeJS.Timeout;
    if (count < 10) {
      timer = setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, 200);
    }

    return () => clearTimeout(timer);
  }, [count]);
  return (
    <div className="relative overflow-x-hidden ">
      {/* <Subbaner/> */}
      <section className="banner-section">
  <div className="mx-auto px-10">
    <div className="flex flex-col lg:flex-row">
      <div
        className="lg:w-9/12 xl:w-9/12 w-full order-2 lg:order-1 p-7"
        data-aos="fade-right"
      >
        <div className="banner_content">
          <div className="content lg:mt-40 lg:pt-10 md:pl-30">
            <h1 className="text-4xl lg:text-8xl text-white">About Us</h1>
            <p className="mt-4 text-gray-500 font-bold text-xl">
              Euis aute irure dolor in rearehenderit in eouta velireu esse
              fugiat nulla pariatur.
            </p>
            <div className="bg-[#222224] p-2 w-full md:w-[200px] flex items-center mt-4 px-4">
              <div className="text-white text-sm gap-1">
                <span className="text-xl md:text-2xl">Home</span>
                <span className="mx-1">-</span>
                <span className="text-yellow-400 text-xl md:text-2xl">
                  About
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="lg:w-9/12 xl:w-9/12 w-full order-1 pt-40 lg:order-2 p-6 lg:mt-[150px] xl:mt-5"
        data-aos="fade-up"
      >
        <div className="banner_wrapper">
          <figure className="sub-bannerimage mb-0">
            <Image
              src={Banner}
              alt=""
              className="img-fluid w-full h-auto md:h-[400px] lg:h-auto" // Thay đổi ở đây
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
</section>
      <section>
  <div className="service-section mx-auto w-full">
    <div className="flex flex-wrap lg:flex-nowrap py-20">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 p-4 relative px-4 lg:px-20">
        <div className="aboutpage_wrapper">
          {/* First Image */}
          <figure className="aboutpage-image1 mb-0" data-aos="fade-down">
            <div className="image-frame">
              <Image
                src={about1}
                alt="About image 1"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </figure>

          {/* Second Image */}
          <div
            className="absolute bottom-0 right-0 lg:right-0 mb-4 mr-4 lg:mr-4 z-1 sm:right-0 sm:transform sm:translate-x-10"
            data-aos="fade-up"
          >
            <figure className="aboutpage-image2 mb-0">
              <div
                className="image-frame"
                style={{ position: "relative", zIndex: 1 }}
              >
                <Image
                  src={about2}
                  alt="About image 2"
                  width={250}
                  height={20}
                  className="rounded-lg"
                  style={{
                    // Di chuyển ảnh vào thêm chút nữa
                    transform: "scale(1.2) translateX(-10px)", // Dịch vào thêm 10px
                    marginBottom: "10px",
                  }}
                />
              </div>
            </figure>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 p-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-[#E1B261]">About Us</h2>
        <p className="text-lg text-gray-300 mb-4">
          <h2>We are The Leader in Interior Design Services</h2>
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae reiciendis maiores.
        </p>
        <div>
          <p className="text2">
            Reprehenderit rui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum ui dolorem.
          </p>
          <div className="progress-outer">
            <div className="progress-inner flex flex-row justify-between">
              <div className="box w-1/3 mx-2">
                <div className="chart" data-percent="85">
                  85%
                  <canvas height="350" width="350"></canvas>
                </div>
                <h6>Interior Design</h6>
              </div>
              <div className="box w-1/3 mx-2">
                <div className="chart" data-percent="78">
                  78%
                  <canvas height="350" width="350"></canvas>
                </div>
                <h6>Architect Services</h6>
              </div>
              <div className="box w-1/3 mx-2">
                <div className="chart" data-percent="64">
                  64%
                  <canvas height="350" width="350"></canvas>
                </div>
                <h6>Idea & Planning</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="partner-section py-24">
  <div className="container mx-auto text-center items-center justify-center px-4 lg:px-0">
    <h6 className="text-[#ecaa39] text-lg">Customers</h6>
    <h2 className="text-white text-4xl font-bold mb-8">Our Trusted Clients</h2>
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}" style="width: 20px; height: 20px; background-color: #ff9900; border-radius: 10px; display: inline-block; margin: 0 5px;"></span>`;
        }
      }}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="mt-5"
    >
      {[
        { src: about3, alt: "Client 1" },
        { src: about4, alt: "Client 2" },
        { src: about5, alt: "Client 3" },
        { src: about6, alt: "Client 4" },
        { src: about3, alt: "Client 1" },
        { src: about4, alt: "Client 2" },
        { src: about5, alt: "Client 3" },
        { src: about6, alt: "Client 4" },
      ].map((client, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div
            className="box flex justify-center items-center p-4 rounded-lg border-b-4 border-[#a3782e] bg-gray-800"
            style={{
              width: "100%",
              height: "120px", // Giảm chiều cao
              maxWidth: "300px", // Giảm chiều rộng tối đa
            }}
          >
            <Image
              src={client.src}
              className="img-fluid"
              alt={client.alt}
              width={80} // Kích thước ảnh nhỏ hơn
              height={80} // Kích thước ảnh nhỏ hơn
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="swiper-pagination flex justify-center mt-10"></div>
  </div>
  <style>{`
    .swiper-pagination {
      margin-top: 20px;
      padding-top: 10px;
    }
    .swiper-pagination span {
      transition: transform 0.3s ease, background 0.3s ease;
    }
    .swiper-pagination span:hover {
      transform: scale(1.2);
    }
    .swiper-pagination span.swiper-pagination-bullet-active {
      background: #e67e22;
      width: 24px;
      height: 24px;
    }
  `}</style>
</section>
      <section className="py-30">
      <div className="process-section">
  {/* Desktop Layout */}
  <div className="hidden lg:block px-40">
    <div className="flex justify-center gap-8">
      <div className="pt-[142px] pb-[150px]">
        <div className="mx-[0px]">
          <div className="text-center" data-aos="fade-up">
            <p className="text-[18px] pb-[18px] text-[#E1B261] tracking-[2px]">Our Process</p>
            <h2 className="text-gray-300 text-[46px] mb-[48px] font-semibold">See How We Work For You</h2>
          </div>
          <div className="flex justify-center gap-8 items-center">
            {/* Box 1 */}
            <div className="w-fit pt-[50px] relative pb-[20px] px-[30px] bg-[#222224] border-b-[2px] border-b-orange-500 hover:-translate-y-2 transition-all duration-700 text-[#E1B261]">
              <p className="text-[80px] font-semibold leading-[90px] text-primary mb-[18px]">01</p>
              <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Strategy and Planning</h5>
              <p className="font-normal text-[#a7a7a7] text-[18px]">Aut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
              <Image className="relative top-[-245px] right-[-200px] hover:-translate-y-2 transition-all duration-700" src={processIcon1} width={78} height={78} alt="process_1" />
            </div>
            {/* Box 2 */}
            <div className="w-fit pt-[50px] relative pb-[20px] px-[30px] bg-[#222224] border-b-[2px] border-b-orange-500 hover:-translate-y-2 transition-all duration-700 text-[#E1B261]">
              <p className="text-[80px] font-semibold leading-[90px] text-primary mb-[18px]">02</p>
              <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Concept Design</h5>
              <p className="font-normal text-[#a7a7a7] text-[18px]">Dut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
              <Image className="relative top-[-245px] right-[-200px] hover:-translate-y-2 transition-all duration-700" src={processIcon2} width={78} height={78} alt="process_2" />
            </div>
            {/* Box 3 */}
            <div className="w-fit pt-[50px] relative pb-[20px] px-[30px] bg-[#222224] border-b-[2px] border-b-orange-500 hover:-translate-y-2 transition-all duration-700 text-[#E1B261]">
              <p className="text-[80px] font-semibold leading-[90px] text-primary mb-[18px]">03</p>
              <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Design Development</h5>
              <p className="font-normal text-[#a7a7a7] text-[18px]">Aut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
              <Image className="relative top-[-245px] right-[-200px] hover:-translate-y-2 transition-all duration-700" src={processIcon3} width={78} height={78} alt="process_3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Mobile Layout */}
  <div className="block lg:hidden py-[50px] md:py-[142px] lg:py-[150px]">
    <div className="container mx-auto px-4 md:px-40">
      <div className="text-center" data-aos="fade-up">
        <p className="text-base md:text-lg lg:text-[18px] pb-[10px] md:pb-[18px] text-[#E1B261] tracking-[2px]">Our Process</p>
        <h2 className="text-xl md:text-3xl lg:text-[46px] font-semibold text-gray-300 mb-[30px] md:mb-[48px]">See How We Work For You</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-6 gap-x-8 justify-center">
        {/* Box 1 */}
        <div className="w-full max-w-xs mx-auto pt-[50px] pb-[20px] px-[30px] bg-[#222224] border-b-[2px]  border-b-orange-500 hover:-translate-y-2 transition-all duration-700 text-[#E1B261]">
          <p className="text-[50px] md:text-[80px] font-semibold leading-[60px] md:leading-[90px] text-primary mb-[10px] md:mb-[18px]">01</p>
          <h5 className="text-lg md:text-[20px] font-semibold text-white mb-[8px] leading-[24px] md:leading-[30px]">Strategy and Planning</h5>
          <p className="text-sm md:text-[18px] font-normal text-[#a7a7a7]">Aut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
          <Image className="absolute top-[-200px] md:top-[-245px] right-[-150px] md:right-[-200px] hover:-translate-y-2 transition-all duration-700" src={processIcon1} width={78} height={78} alt="process_1" />
        </div>
        <div className="w-full max-w-xs mx-auto pt-[50px] pb-[20px] px-[30px] bg-[#222224] border-b-[2px]  border-b-orange-500 hover:-translate-y-2 transition-all duration-700 text-[#E1B261]">
          <p className="text-[50px] md:text-[80px] font-semibold leading-[60px] md:leading-[90px] text-primary mb-[10px] md:mb-[18px]">02</p>
          <h5 className="text-lg md:text-[20px] font-semibold text-white mb-[8px] leading-[24px] md:leading-[30px]">Concept Design</h5>
          <p className="text-sm md:text-[18px] font-normal text-[#a7a7a7]">Dut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
          <Image className="absolute top-[-200px] md:top-[-245px] right-[-150px] md:right-[-200px] hover:-translate-y-2 transition-all duration-700" src={processIcon1} width={78} height={78} alt="process_1" />
        </div>
        <div className="w-full max-w-xs mx-auto pt-[50px] pb-[20px] px-[30px] bg-[#222224] border-b-[2px]  border-b-orange-500 hover:-translate-y-2 transition-all duration-700 text-[#E1B261]">
          <p className="text-[50px] md:text-[80px] font-semibold leading-[60px] md:leading-[90px] text-primary mb-[10px] md:mb-[18px]">03</p>
          <h5 className="text-lg md:text-[20px] font-semibold text-white mb-[8px] leading-[24px] md:leading-[30px]">Design Development</h5>
          <p className="text-sm md:text-[18px] font-normal text-[#a7a7a7]">Aut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
          <Image className="absolute top-[-200px] md:top-[-245px] right-[-150px] md:right-[-200px] hover:-translate-y-2 transition-all duration-700" src={processIcon1} width={78} height={78} alt="process_1" />
        </div>
      </div>
    </div>
  </div>
</div>
        <div>
          <Journey/>
        </div>
</section>
      <section>
        <Blog/>
      </section>
    </div>
  );
};

export default About;
