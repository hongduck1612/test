"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import about from "../public/image/about-bannerimage.jpg";
import Username from "../public/image/post-featured.jpg";
import user3 from "../public/image/post-featured2.jpg";
import user4 from "../public/image/post-featured3.jpg";
import user5 from "../public/image/post-featured4.jpg";
import { CalendarDays, Tag, User } from "lucide-react";
import Testimonials from "../components/Testimonials";
import Aos from 'aos';
import 'aos/dist/aos.css';

const TwoColumn = ()=>{
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return(
        <div>
            <div className="relative bg-dark lg:py-24 custom-mobile:py-[20px] " style={{ paddingLeft: "5px" }}>
            <div className="container mx-auto lg:flex lg:items-center lg:flex-row custom-mobile:flex  custom-mobile:flex-col-reverse lg:justify-between px-4">
            {/* Phần văn bản bên trái */}
                <div className="lg:w-1/2 lg:text-left custom-mobile:text-center z-10 lg:pl-[100px] custom-mobile:px-0" data-aos="fade-left">
                    <h1 className="lg:text-[76px] custom-mobile:text-[24px] lg:leading-[80px] custom-mobile:leading-[34px] font-semibold lg:pt-0 custom-mobile:pt-6 text-white lg:mb-6">Two  Column</h1>
                    <p className="lg:text-xl custom-mobile:text-[14px]  text-gray-300 mb-8 lg:pt-0 custom-mobile:pt-1 ">
                        Nuis aute irure dolor in reprehenderit in voluptate <br />
                        esse fugiat nulla pariatur.
                    </p>
                        {/* Điều hướng Breadcrumb */}
                    <div className="flex w-fit space-x-2 p-[12px]  lg:ml-0 custom-mobile:ml-[95px]  bg-[#222224]">
                        <a href="#" className="text-white lg:text-[18px] custom-mobile:text-[14px] font-medium leading-[24px]"> Home</a>
                        <span className="text-gray-400 lg:text-[18px] custom-mobile:text-[14px]  font-medium leading-[24px]">-</span>
                        <span className="text-[#E1B261] lg:text-[18px] custom-mobile:text-[14px]  font-medium leading-[24px]">Two Column</span>
                    </div>
                </div>
                {/* Phần hình ảnh bên phải */}
                <div className="w-full lg:w-[48%] z-10 lg:ml-[-3%]  " data-aos="fade-up">
                    <Image src={about}width={743}height={428}alt="about"priority={true} />
                </div>
            </div>
            </div>

            <section className="  mx-auto service-section px-4 md:px-40 ">
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-6  ">
                {/* Card 1 */}
                <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
                    <div className="relative h-48">
                    <Image
                        src={Username} alt="Profile picture of a woman with glasses" layout="fill" objectFit="cover"className="w-full h-full object-cover"
                    /> 
                    </div>
                    <div className="px-6 py-4">
                    <div className="flex items-center mb-2">
                        <User className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-sm text-white">By : Admin</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                        <div className="text-white text-sm">Virtual Assistant</div>
                    </div>
                    <p className="text-gray-400 text-base">
                        Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                        Vivamus luctus commodo dolor porta feugiat.
                    </p>
                    </div>
                    <hr />
                    <div className="px-6 pt-2">
                    <div className="flex items-center mb-4">
                        <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-md text-white">Dec 20, 2022</span>
                    </div>
                    </div>
                    <div className="relative flex justify-end ml-10 pb-6">
                    <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                        Read More
                    </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
                    <div className="relative h-48">
                    <Image
                        src={user3}
                        alt="Profile picture of a woman with glasses"
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full object-cover"
                    />
                    </div>
                    <div className="px-6 py-4">
                    <div className="flex items-center mb-2">
                        <User className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-sm text-white">By : Admin</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                        <div className="text-white text-sm">Virtual Assistant</div>
                    </div>
                    <p className="text-gray-400 text-base">
                        Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                        Vivamus luctus commodo dolor porta feugiat.
                    </p>
                    </div>
                    <hr />
                    <div className="px-6 pt-2">
                    <div className="flex items-center mb-4">
                        <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-md text-white">Dec 20, 2022</span>
                    </div>
                    </div>
                    <div className="relative flex justify-end ml-10 pb-6">
                    <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                        Read More
                    </button>
                    </div>
                </div>
                </div>
            </section>

            <section className="  mx-auto service-section px-4 md:px-40 ">
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-6  ">

                    {/* Card 3 */}
                <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
                    <div className="relative h-48">
                    <Image src={user5} alt="Profile picture of a woman with glasses" layout="fill" objectFit="cover" className="w-full h-full object-cover"
                    />
                    </div>
                    <div className="px-6 py-4">
                    <div className="flex items-center mb-2">
                        <User className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-sm text-white">By : Admin</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                        <div className="text-white text-sm">Virtual Assistant</div>
                    </div>
                    <p className="text-gray-400 text-base">
                        Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                        Vivamus luctus commodo dolor porta feugiat.
                    </p>
                    </div>
                    <hr />
                    <div className="px-6 pt-2">
                    <div className="flex items-center mb-4">
                        <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-md text-white">Dec 20, 2022</span>
                    </div>
                    </div>
                    <div className="relative flex justify-end ml-10 pb-6">
                    <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                        Read More
                    </button>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  relative">
                    <div className="relative h-48">
                    <Image
                        src={user4}
                        alt="Profile picture of a woman with glasses"
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full object-cover"
                    />

                    <audio
                        controls
                        className="absolute bottom-0 left-0 right-0 z-10  p-0 outline-none rounded"
                    >
                        <source src="/path-to-your-audio-file.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    </div>
                    <div className="px-6 py-4">
                    <div className="flex items-center mb-2">
                        <User className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-sm text-white">By: Admin</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                        <div className="text-white text-sm">Virtual Assistant</div>
                    </div>
                    <p className="text-gray-400 text-base">
                        Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                        Vivamus luctus commodo dolor porta feugiat.
                    </p>
                    </div>
                    <hr />
                    <div className="px-6 pt-2">
                    <div className="flex items-center mb-4">
                        <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-md text-white">Dec 20, 2022</span>
                    </div>
                    </div>
                    <div className="relative flex justify-end ml-10 pb-6">
                    <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                        Read More
                    </button>
                    </div>
                </div>
                </div>
            </section>

            <section className="  mx-auto service-section px-4 md:px-40 pb-10 ">
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-6  ">
                {/* Card 1 */}
                <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
                    <div className="relative h-48 flex flex-col items-center justify-center bg-black">
                    <h1 className="text-white text-center text-5xl">Désolé</h1>
                    <p className="text-white text-center">
                        Cette vidéo n’existe pas.
                    </p>
                    </div>
                    <div className="px-6 py-4">
                    <div className="flex items-center mb-2">
                        <User className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-sm text-white">By : Admin</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                        <div className="text-white text-sm">Virtual Assistant</div>
                    </div>
                    <p className="text-gray-400 text-base">
                        Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                        Vivamus luctus commodo dolor porta feugiat.
                    </p>
                    </div>
                    <hr />
                    <div className="px-6 pt-2">
                    <div className="flex items-center mb-4">
                        <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-md text-white">Dec 20, 2022</span>
                    </div>
                    </div>
                    <div className="relative flex justify-end ml-10 pb-6">
                    <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                        Read More
                    </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
                    <div className="relative h-48">
                    <iframe
                        className="w-full h-full object-cover"
                        src="https://www.youtube.com/embed/dA8Smj5tZOQ?si=XY06spdEK9nfvskc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    </div>
                    <div className="px-6 py-4">
                    <div className="flex items-center mb-2">
                        <User className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-sm text-white">By : Admin</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                        <div className="text-white text-sm">Virtual Assistant</div>
                    </div>
                    <p className="text-gray-400 text-base">
                        Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                        Vivamus luctus commodo dolor porta feugiat.
                    </p>
                    </div>
                    <hr />
                    <div className="px-6 pt-2">
                    <div className="flex items-center mb-4">
                        <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-md text-white">Dec 20, 2022</span>
                    </div>
                    </div>
                    <div className="relative flex justify-end ml-10 pb-6">
                    <button className="bg-primary hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                        Read More
                    </button>
                    </div>
                </div>
                </div>
            </section>
                <Testimonials/>
        </div>
    );
}
export default TwoColumn