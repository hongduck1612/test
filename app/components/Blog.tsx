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
            <div className="blog-section pt-[142px] pb-[150px] relative">
        <div className="absolute top-0 left-1 img-section pl-[50px]">
            <Image src={ligh_img} alt="Blog Image" />
        </div>
        <div className="contaier relative px-[200px]">
            <div className="text-center">
                <h6 className="text-[18px] leading-[26px] font-normal tracking-[1.2px] mb-[18px] text-primary">Latest News</h6>
                <h2 className="text-[42px] leading-[54px] mb-[46px] font-semibold">Our Recent Blog Posts</h2>
            </div>
            <Swiper
            grabCursor={true}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            }}
            pagination = {{el: '.third-swiper-pagination', clickable: true,}}
            modules={[Autoplay,Navigation,Pagination]}
            >
            <div className="flex justify-between gap-8 mt-[70px]">
            <SwiperSlide>
                <div>
                    <div>
                        <Image src={blog_img1} alt="Blog Image"/>
                    </div>
                <div className="pl-[26px] pt-[18px] bg-[#222224]">
                    <span className=" text-[16px] leading-[24px] text-primary">June 22, 2021</span>
                    <h5 className=" pb-[15px] text-[20px] leading-[30px] font-semibold w-fit">Renovation of Architec and Design</h5>
                    <p className="pb-[35px]">Debitis aut rerum nec sitatoe bus saerue eveniet...</p>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <div>
                    <Image src={blog_img2} alt="Blog Image"/>
                    </div>
                <div className="pl-[26px] pt-[18px] bg-[#222224]">
                    <span className=" text-[16px] leading-[24px] text-primary">Mar 20, 2021</span>
                    <h5 className=" pb-[15px] text-[20px] leading-[30px] font-semibold w-fit">Renovation of Architec and Design</h5>
                    <p className="pb-[35px]">Debitis aut rerum nec sitatoe bus saerue eveniet...</p>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div>
                <div>
                    <Image src={blog_img3} alt="Blog Image"/>
                </div>
                <div className="pl-[26px] pt-[18px] bg-[#222224]">
                    <span className=" text-[16px] leading-[24px] text-primary">Mar 20, 2021</span>
                    <h5 className=" pb-[15px] text-[20px] leading-[30px] font-semibold w-fit">Renovation of Architec and Design</h5>
                    <p className="pb-[35px]">Debitis aut rerum nec sitatoe bus saerue eveniet...</p>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                <div>
                    <Image src={blog_img1} alt="Blog Image"/>
                </div>
                <div className="pl-[26px] pt-[18px] bg-[#222224]">
                    <span className=" text-[16px] leading-[24px] text-primary">June 22, 2021</span>
                    <h5 className=" pb-[15px] text-[20px] leading-[30px] font-semibold w-fit">Renovation of Architec and Design</h5>
                    <p className="pb-[35px]">Debitis aut rerum nec sitatoe bus saerue eveniet...</p>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                <div>
                    <Image src={blog_img2} alt="Blog Image"/>
                </div>
                <div className="pl-[26px] pt-[18px] bg-[#222224]">
                    <span className=" text-[16px] leading-[24px] text-primary">Mar 20, 2021</span>
                    <h5 className=" pb-[15px] text-[20px] leading-[30px] font-semibold w-fit">Renovation of Architec and Design</h5>
                    <p className="pb-[35px]">Debitis aut rerum nec sitatoe bus saerue eveniet...</p>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div>
                <div>
                    <Image src={blog_img3} alt="Blog Image"/>
                </div>
                <div className="pl-[26px] pt-[18px] bg-[#222224]">
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