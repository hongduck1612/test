import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from "../public/image/about-bannerimage.jpg";
import Image from "next/image";
export default function Subbaner(){
    useEffect(() => {
        AOS.init({
          duration: 2000, 
          once: true,     
        });
      }, []);
    return (
        <>
          <section className="banner-section">
  <div className="mx-auto px-10">
    <div className="flex flex-col lg:flex-row">
      <div
        className="lg:w-9/12 xl:w-9/12 w-full order-2 lg:order-1 p-7"
        data-aos="fade-right" // Chữ di chuyển từ trái sang phải
      >
        <div className="banner_content">
          <div className="content lg:mt-40 lg:pt-10 md:pl-40">
            <h1 className="text-4xl lg:text-8xl text-white">
              Four Column
            </h1>
            <p className="mt-4 text-gray-500 font-bold text-xl">
              Nuis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur.
            </p>
            <div className="bg-[#222224] p-2 w-full md:w-[250px] flex items-center mt-4 px-4">
              <div className="text-white text-sm gap-1">
                <span className="text-xl md:text-2xl">Home</span>
                <span className="mx-1">-</span>
                <span className="text-yellow-400 text-xl md:text-2xl">
                  Four Column
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="lg:w-9/12 xl:w-9/12 w-full order-1 pt-40 lg:order-2 p-6 lg:mt-[150px] xl:mt-5"
        data-aos="fade-up" // Ảnh di chuyển từ dưới lên
      >
        <div className="banner_wrapper">
          <figure className="sub-bannerimage mb-0">
            <Image src={Banner} alt="" className="img-fluid w-full h-auto" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}