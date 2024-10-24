"use client"
import React from 'react'
import about from "../public/image/about-bannerimage.jpg";
import Image from 'next/image';
import { CalendarDays, Clock, Search, Tag, User, Twitter } from 'lucide-react';
import user5 from "../public/image/standard_post_img05.jpg";
import Testimonials from '../components/Testimonials';
import post1 from '../public/image/side_post_img01.jpg';
import post2 from '../public/image/side_post_img02.jpg';
import post3 from '../public/image/side_post_img03.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ThreeColumnSidebar = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <div className="lg:py-24 pr-[20px] pl-[26px] custom-mobile:pb-[60px]">
                <div className="container lg:mx-auto lg:flex lg:flex-row lg:items-center lg:justify-between custom-mobile:flex custom-mobile:flex-col-reverse lg:px-4">
                <div className="w-full lg:w-1/2 text-left z-10 lg:pl-[100px]"  data-aos="fade-left">
                    <h1 className="lg:text-[76px] lg:pt-0 custom-mobile:pt-[20px] custom-mobile:mb-[10px] lg:mb-0 custom-mobile:text-center lg:text-start lg:leading-[80px] font-semibold text-white mb-6 custom-mobile:text-[24px] custom-mobile:leading-[34px]">Three Column Sidebar</h1>
                    <p className="lg:text-xl custom-mobile:mb-[25px] text-gray-300 lg:mb-8 custom-mobile:text-[14px] lg:text-start custom-mobile:leading-[24px] custom-mobile:text-center">
                        Nuis aute irure dolor in rearehenderit in eouta velireu esse fugiat nulla pariatur.
                    </p>
                        {/* Điều hướng Breadcrumb */}
                    <div className="flex w-fit space-x-2 lg:p-[12px] lg:ml-0 custom-mobile:ml-[70px] custom-mobile:py-[8px] custom-mobile:px-[15px] bg-[#222224]">
                        <a href="#" className="text-white lg:text-[18px] font-medium lg:leading-[24px] custom-mobile:text-[14px] custom-mobile:leading-[22px]"> Home</a>
                        <span className="text-gray-400 text-[18px] font-medium leading-[24px]">-</span>
                        <span className="text-[#E1B261] lg:text-[18px] font-medium lg:leading-[24px] custom-mobile:text-[14px] custom-mobile:leading-[22px]">Three Column Sidebar</span>
                    </div>
                </div>
                <div className="w-full lg:w-[48%] z-10 lg:ml-[-3%]" data-aos="fade-up">
                    <Image src={about}width={743}height={428}alt="about"priority={true} />
                </div>
                </div>
            </div>
            <section className="mx-auto service-section lg:px-40 lg:py-[120px] lg:flex lg:flex-row custom-mobile:flex-col custom-mobile:px-[15px] gap-8">
                <div className="grid lg:grid-cols-3 custom-mobile:grid-cols-1 gap-7 h-[70%]">
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
                            <p className="text-[#a7a7a7] text-[16px] font-normal">
                                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                                Vivamus luctus commodo dolor porta feugiat.
                            </p>
                    </div>
                <hr />
                <div className="pl-6 pt-2 relative">
                    <div className="flex items-center mb-4 pb-5">
                        <CalendarDays size={20} className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-md text-white">Dec 20, 2022</span>
                        <button className="bg-primary absolute top-[5px] right-0 hover:bg-gray-500 text-white transition-all duration-300 py-2 px-3 rounded-l-full">
                            Read More
                        </button>
                    </div>
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
                <div className="pl-6 pt-2 relative">
                    <div className="flex items-center mb-4 pb-5">
                        <CalendarDays size={20} className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-md text-white">Dec 20, 2022</span>
                        <button className="bg-primary absolute top-[5px] right-0 hover:bg-gray-500 text-white transition-all duration-300 py-2 px-3 rounded-l-full">
                            Read More
                        </button>
                    </div>
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
                <div className="pl-6 pt-2 relative">
                    <div className="flex items-center mb-4 pb-5">
                        <CalendarDays size={20} className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-md text-white">Dec 20, 2022</span>
                        <button className="bg-primary absolute top-[5px] right-0 hover:bg-gray-500 text-white transition-all duration-300 py-2 px-3 rounded-l-full">
                            Read More
                        </button>
                    </div>
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
                <p className="text-[#a7a7a7] text-[16px] font-normal">
                    Nuis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur.
                    esse fugiat nulla pariatur.
                </p>
            </div>
            <hr />
                <div className="pl-6 pt-2 relative">
                    <div className="flex items-center mb-4 pb-5">
                        <CalendarDays size={20} className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-md text-white">Dec 20, 2022</span>
                        <button className="bg-primary absolute top-[5px] right-0 hover:bg-gray-500 text-white transition-all duration-300 py-2 px-3 rounded-l-full">
                            Read More
                        </button>
                    </div>
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
                <div className="pl-6 pt-2 relative">
                    <div className="flex items-center mb-4 pb-5">
                        <CalendarDays size={20} className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-md text-white">Dec 20, 2022</span>
                        <button className="bg-primary absolute top-[5px] right-0 hover:bg-gray-500 text-white transition-all duration-300 py-2 px-3 rounded-l-full">
                            Read More
                        </button>
                    </div>
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
                <div className="pl-6 pt-2 relative">
                    <div className="flex items-center mb-4 pb-5">
                        <CalendarDays size={20} className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-md text-white">Dec 20, 2022</span>
                        <button className="bg-primary absolute top-[5px] right-0 hover:bg-gray-500 text-white transition-all duration-300 py-2 px-3 rounded-l-full">
                            Read More
                        </button>
                    </div>
                </div>
                    </div>
                </div>
                <div className="lg:flex lg:justify-center custom-mobile:flex-col pt-[40px]">
                    <div>
                        <div className='flex items-center border-b border-[#5c5c5e] pb-[30px] mb-[30px]'>
                            <input type='text' placeholder='Search'className='bg-[#222224] border rounded-l-lg text-[14px] leading-[18px] border border-[#5c5c5e] text-white px-4 py-3 w-full' />
                            <span className='boder rounded-r-lg py-[10px] px-4 bg-primary'><Search/></span>
                        </div>
                        <div className='pb-[30px] mb-[30px] border-b border-[#5c5c5e]'>
                            <div className='mb-[30px]'>
                                <ul className='flex items-center gap-4 border-b border-[#5c5c5e]'>
                                    <li className='p-[10px] active:border-b border-primary selection:'><button>Popular</button></li>
                                    <li className='p-[10px] active:border-b border-primary'><button>Featured</button></li>
                                    <li className='p-[10px] active:border-b border-primary'><button>Recent</button></li>
                                </ul>
                            </div>
                            <div className='flex gap-2 border-b border-[#5c5c5e] pb-[10px] mb-[10px]'>
                                <Image className='w-[80px] h-[72px]' src={post1} alt='post1' data-aos="fade-up"/>
                                <div className='relative'>
                                    <a href="">
                                        A true story, that never been told!
                                    </a>
                                    <span className='flex absolute top-[24px] items-center gap-1 lg:left-[75px] custom-mobile:left-[115px] text-[#aaa]'><Clock size={13}/>6m ago</span>
                                    <div className='flex items-center gap-2'>
                                        <span><Tag size={15}/></span>
                                            <p className='text-[#aaa]'>Technology</p>
                                        </div>
                                </div>
                            </div>
                            <div className='flex gap-2 border-b border-[#5c5c5e] pb-[10px] mb-[10px]'>
                                <Image className='w-[80px] h-[72px]' src={post2} alt='post1' data-aos="fade-up"/>
                                <div className='relative'>
                                    <a href="">
                                        Beautiful nature, and rare feathers!
                                    </a>
                                    <span className='flex absolute top-[24px] items-center gap-1 left-[75px] custom-mobile:left-[115px] text-[#aaa]'><Clock size={13}/>24h ago</span>
                                    <div className='flex items-center gap-2'>
                                        <span><Tag size={15}/></span>
                                            <p className='text-[#aaa]'>Lifestyle</p>
                                        </div>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <Image className='w-[80px] h-[72px]' src={post3} alt='post1' data-aos="fade-up"/>
                                <div className='relative'>
                                    <a href="">
                                        The most happiest time of the day!
                                    </a>
                                    <span className='flex absolute top-[24px] items-center gap-1 left-[75px] custom-mobile:left-[115px] text-[#aaa]'><Clock size={13}/>11h ago</span>
                                    <div className='flex items-center gap-2'>
                                        <span><Tag size={15}/></span>
                                            <p className='text-[#aaa]'>Lifestyle</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='mb-[60px]'>
                                <p className='text-[18px] leading-[24px] uppercase font-medium mb-5'>Categories</p>
                                <ul className='flex flex-col gap-[10px]'>
                                    <li className='pl-[28px] pb-[10px] border-b border-[#5c5c5e] flex justify-between'><a href="">Coupons</a><span className='text-primary'>(2)</span></li>
                                    <li className='pl-[28px] pb-[10px] border-b border-[#5c5c5e] flex justify-between'><a href="">Coupons</a><span className='text-primary'>(2)</span></li>
                                    <li className='pl-[28px] pb-[10px] border-b border-[#5c5c5e] flex justify-between'><a href="">Coupons</a><span className='text-primary'>(2)</span></li>
                                    <li className='pl-[28px] pb-[10px] border-b border-[#5c5c5e] flex justify-between'><a href="">Coupons</a><span className='text-primary'>(2)</span></li>
                                    <li className='pl-[28px] pb-[10px] border-b border-[#5c5c5e] flex justify-between'><a href="">Coupons</a><span className='text-primary'>(2)</span></li>
                                    <li className='pl-[28px] pb-[10px] border-b border-[#5c5c5e] flex justify-between'><a href="">Coupons</a><span className='text-primary'>(2)</span></li>
                                    <li className='pl-[28px] pb-[10px] border-b border-[#5c5c5e] flex justify-between'><a href="">Coupons</a><span className='text-primary'>(2)</span></li>
                                    <li className='pl-[28px] pb-[10px] border-b border-[#5c5c5e] flex justify-between'><a href="">Coupons</a><span className='text-primary'>(2)</span></li>
                                    <li className='pl-[28px] pb-[10px] border-b border-[#5c5c5e] flex justify-between'><a href="">Coupons</a><span className='text-primary'>(2)</span></li>
                                    <li className='pl-[28px] pb-[10px] border-b border-[#5c5c5e] flex justify-between'><a href="">Coupons</a><span className='text-primary'>(2)</span></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='mb-[30px] pb-[30px] border-b border-[#5c5c5e]'>
                                <h4 className='lg:mb-[20px] custom-mobile:mb-[20px] lg:text-[18px] lg:leading-[24px] font-medium uppercase'>Recent Tweets</h4>
                                <div className='flex gap-2'>
                                    <div >
                                        <div>
                                            <span><Twitter/></span>
                                        </div>
                                        <div className='pt-[53px]'>
                                            <span ><Twitter/></span>
                                        </div>
                                    </div>
                                    <div>
                                        <ul>
                                            <li className='text-[14px] flex flex-col mb-[18px]'>Rule number 1: Don&apos;t overthink it <a className='text-primary' href="">https://t.co/T9Vg7b9XuI</a>
                                                <small className='text-[#999]'>Sep/12/2019</small>
                                            </li>
                                            <li className='text-[14px] flex flex-col mb-[18px]'>Smart OR Stylish? How do you balance design principles with design trends? <a className='text-primary' href="">https://t.co/kR5EhraUuK</a>
                                                <small className='text-[#999]'>Sep/10/2019</small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='pb-[30px] border-b border-[#5c5c5e]'>
                                <h4 className='lg:mb-[20px] lg:text-[18px] lg:leading-[24px] font-medium uppercase'>Tags</h4>
                                <div className='grid grid-cols-3 gap-2'>
                                    <a className='border-2 text-[14px] text-center hover:bg-primary hover:text-white border-primary rounded-full text-primary p-[6px]' href="">Design</a>
                                    <a className='border-2 text-[14px] text-center hover:bg-primary hover:text-white border-primary rounded-full text-primary p-[6px]' href="">Portfolio</a>
                                    <a className='border-2 text-[14px] text-center hover:bg-primary hover:text-white border-primary rounded-full text-primary p-[6px]' href="">Digital</a>
                                    <a className='border-2 text-[14px] text-center hover:bg-primary hover:text-white border-primary rounded-full text-primary p-[6px]' href="">Branding</a>
                                    <a className='border-2 text-[14px] text-center hover:bg-primary hover:text-white border-primary rounded-full text-primary p-[6px]' href="">HTML</a>
                                    <a className='border-2 text-[14px] text-center hover:bg-primary hover:text-white border-primary rounded-full text-primary p-[6px]' href="">Clean</a>
                                    <a className='border-2 text-[14px] text-center hover:bg-primary hover:text-white border-primary rounded-full text-primary p-[6px]' href="">Peace</a>
                                    <a className='border-2 text-[14px] text-center hover:bg-primary hover:text-white border-primary rounded-full text-primary p-[6px]' href="">Love</a>
                                    <a className='border-2 text-[14px] text-center hover:bg-primary hover:text-white border-primary rounded-full text-primary p-[6px]' href="">CSS3</a>
                                    <a className='border-2 text-[14px] text-center hover:bg-primary hover:text-white border-primary rounded-full text-primary p-[6px]' href="">jQuery</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials/>
        </div>
    )
}

export default ThreeColumnSidebar