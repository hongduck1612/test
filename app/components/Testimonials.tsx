import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonial_img1 from '../public/image/testimonial-image1.png'
import testimonial_img2 from '../public/image/testimonial-image2.png'
import ligh_img from "../public/image/top-lightimage.png";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';



const Testimonials = () => {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth >= 375 && window.innerWidth <= 1024);
        };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="testimonials-section lg:pt-[142px] lg:pb-[140px] custom-mobile:py-[55px] custom-mobile:px-[15px] overflow-hidden">
            <div className="relative lg:block custom-mobile:hidden">
                <Image
                className="absolute top-[-143px] left-[1320px]"
                src={ligh_img}
                alt="Light Image"
                width={156}
                height={284}
                />
            </div>
            <div className="container lg:px-[30px] lg:mx-auto">
                <div className="text-content text-center" data-aos="fade-right">
                    <h6 className="lg:mb-[18px] custom-mobile:mb-[8px] lg:text-[18px] custom-mobile:text-[14px] font-normal lg:leading-[26px] custom-mobile:leading-[18px] tracking-[2px] text-primary">
                    Testimonials
                    </h6>
                    <h2 className="lg:px-10 lg:mb-[46px] custom-mobile:pb-5 lg:text-[46px] lg:leading-[56px] font-semibold gap-3 custom-mobile:text-[18px] custom-mobile:leading-[28px]">
                    Trusted By Over 30,000 Worldwide Customers Since 1998
                    </h2>
                </div>
            {/* Swiper Slider */}
            <Swiper
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
            }}
            pagination={{
                el: '.second-swiper-pagination',
                clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            >
        {/* Slide 1 */}
        <SwiperSlide>
        <div className="box flex bg-[#222224] border-r-[2px] border-r-[#E1B261] lg:gap-8 lg:pt-[36px] lg:pb-[18px] lg:pl-[40px] lg:pr-[30px] custom-mobile:px-[15px] custom-mobile:py-[20px] custom-mobile:gap-2">
            <div className="box-img relative">
                <Image
                src={testimonial_img1}
                className={`${isMobile ? 'max-w-[70px]' : 'max-w-none max-h-none'}`}
                alt="Testimonial Image"
                />
                <span className="absolute lg:top-[83px] lg:left-[35px] lg:p-[5px] custom-mobile:top-[50px] custom-mobile:left-[20px] custom-mobile:p-[3px] rounded-full bg-primary">
                    <Quote />
                </span>
            </div>
            <div className="box-content flex flex-col lg:pl-[30px] custom-mobile:pl-[15px] border-l border-l-[#5c5c5e]">
                <p className="lg:mr-5 mb-[6px] lg:text-[18px] lg:leading-[26px] custom-mobile:text-[14px] custom-mobile:leading-[24px] text-[#a7a7a7]">
                    Duis aute irure dolor in reprehender in voluptate velit esse
                    cillum dolore fugiat nulla pariatur...
                </p>
            <div className="flex flex-row mb-[12px]">
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
            </div>
            <div className="flex justify-around lg:gap-[185px] custom-mobile:gap-[99px]">
                <div>
                    <p>Kevin Andrew</p>
                    <p className="text-[#a7a7a7]">Happy Customer</p>
                </div>
                <span>
                    <Quote size={isMobile ? 30 : 50} strokeWidth={isMobile ? 2 : 3} />
                </span>
            </div>
        </div>
        </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
        <div className="box flex bg-[#222224] border-r-[2px] border-r-[#E1B261] lg:gap-8 lg:pt-[36px] lg:pb-[18px] lg:pl-[40px] lg:pr-[30px] custom-mobile:px-[15px] custom-mobile:py-[20px] custom-mobile:gap-2">
            <div className="box-img relative">
                <Image
                className={`${isMobile ? 'max-w-[70px]' : 'max-w-none max-h-none'}`}
                src={testimonial_img2}
                alt="Testimonial Image"
                />
                <span className="absolute lg:top-[83px] lg:left-[35px] lg:p-[5px] custom-mobile:top-[50px] custom-mobile:left-[20px] custom-mobile:p-[3px] rounded-full bg-primary">
                <Quote />
                </span>
            </div>
            <div className="box-content flex flex-col lg:pl-[30px] custom-mobile:pl-[15px] border-l border-l-[#5c5c5e]">
                <p className="lg:mr-5 mb-[6px] lg:text-[18px] lg:leading-[26px] custom-mobile:text-[14px] custom-mobile:leading-[24px] text-[#a7a7a7]">
                    Duis aute irure dolor in reprehender in voluptate velit esse
                    cillum dolore fugiat nulla pariatur...
                </p>
                <div className="flex flex-row mb-[12px]">
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                </div>
                <div className="flex justify-around lg:gap-[185px] custom-mobile:gap-[99px]">
                    <div>
                        <p>Alina James</p>
                        <p className="text-[#a7a7a7]">Happy Customer</p>
                    </div>
                    <span>
                        <Quote size={isMobile ? 30 : 50} strokeWidth={isMobile ? 2 : 3} />
                </span>
                </div>
            </div>
        </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
        <div className="box flex bg-[#222224] border-r-[2px] border-r-[#E1B261] lg:gap-8 lg:pt-[36px] lg:pb-[18px] lg:pl-[40px] lg:pr-[30px] custom-mobile:px-[15px] custom-mobile:py-[20px] custom-mobile:gap-2">
            <div className="box-img relative">
                <Image
                className={`${isMobile ? 'max-w-[70px]' : 'max-w-none max-h-none'}`}
                src={testimonial_img1}
                alt="Testimonial Image"
                />
                <span className="absolute lg:top-[83px] lg:left-[35px] lg:p-[5px] custom-mobile:top-[50px] custom-mobile:left-[20px] custom-mobile:p-[3px] rounded-full bg-primary">
                    <Quote/>
                </span>
            </div>
            <div className="box-content flex flex-col lg:pl-[30px] custom-mobile:pl-[15px] border-l border-l-[#5c5c5e]">
                <p className="lg:mr-5 mb-[6px] lg:text-[18px] lg:leading-[26px] custom-mobile:text-[14px] custom-mobile:leading-[24px] text-[#a7a7a7]">
                    Duis aute irure dolor in reprehender in voluptate velit esse
                    cillum dolore fugiat nulla pariatur...
                </p>
            <div className="flex flex-row mb-[12px]">
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
            </div>
            <div className="flex justify-around lg:gap-[185px] custom-mobile:gap-[99px]">
                <div>
                    <p>Kevin Andrew</p>
                    <p className="text-[#a7a7a7]">Happy Customer</p>
                </div>
                <span>
                    <Quote size={isMobile ? 30 : 50} strokeWidth={isMobile ? 2 : 3} />
                </span>
            </div>
        </div>
    </div>
    </SwiperSlide>

      {/* Slide 4 */}
        <SwiperSlide>
        <div className="box flex bg-[#222224] border-r-[2px] border-r-[#E1B261] lg:gap-8 lg:pt-[36px] lg:pb-[18px] lg:pl-[40px] lg:pr-[30px] custom-mobile:px-[15px] custom-mobile:py-[20px] custom-mobile:gap-2">
            <div className="box-img relative">
                <Image
                className={`${isMobile ? 'max-w-[70px]' : 'max-w-none max-h-none'}`}
                src={testimonial_img2}
                alt="Testimonial Image"
                />
                <span className="absolute lg:top-[83px] lg:left-[35px] lg:p-[5px] custom-mobile:top-[50px] custom-mobile:left-[20px] custom-mobile:p-[3px] rounded-full bg-primary">
                    <Quote />
                </span>
            </div>
            <div className="box-content flex flex-col lg:pl-[30px] custom-mobile:pl-[15px] border-l border-l-[#5c5c5e]">
                <p className="lg:mr-5 mb-[6px] lg:text-[18px] lg:leading-[26px] custom-mobile:text-[14px] custom-mobile:leading-[24px] text-[#a7a7a7]">
                    Duis aute irure dolor in reprehender in voluptate velit esse
                    cillum dolore fugiat nulla pariatur...
                </p>
            <div className="flex flex-row mb-[12px]">
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
                <span className="text-primary">
                    <Star size={isMobile ? 15 : 20} />
                </span>
            </div>
            <div className="flex justify-around lg:gap-[185px] custom-mobile:gap-[99px]">
                <div>
                    <p>Alina James</p>
                    <p className="text-[#a7a7a7]">Happy Customer</p>
                </div>
                <span>
                    <Quote size={isMobile ? 30 : 50} strokeWidth={isMobile ? 2 : 3} />
                </span>
            </div>
        </div>
        </div>
        </SwiperSlide>
            </Swiper>
    {/* Swiper Pagination */}
    <div className="second-swiper-pagination flex justify-center items-center gap-8 mt-12"></div>
    </div>
    </div>
    )
}

export default Testimonials;