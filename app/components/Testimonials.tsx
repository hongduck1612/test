import React from 'react'
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
    return (
        <div className="testimonials-section pt-[142px] pb-[140px] overflow-hidden">
            <div className="relative">
                <Image
                className="absolute top-[-143px] left-[1320px]"
                src={ligh_img}
                alt="Light Image"
                width={156}
                height={284}
                />
            </div>
            <div className="container px-[30px] mx-auto">
                <div className="text-content text-center" data-aos="fade-right">
                    <h6 className="mb-[18px] text-[18px] font-normal leading-[26px] tracking-[1.2px] text-primary">
                    Testimonials
                    </h6>
                    <h2 className="px-10 mb-[46px] text-[46px] leading-[56px] font-semibold gap-3 indent-[130px]">
                    Trusted By Over 30,000 Worldwide Customers Since 1998
                    </h2>
                </div>
            {/* Swiper Slider */}
            <Swiper
            spaceBetween={10}
            slidesPerView={2}
            loop={true}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            pagination={{
                el: '.second-swiper-pagination',
                clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            >
        {/* Slide 1 */}
        <SwiperSlide>
        <div className="box flex bg-[#222224] border-r-[2px] border-r-[#E1B261] gap-8 pt-[36px] pb-[18px] pl-[40px] pr-[30px]">
            <div className="box-img relative">
                <Image
                className="max-w-none max-h-none"
                src={testimonial_img1}
                alt="Testimonial Image"
                />
                <span className="absolute top-[83px] left-[35px] p-[5px] rounded-full bg-primary">
                    <Quote />
                </span>
            </div>
            <div className="box-content flex flex-col pl-[30px] border-l border-l-[#5c5c5e]">
                <p className="mr-5 mb-[6px] text-[18px] leading-[26px] text-[#a7a7a7]">
                    Duis aute irure dolor in reprehender in voluptate velit esse
                    cillum dolore fugiat nulla pariatur...
                </p>
            <div className="flex flex-row mb-[12px]">
                <span className="text-primary">
                    <Star size={20} />
                </span>
                <span className="text-primary">
                    <Star size={20} />
                </span>
                <span className="text-primary">
                    <Star size={20} />
                </span>
                <span className="text-primary">
                    <Star size={20} />
                </span>
                <span className="text-primary">
                    <Star size={20} />
                </span>
            </div>
            <div className="flex justify-around gap-[185px]">
                <div>
                    <p>Kevin Andrew</p>
                    <p className="text-[#a7a7a7]">Happy Customer</p>
                </div>
                <span>
                    <Quote size={50} strokeWidth={3} />
                </span>
            </div>
        </div>
        </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
        <div className="box flex bg-[#222224] border-r-[2px] border-r-[#E1B261] gap-8 pt-[36px] pb-[18px] pl-[40px] pr-[30px]">
            <div className="box-img relative">
                <Image
                className="max-w-none max-h-none"
                src={testimonial_img2}
                alt="Testimonial Image"
                />
                <span className="absolute top-[83px] left-[35px] p-[5px] rounded-full bg-primary">
                <Quote />
                </span>
            </div>
            <div className="box-content flex flex-col pl-[30px] border-l border-l-[#5c5c5e]">
                <p className="mr-5 mb-[6px] text-[18px] leading-[26px] text-[#a7a7a7]">
                    Duis aute irure dolor in reprehender in voluptate velit esse
                    cillum dolore fugiat nulla pariatur...
                </p>
                <div className="flex flex-row mb-[12px]">
                    <span className="text-primary">
                        <Star size={20} />
                    </span>
                    <span className="text-primary">
                        <Star size={20} />
                    </span>
                    <span className="text-primary">
                        <Star size={20} />
                    </span>
                    <span className="text-primary">
                        <Star size={20} />
                    </span>
                    <span className="text-primary">
                        <Star size={20} />
                    </span>
                </div>
                <div className="flex justify-around gap-[185px]">
                    <div>
                        <p>Alina James</p>
                        <p className="text-[#a7a7a7]">Happy Customer</p>
                    </div>
                    <span>
                        <Quote size={50} strokeWidth={3} />
                    </span>
                </div>
            </div>
        </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
        <div className="box flex bg-[#222224] border-r-[2px] border-r-[#E1B261] gap-8 pt-[36px] pb-[18px] pl-[40px] pr-[30px]">
            <div className="box-img relative">
                <Image
                className="max-w-none max-h-none"
                src={testimonial_img1}
                alt="Testimonial Image"
                />
                <span className="absolute top-[83px] left-[35px] p-[5px] rounded-full bg-primary">
                    <Quote />
                </span>
            </div>
            <div className="box-content flex flex-col pl-[30px] border-l border-l-[#5c5c5e]">
                <p className="mr-5 mb-[6px] text-[18px] leading-[26px] text-[#a7a7a7]">
                    Duis aute irure dolor in reprehender in voluptate velit esse
                    cillum dolore fugiat nulla pariatur...
                </p>
            <div className="flex flex-row mb-[12px]">
                <span className="text-primary">
                    <Star size={20} />
                </span>
                <span className="text-primary">
                    <Star size={20} />
                </span>
                <span className="text-primary">
                    <Star size={20} />
                </span>
                <span className="text-primary">
                    <Star size={20} />
                </span>
                <span className="text-primary">
                    <Star size={20} />
                </span>
            </div>
            <div className="flex justify-around gap-[185px]">
                <div>
                    <p>Kevin Andrew</p>
                    <p className="text-[#a7a7a7]">Happy Customer</p>
                </div>
                <span>
                    <Quote size={50} strokeWidth={3} />
                </span>
            </div>
        </div>
    </div>
    </SwiperSlide>

      {/* Slide 4 */}
        <SwiperSlide>
        <div className="box flex bg-[#222224] border-r-[2px] border-r-[#E1B261] gap-8 pt-[36px] pb-[18px] pl-[40px] pr-[30px]">
            <div className="box-img relative">
                <Image
                className="max-w-none max-h-none"
                src={testimonial_img2}
                alt="Testimonial Image"
                />
                <span className="absolute top-[83px] left-[35px] p-[5px] rounded-full bg-primary">
                    <Quote />
                </span>
            </div>
            <div className="box-content flex flex-col pl-[30px] border-l border-l-[#5c5c5e]">
                <p className="mr-5 mb-[6px] text-[18px] leading-[26px] text-[#a7a7a7]">
                    Duis aute irure dolor in reprehender in voluptate velit esse
                    cillum dolore fugiat nulla pariatur...
                </p>
            <div className="flex flex-row mb-[12px]">
                <span className="text-primary">
                    <Star size={20} />
                </span>
                <span className="text-primary">
                    <Star size={20} />
                </span>
                <span className="text-primary">
                    <Star size={20} />
                </span>
                <span className="text-primary">
                    <Star size={20} />
                </span>
                <span className="text-primary">
                    <Star size={20} />
                </span>
            </div>
            <div className="flex justify-around gap-[185px]">
                <div>
                    <p>Alina James</p>
                    <p className="text-[#a7a7a7]">Happy Customer</p>
                </div>
                <span>
                    <Quote size={50} strokeWidth={3} />
                </span>
            </div>
        </div>
        </div>
        </SwiperSlide>
    </Swiper>
    {/* Swiper Pagination */}
    <div className="second-swiper-pagination flex justify-center items-center gap-8 mt-12"></div></div>
        </div>
    )
}

export default Testimonials;