import React from 'react'
import about from "../public/image/about-bannerimage.jpg";
import Image from 'next/image';
import { CalendarDays, Search, Tag, User } from 'lucide-react';
import user5 from "../public/image/standard_post_img05.jpg";

const ThreeColumnSidebar = () => {
    return (
        <div>
            <div className="relative bg-dark pt-24" style={{ paddingLeft: "20px" }}>
                <div className="container mx-auto flex items-center justify-between px-4">
                {/* Phần văn bản bên trái */}
                    <div className="w-full lg:w-1/2 pt-[20px] text-left z-10" style={{ paddingLeft: "100px" }} data-aos="fade-left">
                        <h1 className="text-[76px] leading-[80px] font-semibold text-white mb-6">Three Column Sidebar</h1>
                            <p className="text-[#a7a7a7] text-[22px] font-normal leading-[34px] mb-8">
                            Nuis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur. <br />
                        </p>
                        {/* Điều hướng Breadcrumb */}
                        <div className="flex w-fit space-x-2 p-[12px] bg-[#222224]">
                            <a href="#" className="text-white text-[18px] font-medium leading-[24px]"> Home</a>
                            <span className="text-gray-400 text-[18px] font-medium leading-[24px]">-</span>
                            <span className="text-[#E1B261] text-[18px] font-medium leading-[24px]">Three Column Sidebar</span>
                        </div>
                    </div>
                    {/* Phần hình ảnh bên phải */}
                    <div className="w-full lg:w-[65%] z-10 lg:ml-[-3%] lg:mb-[20%]" data-aos="fade-up">
                        <Image src={about}width={743}height={428}alt="about"priority={true} />
                    </div>
                </div>
            </div>
            <section className="mx-auto service-section px-40 py-10 flex gap-8">
                <div className="">
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
                            <p className="text-[#a7a7a7] text-[22px] font-normal leading-[34px]">
                                Nuis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur.
                                esse fugiat nulla pariatur.
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
                    {/* Card 3 */}
                    <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48">
                <Image
                src={user5}
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
                    {/* Card 4 */}
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
                <p className="text-[#a7a7a7] text-[22px] font-normal leading-[34px]">
                    Nuis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur.
                    esse fugiat nulla pariatur.
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
                    {/* Card 5 */}
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
                    {/* Card 6 */}
                    <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48">
                <Image
                src={user5}
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
                <div className="flex justify-center flex-col ">
                    <div className="input flex items-center">
                        <input type='text' placeholder='Search' className='bg-[#222224] text-[14px] leading-[18px] border border-[#5c5c5e] text-white px-4 py-3 w-full' />
                        <span className='py-[10px] px-4 bg-primary  '><Search/></span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ThreeColumnSidebar