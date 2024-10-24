"use client"
import React, { useEffect } from 'react';
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
import Aos from 'aos';
import 'aos/dist/aos.css';


const Portfolio = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (   
        <div> 
            <div className="relative bg-dark lg:py-24 custom-mobile:py-[20px] " style={{ paddingLeft: "5px" }}>
                <div className="container mx-auto lg:flex lg:items-center lg:flex-row custom-mobile:flex  custom-mobile:flex-col-reverse lg:justify-between  px-4">
            {/* Phần văn bản bên trái */}
                <div className="lg:w-1/2 lg:text-left custom-mobile:text-center z-10 lg:pl-[100px] custom-mobile:px-0" data-aos="fade-left">
                    <h1 className=" lg:text-[76px] custom-mobile:text-[24px] lg:leading-[80px] custom-mobile:leading-[34px] font-semibold lg:pt-0 custom-mobile:pt-6 text-white lg:mb-6">Our Portfolio</h1>
                    <p className="lg:text-xl custom-mobile:text-[14px]  text-gray-300 mb-8 lg:pt-0 custom-mobile:pt-1">
                        Guis aute irure dolor in rearehenderit in <br />
                        eouta velireu esse fugiat nulla pariatur.
                    </p>
                        {/* Điều hướng Breadcrumb */}
                    <div className="flex w-fit space-x-2 p-[12px]  lg:ml-0 custom-mobile:ml-[96px]  bg-[#222224]">
                        <a href="#" className="text-white lg:text-[18px] custom-mobile:text-[14px] font-medium leading-[24px]"> Home</a>
                        <span className="text-gray-400 lg:text-[18px] custom-mobile:text-[14px] font-medium leading-[24px]">-</span>
                        <span className="text-[#E1B261] lg:text-[18px] custom-mobile:text-[14px] font-medium leading-[24px]">Portfolio</span>
                    </div>
                </div>
                {/* Phần hình ảnh bên phải */}
                <div className="w-full lg:w-[48%] z-10 lg:ml-[-3%]" data-aos="fade-up">
                    <Image src={banner}width={743}height={428}alt="about" priority={true} />
                </div>
                </div>
            </div>
            <div className="portfolio-section">
                <div className="service-section lg:pt-[145px] lg:pb-[120px] custom-mobile:pt-[20px] custom-mobile:pb-[40px]">
                <div className="container w-fit mx-auto px-4 py-10" >
                    <div className="text-center mb-12 aos-init aos-animate" data-aos="fade-right"> 
                        <h6 className="lg:text-xl font-semibold tracking-widest text-primary lg:mb-[18px]">Whats New</h6>
                        <h1 className=" lg:text-[46px] custom-mobile:text-[18px] font-semibold text-center text-white lg:leading-[58px]  lg:px-[170px] lg:mb-[46px] custom-mobile:mb-[-40px] ">Recent Work We Have Done</h1>
                    </div>
                    <div className="tabs-box tabs-options">
                        <ul className='flex text-center items-center lg:gap-14 custom-mobile:gap-2 lg:text-[18px] custom-mobile:text-[12px] justify-center '>
                            <li className='p-2 hover:text-[#E1B261] border-top-50 text-white  relative'><a href="">All</a></li>
                            <li className='p-2 hover:text-[#E1B261] border-top-50 text-white  relative'><a href="">Residential</a></li>
                            <li className='p-2 hover:text-[#E1B261] border-top-50 text-white  relative'><a href="">Corporate</a></li>
                            <li className='p-2 hover:text-[#E1B261] border-top-50 text-white  relative'><a href="">Restaurant</a></li>
                            <li className='p-2 hover:text-[#E1B261] border-top-50 text-white  relative'><a href="">Commercial</a></li>
                        </ul>
                        <div className="tab-content relative">
                            <div id='all' className="tab-pane fade in active show " >
                                <div className=" grid lg:grid-cols-3 custom-mobile:grid-cols-1 gap-6 position-relative aos-init aos-animate " data-aos="fade-up">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                        <div className='image'>
                                            <div className="tab-image mb-0">
                                                <Image src={recentwork} className="img-fluid " width={350} height={453} alt='' ></Image> 
                                            </div>
                                            <div className="box-content">
                                                <div className="content absolute text-center lg:top-[200px] lg:left-[95px] custom-mobile:top-[160px] custom-mobile:left-[65px]">
                                                    <span className="text-white lg:text-size-16 custom-mobile:text-size-10"> Interior - Luxury Living</span>
                                                    <h4 className='text-white relative'>Kawa - Glamorous Penthouse</h4>
                                                    <a className="text-decoration-none absolute lg:top-[70px] lg:left-[95px] custom-mobile:top-[60px] custom-mobile:left-[80px] hover:-translate-y-2 transition-all duration-300 bg-primary p-4 text-white rounded-full" href="./page.tsx"><ArrowUpRight size={16} color="#ffff" />
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
                                                <div className="content absolute text-center lg:top-[200px] lg:left-[440px] custom-mobile:top-[650px] custom-mobile:left-[66px] ">
                                                    <span className="text-white lg:text-size-16 custom-mobile:text-size-10"> Interior - Luxury Living</span>
                                                    <h4 className='text-white relative'>Kawa - Glamorous Penthouse</h4>
                                                    <a className="text-decoration-none absolute lg:top-[70px] lg:left-[95px] custom-mobile:top-[60px] custom-mobile:left-[80px] hover:-translate-y-2 transition-all duration-300 bg-primary p-4 text-white rounded-full" href="./page.tsx"><ArrowUpRight size={16} color="#ffff" />
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
                                                <div className="content absolute text-center lg:top-[200px] lg:left-[830px] custom-mobile:top-[1100px]  custom-mobile:left-[66px] ">
                                                    <span className="text-white lg:text-size-16 custom-mobile:text-size-10"> Interior - Luxury Living</span>
                                                    <h4 className='text-white'>Kawa - Glamorous Penthouse</h4>
                                                    <a className="text-decoration-none absolute lg:top-[70px] lg:left-[95px] custom-mobile:top-[60px] custom-mobile:left-[80px] hover:-translate-y-2 transition-all duration-300 bg-primary p-4 text-white rounded-full" href="./page.tsx"><ArrowUpRight size={16} color="#ffff" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 lg:col-span-2 col-sm-8 col-12">
                                        <div className='image'>
                                            <div className="tab-image mb-0">
                                                <Image src={recentwork4} className="img-fluid " width={750} height={453} alt='' ></Image> 
                                            </div>
                                            <div className="box-content">
                                                <div className="content absolute text-center lg:top-[650px] lg:left-[300px] custom-mobile:top-[1438px] custom-mobile:left-[66px]">
                                                    <span className="text-white lg:text-size-16 custom-mobile:text-size-10"> Interior - Luxury Living</span>
                                                    <h4 className='text-white relative'>Kawa - Glamorous Penthouse</h4>
                                                    <a className="text-decoration-none absolute lg:top-[70px] lg:left-[95px] custom-mobile:top-[60px] custom-mobile:left-[80px] hover:-translate-y-2 transition-all duration-300 bg-primary p-4 text-white rounded-full" href="./page.tsx"><ArrowUpRight size={16} color="#ffff" />
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
                                                    <div className="content absolute text-center lg:top-[650px]  lg:left-[850px] custom-mobile:top-[1800px] custom-mobile:left-[66px]">
                                                        <span className="text-white lg:text-size-16 custom-mobile:text-size-10 "> Interior - Luxury Living</span>
                                                        <h4 className='text-white'>Kawa - Glamorous Penthouse</h4>
                                                        <a className="text-decoration-none absolute lg:top-[70px] lg:left-[95px] custom-mobile:top-[60px] custom-mobile:left-[80px] hover:-translate-y-2 transition-all duration-300 bg-primary p-4 text-white rounded-full" href="./page.tsx"><ArrowUpRight size={16} color="#ffff" />
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