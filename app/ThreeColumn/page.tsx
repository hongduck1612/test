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

const index = () => {
    return (
    <div>
        <div className="relative bg-dark py-24" style={{ paddingLeft: "20px" }}>
            <div className="container mx-auto flex items-center justify-between px-4">
            {/* Phần văn bản bên trái */}
                <div className="w-full lg:w-1/2 text-left z-10" style={{ paddingLeft: "100px" }} data-aos="fade-left">
                    <h1 className="text-[76px] leading-[80px] font-semibold text-white mb-6">Three Column</h1>
                    <p className="text-xl text-gray-300 mb-8">
                        Nuis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur. <br />
                        esse fugiat nulla pariatur.
                    </p>
                        {/* Điều hướng Breadcrumb */}
                    <div className="flex w-fit space-x-2 p-[12px] bg-[#222224]">
                        <a href="#" className="text-white text-[18px] font-medium leading-[24px]"> Home</a>
                        <span className="text-gray-400 text-[18px] font-medium leading-[24px]">-</span>
                        <span className="text-[#E1B261] text-[18px] font-medium leading-[24px]">Three Column</span>
                    </div>
                </div>
                {/* Phần hình ảnh bên phải */}
                <div className="w-full lg:w-[48%] z-10 lg:ml-[-3%]" data-aos="fade-up">
                    <Image src={about}width={743}height={428}alt="about"priority={true} />
                </div>
            </div>
        </div>
        <section className="mx-auto service-section px-[160px] py-[120px]">
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
        <Testimonials/>
    </div>
    )
}

export default index