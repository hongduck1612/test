"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Banner from "../public/image/about-bannerimage.jpg";
import Username1 from "../public/image/arrow.png";
import Username2 from "../public/image/blog-image1.jpg";
import Username3 from "../public/image/service-image3.jpg";
import blog1 from "../public/image/post-featured3 (1).jpg";
import blog2 from "../public/image/post-featured2.jpg";
import blog3 from "../public/image/post-featured4.jpg";
import Testimonials from "../components/Testimonials";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CalendarDays, User, Tag } from "lucide-react";

const images = [Username1, Username2, Username3];

export default function FourColumn() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const testimonials = [
    {
      image: "/image/carosel-1.jpg",
      name: "Kevin Andrew",
      review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur...",
      rating: 5,
      role: "Happy Customer",
    },
    {
      image: "/image/carosel-1.jpg",
      name: "Alina James",
      review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur...",
      rating: 5,
      role: "Happy Customer",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="container mx-auto lg:px-20 ">
        <section className="banner-section">
          <div className="mx-auto px-10">
            <div className="flex flex-col lg:flex-row">
              <div
                className="lg:w-6/12 xl:w-7/12 w-full order-2 lg:order-1 p-7"
                data-aos="fade-right" // Chữ di chuyển từ trái sang phải
              >
                <div className="banner_content">
                  <div className="content lg:mt-40 lg:pt-10 md:pl-40">
                    <h1 className="text-4xl lg:text-8xl text-white">
                      One Column
                    </h1>
                    <p className="mt-4 text-gray-500 font-bold text-xl">
                      Nuis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur.
                    </p>
                    <div className="bg-[#222224] p-2 w-full md:w-[250px] flex items-center mt-4 px-4">
                      <div className="text-white text-sm gap-1">
                        <span className="text-xl md:text-2xl">Home</span>
                        <span className="mx-1">-</span>
                        <span className="text-yellow-400 text-xl md:text-2xl">
                          One Column
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
      </div>

      <section className="mx-auto service-section px-4 md:px-20 lg:px-100 pb-10">
        <div className="grid grid-cols-1 ">
          {/* Card 1 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10 rounded-lg">
            {/* Image Section */}
            <div className="relative h-[600px]">
              <Image
                src={blog1} // Assuming blog1 is defined elsewhere
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="px-6 py-4">
              {/* Author and Tag Section */}
              <div className="flex items-center mb-2 gap-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
                <Tag className="h-4 w-4 text-yellow-500 ml-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>

            {/* Divider */}
            <hr />

            {/* Date and Button Section */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-4 mt-8">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 text-yellow-500 ml-4" />
                  <span className="text-md text-white ml-1">Dec 20, 2022</span>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10 rounded-lg">
            {/* Image Section */}
            <div className="relative h-[600px]">
              <Image
                src={blog2}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="px-6 py-4">
              {/* Author and Tag Section */}
              <div className="flex items-center mb-2 gap-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
                <Tag className="h-4 w-4 text-yellow-500 ml-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>

            {/* Divider */}
            <hr />

            {/* Date and Button Section */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-4 mt-8">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 text-yellow-500 ml-4" />
                  <span className="text-md text-white ml-1">Dec 20, 2022</span>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10 rounded-lg">
            {/* Image Section */}
            <div className="relative h-[600px]">
              <Image
                src={blog3}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="px-6 py-4">
              {/* Author and Tag Section */}
              <div className="flex items-center mb-2 gap-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
                <Tag className="h-4 w-4 text-yellow-500 ml-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>

            {/* Divider */}
            <hr />

            {/* Date and Button Section */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-4 mt-8">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 text-yellow-500 ml-4" />
                  <span className="text-md text-white ml-1">Dec 20, 2022</span>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <Testimonials testimonials={testimonials} nextSlide={nextSlide} prevSlide={prevSlide} />
      </section>
    </div>
  );
}
