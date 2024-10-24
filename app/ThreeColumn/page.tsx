"use client"
import React from 'react'
import Testimonials from '../components/Testimonials'
import Image from 'next/image'
import about from "../public/image/about-bannerimage.jpg";
import { CalendarDays, Tag, User } from 'lucide-react';
import blogImage1 from "../public/image/blog-image1.jpg";
import blogImage2 from "../public/image/blog-image2.jpg";
import blogImage3 from "../public/image/blog-image3.jpg";
import blogImage4 from "../public/image/blog-image4.jpg";
import blogImage5 from "../public/image/blog-image2.jpg";
import blogImage6 from "../public/image/blog-image2.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ThreeColumn = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
    <div>
        <div className="lg:py-24 pr-[20px] pl-[26px] custom-mobile:pb-[60px]">
            <div className="container lg:mx-auto lg:flex lg:flex-row lg:items-center lg:justify-between custom-mobile:flex custom-mobile:flex-col-reverse lg:px-4">
            {/* Phần văn bản bên trái */}
                <div className="w-full lg:w-1/2 text-left z-10 lg:pl-[100px]"  data-aos="fade-left">
                    <h1 className="lg:text-[76px] lg:pt-0 custom-mobile:pt-[20px] custom-mobile:mb-[10px] lg:mb-0 custom-mobile:text-center lg:text-start lg:leading-[80px] font-semibold text-white mb-6 custom-mobile:text-[24px] custom-mobile:leading-[34px]">Three Column</h1>
                    <p className="lg:text-xl custom-mobile:mb-[25px] text-gray-300 lg:mb-8 custom-mobile:text-[14px] lg:text-start custom-mobile:leading-[24px] custom-mobile:text-center">
                        Nuis aute irure dolor in rearehenderit in eouta velireu esse fugiat nulla pariatur.
                    </p>
                        {/* Điều hướng Breadcrumb */}
                    <div className="flex w-fit space-x-2 lg:p-[12px] lg:ml-0 custom-mobile:ml-[90px] custom-mobile:py-[8px] custom-mobile:px-[15px] bg-[#222224]">
                        <a href="#" className="text-white lg:text-[18px] font-medium lg:leading-[24px] custom-mobile:text-[14px] custom-mobile:leading-[22px]"> Home</a>
                        <span className="text-gray-400 text-[18px] font-medium leading-[24px]">-</span>
                        <span className="text-[#E1B261] lg:text-[18px] font-medium lg:leading-[24px] custom-mobile:text-[14px] custom-mobile:leading-[22px]">Three Column</span>
                    </div>
                </div>
                {/* Phần hình ảnh bên phải */}
                <div className="w-full lg:w-[48%] z-10 lg:ml-[-3%]" data-aos="fade-up">
                    <Image src={about}width={743}height={428}alt="about"priority={true} />
                </div>
            </div>
        </div>
        <section className="mx-auto service-section lg:px-[160px] lg:py-[120px] custom-mobile:px-[15px] custom-mobile:pt-[40px] custom-mobile:pb-[52px]">
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
                        <User className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-white">By : Admin</span>
                        <Tag className="h-4 w-4 text-primary ml-2" />
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
                            <CalendarDays className="h-4 w-4 text-primary ml-4" />
                            <span className="text-md text-white ml-1"> Dec 20, 2022</span>
                        </div>
                        <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            ))}
            </div>
        </section>
        <Testimonials/>
    </div>
    )
}

export default ThreeColumn