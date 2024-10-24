"use client"
import React from 'react'
import service_image1 from "../public/image/service-image1.jpg";
import service_image2 from "../public/image/service-image2.jpg";
import service_image3 from "../public/image/service-image3.jpg";
import service_image4 from "../public/image/service-image4.jpg";
import service_icon1 from "../public/image/service-icon1.png";
import service_icon2 from "../public/image/service-icon2.png";
import service_icon3 from "../public/image/service-icon3.png";
import service_icon4 from "../public/image/service-icon4.png";
import Image from 'next/image';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

const Service = () => {
    return (
        <div>
            <div className="service-section md:pt-[145px] md:pb-[120px] custom-mobile:pt-[20px] custom-mobile:pb-[60px]">
                <div className="container w-fit mx-auto md:px-4 py-10">
                    <div className="text-center mb-12" data-aos="fade-right">
                        <h6 className="md:text-xl md:font-semibold md:tracking-widest text-primary md:mb-[18px] custom-mobile:text-[14px] custom-mobile:leading-[20px] custom-mobile:font-normal custom-mobile:tracking-[2px]">What We Do</h6>
                        <h2 className="md:text-[46px] md:font-semibold md:text-center md:leading-[58px] md:px-[170px] md:mb-[46px]">
                            Our Highlighted Services for Interior Designs
                        </h2>
                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 custom-mobile:gap-4">
                {[
                {
                    img: service_image1,
                    icon: service_icon1,
                    title: "Architecture",
                    description: "Duis aute irure dolor in reare aenderit in voluptate velit es cillum dolore...",
                },
                {
                    img: service_image2,
                    icon: service_icon2,
                    title: "Interior Work",
                    description: "Duis aute irure dolor in reare aenderit in voluptate velit es cillum dolore...",
                },
                {
                    img: service_image3,
                    icon: service_icon3,
                    title: "Renovation",
                    description: "Duis aute irure dolor in reare aenderit in voluptate velit es cillum dolore...",
                },
                {
                    img: service_image4,
                    icon: service_icon4,
                    title: "Decor & Art",
                    description: "Duis aute irure dolor in reare aenderit in voluptate velit es cillum dolore...",
                },
                ].map(({ img, icon, title, description }, idx) => (
                <div
                key={idx}
                className={`box-content px-[15px] hover:-translate-y-2 transition-all duration-300 ${idx === 0 ? "md:mb-[50px] custom-mobile:mb-0" : idx === 1 ? "md:mt-[30px] custom-mobile:mt-0" : idx === 2 ? "md:mb-[50px] custom-mobile:mb-0" : "md:mt-[30px] custom-mobile:mt-0"}`}
                >
                <div className="upper_portion relative">
                    <div className="overflow-hidden">
                    <figure className="image">
                        <Image src={img} className="w-full h-auto object-cover hover:scale-[1.1] transition-all duration-300" width={255} height={195} alt="" />
                    </figure>
                </div>
                <div className="flex w-[80px] h-[80px] image_content bg-[#E1B261] absolute md:top-[160px] md:left-[30px] custom-mobile:top-[225px] custom-mobile:left-[135px] rounded-full items-center justify-center">
                    <figure className="service-icon">
                        <Image src={icon} alt="" className="w-12 h-12" width={20} height={20} />
                    </figure>
                </div>
                </div>
                <div className="lower_portion pt-[58px] pb-[28px] px-[29px] bg-[#212529]">
                    <h5 className="md:text-xl md:font-semibold text-white md:text-start custom-mobile:text-center custom-mobile:mb-1">{title}</h5>
                    <p className="md:text-start text-base text-gray-400 mb-[20px] custom-mobile:text-center">{description}</p>
                    <a className="read_more flex items-center md:text-[14px] text-primary hover:text-white custom-mobile:pl-[100px]" href="./service.html">
                    Read More <ChevronRight size={14} />
                    </a>
                </div>
                </div>
            ))}
            </div>
            <div className="text-center mt-12 flex justify-center items-center gap-4 mb-5 group">
                <a className="text-[20px] group-hover:text-primary" href="">
                    Explore All Services
                </a>
            <span className="rounded-full w-fit border border-[#E1B261] p-5 bg-transparent text-primary group-hover:text-[#fff] group-hover:bg-[#E1B261] transition-all duration-800">
                <ArrowUpRight />
            </span>
            </div>
        </div>
    </div>
</div>
    )
}

export default Service