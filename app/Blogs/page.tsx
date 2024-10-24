"use client"; // Đánh dấu đây là một thành phần client

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos"; // Thư viện Animation On Scroll (AOS)
import "aos/dist/aos.css"; // Nhập khẩu các kiểu AOS
import "slick-carousel/slick/slick.css"; // Nhập khẩu CSS cho slick-carousel
import "slick-carousel/slick/slick-theme.css"; // Nhập khẩu CSS cho theme của slick-carousel
import lightimage from "../public/image/top-lightimage.png";
import about from "../public/image/about-bannerimage.jpg";
import blog1 from "../public/image/blog-image1.jpg";
import blog2 from "../public/image/blog-image2.jpg";
import blog3 from "../public/image/blog-image3.jpg";
import blog4 from "../public/image/blog-image4.jpg"; // Nhập khẩu biểu tượng lịch
import { User, Tag, CalendarDays } from 'lucide-react'; // Đảm bảo rằng các thành phần này được nhập khẩu
import testimonial_img1 from '../public/image/testimonial-image1.png';
import testimonial_img2 from '../public/image/testimonial-image2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Circle, Quote, Star } from "lucide-react";

const Blog = () => {
  // Khởi tạo AOS trong useEffect
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Điều chỉnh thời gian cho tốc độ animation
  }, []);

  return (
    <div>
      {/* Phần đầu tiên */}
      <div className="relative bg-dark py-24 px-4">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
    {/* Phần văn bản bên trái */}
    <div
      className="w-full lg:w-1/2 text-left z-10"
      data-aos="fade-left" // Animation cho văn bản
    >
      <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Blog</h1>
      <p className="text-base lg:text-xl text-gray-300 mb-4">
        Nuis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur. <br />
        velit esse fugiat nulla pariatur.
      </p>
      {/* Điều hướng Breadcrumb */}
      <div className="flex space-x-2 mb-4">
        <a href="#" className="text-white">Home</a>
        <span className="text-gray-400">-</span>
        <span className="text-[#E1B261]">Blog</span>
      </div>
    </div>
    {/* Phần hình ảnh bên phải */}
    <div className="w-full lg:w-[48%] z-10 lg:ml-[-3%] mt-4 lg:mt-0" data-aos="fade-up">
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

      <div className="container mx-auto px-4 md:px-10 lg:px-56 mt-16 bg-black service-section">
  <h2 className="text-5xl text-white text-center mb-6 pb-10">From Our Blog</h2>

  <div className="flex flex-wrap justify-between">
    {/* Blog Post 1 */}
    <div className="bg-gray p-6 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4">
      <Image
        src={blog1}
        width={350}
        height={326}
        className="w-full h-auto rounded-md"
        alt="blog post 1"
      />
      <div className="px-6 py-4">
        <div className="flex items-center mb-2 gap-2">
          <User className="h-4 w-4 text-yellow-500 mr-2" />
          <span className="text-sm text-white">By: Admin</span>
          <Tag className="h-4 w-4 text-yellow-500 ml-2" />
          <div className="text-white text-sm">Virtual Assistant</div>
        </div>
        <br />
        <p className="text-white text-base">
          Why You Need a Virtual Assistant for Your Company
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <CalendarDays /> <span className="text-white text-sm">Dec 20, 2022</span>
        <a href="#" className="text-white bg-[#E1B261] px-4 py-2 rounded-lg">
          Read More
        </a>
      </div>
    </div>

    {/* Blog Post 2 */}
    <div className="bg-gray p-6 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4">
      <Image
        src={blog2} // Duplicate image for the same content
        width={350}
        height={326}
        className="w-full h-auto rounded-md"
        alt="blog post 2"
      />
      <div className="px-6 py-4">
        <div className="flex items-center mb-2 gap-2">
          <User className="h-4 w-4 text-yellow-500 mr-2" />
          <span className="text-sm text-white">By: Admin</span>
          <Tag className="h-4 w-4 text-yellow-500 ml-2" />
          <div className="text-white text-sm">Virtual Assistant</div>
        </div>
        <br />
        <p className="text-white text-base">
          Why You Need a Virtual Assistant for Your Company
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <CalendarDays /> <span className="text-white text-sm">Dec 20, 2022</span>
        <a href="#" className="text-white bg-[#E1B261] px-4 py-2 rounded-lg">
          Read More
        </a>
      </div>
    </div>

    {/* Blog Post 3 */}
    <div className="bg-gray p-6 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4">
      <Image
        src={blog3} // Duplicate image for the same content
        width={350}
        height={326}
        className="w-full h-auto rounded-md"
        alt="blog post 3"
      />
      <div className="px-6 py-4">
        <div className="flex items-center mb-2 gap-2">
          <User className="h-4 w-4 text-yellow-500 mr-2" />
          <span className="text-sm text-white">By: Admin</span>
          <Tag className="h-4 w-4 text-yellow-500 ml-2" />
          <div className="text-white text-sm">Virtual Assistant</div>
        </div>
        <br />
        <p className="text-white text-base">
          Why You Need a Virtual Assistant for Your Company
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <CalendarDays /> <span className="text-white text-sm">Dec 20, 2022</span>
        <a href="#" className="text-white bg-[#E1B261] px-4 py-2 rounded-lg">
          Read More
        </a>
      </div>
    </div>

    {/* Repeat similar structure for Blog Post 4 to 9 */}
    {/* Blog Post 4 */}
    <div className="bg-gray p-6 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4">
      <Image
        src={blog4} // Duplicate image for the same content
        width={350}
        height={326}
        className="w-full h-auto rounded-md"
        alt="blog post 4"
      />
      <div className="px-6 py-4">
        <div className="flex items-center mb-2 gap-2">
          <User className="h-4 w-4 text-yellow-500 mr-2" />
          <span className="text-sm text-white">By: Admin</span>
          <Tag className="h-4 w-4 text-yellow-500 ml-2" />
          <div className="text-white text-sm">Virtual Assistant</div>
        </div>
        <br />
        <p className="text-white text-base">
          Why You Need a Virtual Assistant for Your Company
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <CalendarDays /> <span className="text-white text-sm">Dec 20, 2022</span>
        <a href="#" className="text-white bg-[#E1B261] px-4 py-2 rounded-lg">
          Read More
        </a>
      </div>
    </div>

    {/* Blog Post 5 */}
    <div className="bg-gray p-6 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4">
      <Image
        src={blog1} // Duplicate image for the same content
        width={350}
        height={326}
        className="w-full h-auto rounded-md"
        alt="blog post 5"
      />
      <div className="px-6 py-4">
        <div className="flex items-center mb-2 gap-2">
          <User className="h-4 w-4 text-yellow-500 mr-2" />
          <span className="text-sm text-white">By: Admin</span>
          <Tag className="h-4 w-4 text-yellow-500 ml-2" />
          <div className="text-white text-sm">Virtual Assistant</div>
        </div>
        <br />
        <p className="text-white text-base">
          Why You Need a Virtual Assistant for Your Company
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <CalendarDays /> <span className="text-white text-sm">Dec 20, 2022</span>
        <a href="#" className="text-white bg-[#E1B261] px-4 py-2 rounded-lg">
          Read More
        </a>
      </div>
    </div>

    {/* Blog Post 6 */}
    <div className="bg-gray p-6 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4">
      <Image
        src={blog2} // Duplicate image for the same content
        width={350}
        height={326}
        className="w-full h-auto rounded-md"
        alt="blog post 6"
      />
      <div className="px-6 py-4">
        <div className="flex items-center mb-2 gap-2">
          <User className="h-4 w-4 text-yellow-500 mr-2" />
          <span className="text-sm text-white">By: Admin</span>
          <Tag className="h-4 w-4 text-yellow-500 ml-2" />
          <div className="text-white text-sm">Virtual Assistant</div>
        </div>
        <br />
        <p className="text-white text-base">
          Why You Need a Virtual Assistant for Your Company
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <CalendarDays /> <span className="text-white text-sm">Dec 20, 2022</span>
        <a href="#" className="text-white bg-[#E1B261] px-4 py-2 rounded-lg">
          Read More
        </a>
      </div>
    </div>

    {/* Blog Post 7 */}
    <div className="bg-gray p-6 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4">
      <Image
        src={blog3} // Duplicate image for the same content
        width={350}
        height={326}
        className="w-full h-auto rounded-md"
        alt="blog post 7"
      />
      <div className="px-6 py-4">
        <div className="flex items-center mb-2 gap-2">
          <User className="h-4 w-4 text-yellow-500 mr-2" />
          <span className="text-sm text-white">By: Admin</span>
          <Tag className="h-4 w-4 text-yellow-500 ml-2" />
          <div className="text-white text-sm">Virtual Assistant</div>
        </div>
        <br />
        <p className="text-white text-base">
          Why You Need a Virtual Assistant for Your Company
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <CalendarDays /> <span className="text-white text-sm">Dec 20, 2022</span>
        <a href="#" className="text-white bg-[#E1B261] px-4 py-2 rounded-lg">
          Read More
        </a>
      </div>
    </div>

    {/* Blog Post 8 */}
    <div className="bg-gray p-6 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4">
      <Image
        src={blog4} // Duplicate image for the same content
        width={350}
        height={326}
        className="w-full h-auto rounded-md"
        alt="blog post 8"
      />
      <div className="px-6 py-4">
        <div className="flex items-center mb-2 gap-2">
          <User className="h-4 w-4 text-yellow-500 mr-2" />
          <span className="text-sm text-white">By: Admin</span>
          <Tag className="h-4 w-4 text-yellow-500 ml-2" />
          <div className="text-white text-sm">Virtual Assistant</div>
        </div>
        <br />
        <p className="text-white text-base">
          Why You Need a Virtual Assistant for Your Company
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <CalendarDays /> <span className="text-white text-sm">Dec 20, 2022</span>
        <a href="#" className="text-white bg-[#E1B261] px-4 py-2 rounded-lg">
          Read More
        </a>
      </div>
    </div>

    {/* Blog Post 9 */}
    <div className="bg-gray p-6 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4">
      <Image
        src={blog1} // Duplicate image for the same content
        width={350}
        height={326}
        className="w-full h-auto rounded-md"
        alt="blog post 9"
      />
      <div className="px-6 py-4">
        <div className="flex items-center mb-2 gap-2">
          <User className="h-4 w-4 text-yellow-500 mr-2" />
          <span className="text-sm text-white">By: Admin</span>
          <Tag className="h-4 w-4 text-yellow-500 ml-2" />
          <div className="text-white text-sm">Virtual Assistant</div>
        </div>
        <br />
        <p className="text-white text-base">
          Why You Need a Virtual Assistant for Your Company
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <CalendarDays /> <span className="text-white text-sm">Dec 20, 2022</span>
        <a href="#" className="text-white bg-[#E1B261] px-4 py-2 rounded-lg">
          Read More
        </a>
      </div>
    </div>
  </div>
</div>



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

export default Blog;

    


