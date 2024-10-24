"use client"
import React from 'react';
import banner from '../public/image/portfolio-bannerimage.jpg';
import recentwork from '../public/image/tab-image1.jpg'
import recentwork2 from '../public/image/tab-image2.jpg'
import recentwork3 from '../public/image/tab-image3.jpg'
import recentwork4 from '../public/image/recentwork-image3.jpg'
import recentwork5 from '../public/image/tab-image5.jpg'

import Image from 'next/image';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Journey from '../components/Journey';
import { ArrowUpRight } from 'lucide-react';


const Portfolio = () => {
    return (   
        <div>
            <div className="relative bg-dark py-24" style={{ paddingLeft: "20px" }}>
                <div className="container mx-auto flex items-center justify-between px-4">
            {/* Phần văn bản bên trái */}
                <div className="w-full lg:w-1/2 text-left z-10" style={{ paddingLeft: "100px" }} data-aos="fade-left">
                    <h1 className="text-[76px] leading-[80px] font-semibold text-white mb-6">Our <br /> Portfolio</h1>
                    <p className="text-xl text-gray-300 mb-8">
                        Guis aute irure dolor in rearehenderit in <br />
                        eouta velireu esse fugiat nulla pariatur.
                    </p>
                        {/* Điều hướng Breadcrumb */}
                    <div className="flex w-fit space-x-2 p-[12px] bg-[#222224]">
                        <a href="#" className="text-white text-[18px] font-medium leading-[24px]"> Home</a>
                        <span className="text-gray-400 text-[18px] font-medium leading-[24px]">-</span>
                        <span className="text-[#E1B261] text-[18px] font-medium leading-[24px]">Portfolio</span>
                    </div>
                </div>
                {/* Phần hình ảnh bên phải */}
                <div className="w-full lg:w-[48%] z-10 lg:ml-[-3%]" data-aos="fade-up">
                    <Image src={banner}width={743}height={428}alt="about"priority={true} />
                </div>
                </div>
            </div>
            <div className="portfolio-section">
                <div className="service-section pt-[145px] pb-[120px]">
                <div className="container w-fit mx-auto px-4 py-10" >
                    <div className="text-center mb-12 aos-init aos-animate" data-aos="fade-right"> 
                        <h6 className="text-xl font-semibold tracking-widest text-primary mb-[18px]">Whats New</h6>
                        <h1 className="text-[46px] font-semibold text-center text-white leading-[58px] px-[170px] mb-[46px]">Recent Work We Have Done</h1>
                    </div>
                    <div className="tabs-box tabs-options">
                        <ul className='flex text-center items-center gap-14 text-[18px] justify-center '>
                            <li className='p-2 hover:text-[#E1B261] border-top-50 text-white  relative'><a href="">All</a></li>
                            <li className='p-2 hover:text-[#E1B261] border-top-50 text-white  relative'><a href="">Residential</a></li>
                            <li className='p-2 hover:text-[#E1B261] border-top-50 text-white  relative'><a href="">Corporate</a></li>
                            <li className='p-2 hover:text-[#E1B261] border-top-50 text-white  relative'><a href="">Restaurant</a></li>
                            <li className='p-2 hover:text-[#E1B261] border-top-50 text-white  relative'><a href="">Commercial</a></li>
                        </ul>
                        <div className="tab-content relative">
                            <div id='all' className="tab-pane fade in active show " >
                                <div className=" grid grid-cols-3 gap-6 position-relative aos-init aos-animate " data-aos="fade-up">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                        <div className='image'>
                                            <div className="tab-image mb-0">
                                                <Image src={recentwork} className="img-fluid" width={350} height={453} alt='' ></Image> 
                                            </div>
                                            <div className="box-content">
                                                <div className="content absolute top-[200px] left-[95px]">
                                                    <span className="text-white text-size-16"> Interior - Luxury Living</span>
                                                    <h4 className='text-white relative'>Kawa - Glamorous Penthouse</h4>
                                                    <a className="text-decoration-none absolute top-[70px] left-[95px] bg-primary p-4 text-white rounded-full" href="./page.tsx"><ArrowUpRight size={16} color="#ffff" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                        <div className='image'>
                                            <div className="tab-image mb-0">
                                                <Image src={recentwork2} className="img-fluid" width={350} height={453} alt='' ></Image> 
                                            </div>
                                            <div className="box-content ">
                                                <div className="content absolute top-[200px] left-[440px]">
                                                    <span className="text-white text-size-16"> Interior - Luxury Living</span>
                                                    <h4 className='text-white relative'>Kawa - Glamorous Penthouse</h4>
                                                    <a className="text-decoration-none absolute top-[70px] left-[95px] bg-primary p-4 text-white rounded-full" href="./page.tsx"><ArrowUpRight size={16} color="#ffff" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                        <div className='image'>
                                            <div className="tab-image mb-0">
                                                <Image src={recentwork3} className="img-fluid" width={350} height={453} alt='' ></Image> 
                                            </div>
                                            <div className="box-content">
                                                <div className="content absolute top-[200px] left-[850px]">
                                                    <span className="text-white text-size-16"> Interior - Luxury Living</span>
                                                    <h4 className='text-white'>Kawa - Glamorous Penthouse</h4>
                                                    <a className="text-decoration-none absolute top-[70px] left-[95px] bg-primary p-4 text-white rounded-full" href="./page.tsx"><ArrowUpRight size={16} color="#ffff" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-span-2 col-sm-8 col-12">
                                        <div className='image'>
                                            <div className="tab-image mb-0">
                                                <Image src={recentwork4} className="img-fluid " width={750} height={453} alt='' ></Image> 
                                            </div>
                                            <div className="box-content">
                                                <div className="content absolute top-[650px] left-[300px]">
                                                    <span className="text-white text-size-16"> Interior - Luxury Living</span>
                                                    <h4 className='text-white relative'>Kawa - Glamorous Penthouse</h4>
                                                    <a className="text-decoration-none absolute top-[70px] left-[95px] bg-primary p-4 text-white rounded-full" href="./page.tsx"><ArrowUpRight size={16} color="#ffff" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                        <div className='image'>
                                                <div className="tab-image mb-0">
                                                    <Image src={recentwork5} className="img-fluid" width={350} height={453} alt='' ></Image> 
                                                </div>
                                                <div className="box-content">
                                                    <div className="content absolute top-[650px] left-[850px]">
                                                        <span className="text-white text-size-16"> Interior - Luxury Living</span>
                                                        <h4 className='text-white'>Kawa - Glamorous Penthouse</h4>
                                                        <a className="text-decoration-none absolute top-[70px] left-[95px] bg-primary p-4 text-white rounded-full" href="./page.tsx"><ArrowUpRight size={16} color="#ffff" />
                                                        </a>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div id='residential' className="tab-pane fade">
                                <div className="  row position-relative aos-init aos-animate" data-aos="fade-up">
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-12"></div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-12"></div>
                                </div>
                            </div>
                            <div id='corporate' className="tab-pane fade"></div>
                            <div id='restaurant' className="tab-pane fade"></div>
                            <div id='Commercial' className="tab-pane fade"></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Testimonials/>
            <Journey/>
            <Blog/>
        </div>
    );
};
export default Portfolio;