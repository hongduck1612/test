import React from 'react'
import blog_img1 from '../public/image/blog-image1.jpg'
import blog_img2 from '../public/image/blog-image2.jpg'
import blog_img3 from '../public/image/blog-image3.jpg'
import ligh_img from "../public/image/top-lightimage.png";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const Blog = () => {
    return (
        <div>
            <div className="blog-section lg:pt-[142px] lg:pb-[150px] custom-mobile:pb-[55px] relative">
                <div className="absolute top-0 left-1 img-section pl-[50px] custom-mobile:hidden lg:block">
                    <Image src={ligh_img} alt="Blog Image" />
                </div>
                <div className="contaier relative lg:px-[200px]">
                    <div className="text-center">
                        <h6 className="lg:text-[18px] lg:leading-[26px] custom-mobile:text-[14px] custom-mobile:leading-[20px] font-normal tracking-[1.2px] lg:mb-[18px] custom-mobile:mb-[6px] text-primary">Latest News</h6>
                        <h2 className="lg:text-[42px] lg:leading-[54px] custom-mobile:text-[18px] custom-mobile:leading-[28px] lg:mb-[46px] custom-mobile:mb-5 font-semibold">Our Recent Blog Posts</h2>
                    </div>
                    <Swiper
                    grabCursor={true}
                    spaceBetween={30}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination = {{el: '.third-swiper-pagination', clickable: true,}}
                    modules={[Autoplay,Navigation,Pagination]}
                    >
                    <div className="lg:flex lg:justify-between gap-8 mt-[70px] custom-mobile:flex custom-mobile:flex-col">
                        <SwiperSlide>
                            <div>
                                <div>
                                    <Image className="custom-mobile:w-full custom-mobile:px-[15px]" src={blog_img1} alt="Blog Image"/>
                                </div>
                                <div className="lg:pl-[26px] lg:pt-[18px] custom-mobile:mx-[15px] custom-mobile:px-[10px] bg-[#222224]">
                                    <span className=" text-[16px] leading-[24px] text-primary">June 22, 2021</span>
                                    <h5 className=" pb-[15px] text-[20px] leading-[30px] font-semibold w-fit">Renovation of Architec and Design</h5>
                                    <p className="pb-[35px]">Debitis aut rerum nec sitatoe bus saerue eveniet...</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div>
                                    <Image className="custom-mobile:w-full custom-mobile:px-[15px]" src={blog_img2} alt="Blog Image"/>
                                </div>
                                <div className="lg:pl-[26px] lg:pt-[18px] custom-mobile:mx-[15px] custom-mobile:px-[10px] bg-[#222224]">
                                    <span className=" text-[16px] leading-[24px] text-primary">Mar 20, 2021</span>
                                    <h5 className=" pb-[15px] text-[20px] leading-[30px] font-semibold w-fit">Renovation of Architec and Design</h5>
                                    <p className="pb-[35px]">Debitis aut rerum nec sitatoe bus saerue eveniet...</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div>
                                    <Image className="custom-mobile:w-full custom-mobile:px-[15px]" src={blog_img3} alt="Blog Image"/>
                                </div>
                                <div className="lg:pl-[26px] lg:pt-[18px] custom-mobile:mx-[15px] custom-mobile:px-[10px] bg-[#222224]">
                                    <span className=" text-[16px] leading-[24px] text-primary">Mar 20, 2021</span>
                                    <h5 className=" pb-[15px] text-[20px] leading-[30px] font-semibold w-fit">Renovation of Architec and Design</h5>
                                    <p className="pb-[35px]">Debitis aut rerum nec sitatoe bus saerue eveniet...</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div>
                                    <Image className="custom-mobile:w-full custom-mobile:px-[15px]" src={blog_img1} alt="Blog Image"/>
                                </div>
                                <div className="lg:pl-[26px] lg:pt-[18px] custom-mobile:mx-[15px] custom-mobile:px-[10px] bg-[#222224]">
                                    <span className=" text-[16px] leading-[24px] text-primary">June 22, 2021</span>
                                    <h5 className=" pb-[15px] text-[20px] leading-[30px] font-semibold w-fit">Renovation of Architec and Design</h5>
                                    <p className="pb-[35px]">Debitis aut rerum nec sitatoe bus saerue eveniet...</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div>
                                    <Image className="custom-mobile:w-full custom-mobile:px-[15px]" src={blog_img2} alt="Blog Image"/>
                                </div>
                                <div className="lg:pl-[26px] lg:pt-[18px] custom-mobile:mx-[15px] custom-mobile:px-[10px] bg-[#222224]">
                                    <span className=" text-[16px] leading-[24px] text-primary">Mar 20, 2021</span>
                                    <h5 className=" pb-[15px] text-[20px] leading-[30px] font-semibold w-fit">Renovation of Architec and Design</h5>
                                    <p className="pb-[35px]">Debitis aut rerum nec sitatoe bus saerue eveniet...</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div>
                                    <Image className="custom-mobile:w-full custom-mobile:px-[15px]" src={blog_img3} alt="Blog Image"/>
                                </div>
                                <div className="lg:pl-[26px] lg:pt-[18px] custom-mobile:mx-[15px] custom-mobile:px-[10px] bg-[#222224]">
                                    <span className=" text-[16px] leading-[24px] text-primary">Mar 20, 2021</span>
                                    <h5 className=" pb-[15px] text-[20px] leading-[30px] font-semibold w-fit">Renovation of Architec and Design</h5>
                                    <p className="pb-[35px]">Debitis aut rerum nec sitatoe bus saerue eveniet...</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    </Swiper>
                    <div className="third-swiper-pagination flex justify-center items-center gap-8 mt-12"></div>
                </div>
            </div>
        </div>
    )
}

export default Blog