"use client"; // Đánh dấu đây là một thành phần client
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos"; // Thư viện Animation On Scroll (AOS)
import "aos/dist/aos.css"; // Nhập khẩu các kiểu AOS
import "slick-carousel/slick/slick.css"; // Nhập khẩu CSS cho slick-carousel
import "slick-carousel/slick/slick-theme.css"; // Nhập khẩu CSS cho theme của slick-carousel
import lightimage from "../public/image/top-lightimage.png";
import about from "../public/image/about-bannerimage.jpg";
import blogImage1 from "../public/image/blog-image1.jpg"; // Nhập khẩu hình ảnh blog 1
import blogImage2 from "../public/image/blog-image2.jpg"; // Nhập khẩu hình ảnh blog 2
import blogImage3 from "../public/image/blog-image3.jpg"; // Nhập khẩu hình ảnh blog 3
import blogImage4 from "../public/image/blog-image4.jpg"; // Nhập khẩu hình ảnh blog 4
import blogImage5 from "../public/image/blog-image2.jpg"; // Nhập khẩu hình ảnh blog 5
import blogImage6 from "../public/image/blog-image2.jpg"; // Nhập khẩu hình ảnh blog 6 // Nhập khẩu biểu tượng lịch
import { User, Tag, CalendarDays } from 'lucide-react'; // Đảm bảo rằng các thành phần này được nhập khẩu
import testimonial_img1 from '../public/image/testimonial-image1.png';
import testimonial_img2 from '../public/image/testimonial-image2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Circle, Quote, Star } from "lucide-react";

const About = () => {
  // Khởi tạo AOS trong useEffect
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Điều chỉnh thời gian cho tốc độ animation
  }, []);

  return (
    <div>
      {/* Phần đầu tiên */}
      <div className="relative bg-dark py-24" style={{ paddingLeft: "20px" }}>
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Phần văn bản bên trái */}
          <div
            className="w-full lg:w-1/2 text-left z-10"
            style={{ paddingLeft: "100px" }}
            data-aos="fade-left" // Animation cho văn bản
          >
            <h1 className="text-[76px] leading-[80px] font-semibold text-white mb-6">Infinite Scroll</h1>
            <p className="text-xl text-gray-300 mb-8">
              Nuis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur. <br />
              velit esse fugiat nulla pariatur.
            </p>
            {/* Điều hướng Breadcrumb */}
            <div className="flex w-fit space-x-2 p-[12px] bg-[#222224]">
              <a href="#" className="text-white text-[18px] font-medium leading-[24px]"> Home</a>
              <span className="text-gray-400 text-[18px] font-medium leading-[24px]">-</span>
              <span className="text-[#E1B261] text-[18px] font-medium leading-[24px]"> Infinite Scroll</span>
            </div>
          </div>
          {/* Phần hình ảnh bên phải */}
          <div className="w-full lg:w-[48%] z-10 lg:ml-[-3%]" data-aos="fade-up">
            <Image
              src={about}
              width={743}
              height={428}
              alt="about"
              priority={true} // Đảm bảo hình ảnh được ưu tiên tải
            />
          </div>
        </div>
      </div>

      {/* Phần bài viết Blog */}
      <section className="mx-auto service-section px-4 md:px-40 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {/* Các thành phần Card */}
          {[
            blogImage1,
            blogImage2,
            blogImage3,
            blogImage4,
            blogImage5,
            blogImage6,
          ].map((blogImage, index) => (
            <div className="bg-[#212529] overflow-hidden shadow-lg mt-10" key={index}>
              <div className="relative h-48">
                <Image
                  src={blogImage} // Sử dụng hình ảnh cho Card tương ứng
                  alt={`Blog image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center mb-2 gap-2">
                  <User className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-white">By : Admin</span>
                  <Tag className="h-4 w-4 text-yellow-500 ml-2" />
                  <div className="text-white text-sm">Virtual Assistant</div>
                </div>
                <p className="text-gray-400 text-base">
                  Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                  Vivamus luctus commodo dolor porta feugiat.
                </p>
              </div>
              <hr />
              <div className="pt-2">
                <div className="flex items-center justify-between mb-4 mt-8">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 text-yellow-500 ml-4" />
                    <span className="text-md text-white ml-1"> Dec 20, 2022</span>
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Start Testimonials-section */}
      <div className="testimonials-section pt-[142px] pb-[140px] overflow-hidden">
        <div className="relative">
          <Image
            className="absolute top-[-143px] left-[1320px]"
            src={lightimage}
            alt="Light Image"
            width={156}
            height={284}
          />
        </div>
        <div className="container px-[30px] mx-auto">
          <div className="text-content text-center" data-aos="fade-right">
            <h6 className="mb-[18px] text-[18px] font-normal leading-[26px] tracking-[1.2px] text-primary">
              Testimonials
            </h6>
            <h2 className="px-10 mb-[46px] text-[46px] leading-[56px] font-semibold gap-3 indent-[130px]">
              Trusted By Over 30,000 Worldwide Customers Since 1998
            </h2>
          </div>

          {/* Swiper Slider */}
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ el: '.second-swiper-pagination', clickable: true }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            <SwiperSlide>
              <div className="box flex bg-[#222224] border-r-[2px] border-r-[#E1B261] gap-8 pt-[36px] pb-[18px] pl-[40px] pr-[30px]">
                <div className="box-img relative">
                  <Image className="max-w-none max-h-none" src={testimonial_img1} alt="Testimonial Image" />
                  <span className="absolute top-[83px] left-[35px] p-[5px] rounded-full bg-primary"><Quote /></span>
                </div>
                <div className="box-content flex flex-col pl-[30px] border-l border-l-[#5c5c5e]">
                  <p className="mr-5 mb-[6px] text-[18px] leading-[26px] text-[#a7a7a7]">
                    Duis aute irure dolor in reprehender in voluptate velit esse cillum dolore fugiat nulla pariatur...
                  </p>
                  <div className="flex flex-row mb-[12px]">
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                  </div>
                  <div className="flex justify-around gap-[185px]">
                    <div>
                      <p>Kevin Andrew</p>
                      <p className="text-[#a7a7a7]">Happy Customer</p>
                    </div>
                    <span><Quote size={50} strokeWidth={3} /></span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box flex bg-[#222224] border-r-[2px] border-r-[#E1B261] gap-8 pt-[36px] pb-[18px] pl-[40px] pr-[30px]">
                <div className="box-img relative">
                  <Image className="max-w-none max-h-none" src={testimonial_img2} alt="Testimonial Image" />
                  <span className="absolute top-[83px] left-[35px] p-[5px] rounded-full bg-primary"><Quote /></span>
                </div>
                <div className="box-content flex flex-col pl-[30px] border-l border-l-[#5c5c5e]">
                  <p className="mr-5 mb-[6px] text-[18px] leading-[26px] text-[#a7a7a7]">
                    Duis aute irure dolor in reprehender in voluptate velit esse cillum dolore fugiat nulla pariatur...
                  </p>
                  <div className="flex flex-row mb-[12px]">
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                  </div>
                  <div className="flex justify-around gap-[185px]">
                    <div>
                      <p>Alina James</p>
                      <p className="text-[#a7a7a7]">Happy Customer</p>
                    </div>
                    <span><Quote size={50} strokeWidth={3} /></span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box flex bg-[#222224] border-r-[2px] border-r-[#E1B261] gap-8 pt-[36px] pb-[18px] pl-[40px] pr-[30px]">
                <div className="box-img relative">
                  <Image className="max-w-none max-h-none" src={testimonial_img1} alt="Testimonial Image" />
                  <span className="absolute top-[83px] left-[35px] p-[5px] rounded-full bg-primary"><Quote /></span>
                </div>
                <div className="box-content flex flex-col pl-[30px] border-l border-l-[#5c5c5e]">
                  <p className="mr-5 mb-[6px] text-[18px] leading-[26px] text-[#a7a7a7]">
                    Duis aute irure dolor in reprehender in voluptate velit esse cillum dolore fugiat nulla pariatur...
                  </p>
                  <div className="flex flex-row mb-[12px]">
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                  </div>
                  <div className="flex justify-around gap-[185px]">
                    <div>
                      <p>Kevin Andrew</p>
                      <p className="text-[#a7a7a7]">Happy Customer</p>
                    </div>
                    <span><Quote size={50} strokeWidth={3} /></span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box flex bg-[#222224] border-r-[2px] border-r-[#E1B261] gap-8 pt-[36px] pb-[18px] pl-[40px] pr-[30px]">
                <div className="box-img relative">
                  <Image className="max-w-none max-h-none" src={testimonial_img2} alt="Testimonial Image" />
                  <span className="absolute top-[83px] left-[35px] p-[5px] rounded-full bg-primary"><Quote /></span>
                </div>
                <div className="box-content flex flex-col pl-[30px] border-l border-l-[#5c5c5e]">
                  <p className="mr-5 mb-[6px] text-[18px] leading-[26px] text-[#a7a7a7]">
                    Duis aute irure dolor in reprehender in voluptate velit esse cillum dolore fugiat nulla pariatur...
                  </p>
                  <div className="flex flex-row mb-[12px]">
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                    <span className="text-primary"><Star size={20} /></span>
                  </div>
                  <div className="flex justify-around gap-[185px]">
                    <div>
                      <p>Alina James</p>
                      <p className="text-[#a7a7a7]">Happy Customer</p>
                    </div>
                    <span><Quote size={50} strokeWidth={3} /></span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Swiper Pagination */}
          <div className="second-swiper-pagination flex justify-center items-center gap-8 mt-12">
            <span className="text-gray-500 bg-gray-500 rounded-full hover:bg-primary hover:text-primary cursor-pointer hover:-translate-y-2 transition-all duration-500"><Circle /></span>
            <span className="text-gray-500 bg-gray-500 rounded-full hover:bg-primary hover:text-primary cursor-pointer hover:-translate-y-2 transition-all duration-500"><Circle /></span>
            <span className="text-gray-500 bg-gray-500 rounded-full hover:bg-primary hover:text-primary cursor-pointer hover:-translate-y-2 transition-all duration-500"><Circle /></span>
          </div>
        </div>
      </div>
      {/* End of Testimonial Section */}
    </div>
  );
};

export default About;

    


