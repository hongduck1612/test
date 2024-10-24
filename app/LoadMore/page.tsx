"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Banner from "../public/image/about-bannerimage.jpg";
import Username from "../public/image/user-1.jpg";
import user3 from "../public/image/carosel-3.jpg";
import Testimonials from "../components/Testimonials";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  CalendarDays,
  User,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Username1 from "../public/image/standard_post_img02.jpg";
import Username2 from "../public/image/standard_post_img03.jpg";
import Username3 from "../public/image/service-image3.jpg";

const images = [Username1, Username2, Username3];

export default function FourColumn() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      image: "/image/carosel-1.jpg",
      name: "Kevin Andrew",
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur...",
      rating: 5,
      role: "Happy Customer",
    },
    {
      image: "/image/carosel-1.jpg",
      name: "Alina James",
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur...",
      rating: 5,
      role: "Happy Customer",
    },
  ];

  return (
    <div>
      <div className="container mx-auto lg:px-20 ">
        <section className="banner-section">
          <div className="mx-auto px-10">
            <div className="flex flex-col lg:flex-row">
              <div
                className="lg:w-6/12 xl:w-7/12 w-full order-2 lg:order-1 p-7"
                data-aos="fade-right"
              >
                <div className="banner_content">
                  <div className="content lg:mt-40 lg:pt-10 md:pl-40">
                    <h1 className="text-4xl lg:text-8xl text-white">Load More</h1>
                    <p className="mt-4 text-gray-500 font-bold text-xl">
                      Nuis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur.
                    </p>
                    <div className="bg-[#222224] p-2 w-full md:w-[250px] flex items-center mt-4 px-4">
                      <div className="text-white text-sm gap-1">
                        <span className="text-xl md:text-2xl">Home</span>
                        <span className="mx-1">-</span>
                        <span className="text-yellow-400 text-xl md:text-2xl">Load More</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="lg:w-9/12 xl:w-9/12 w-full order-1 pt-40 lg:order-2 p-6 lg:mt-[150px] xl:mt-5"
                data-aos="fade-up"
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

      <section className="mx-auto service-section px-4 md:px-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10">
            <div className="relative h-48">
              <Image
                src={Username}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2 gap-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
                <Tag className="h-4 w-4 text-yellow-500 ml-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="pt-2">
              <div className="flex items-center justify-between mb-4 mt-8">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 text-yellow-500 ml-4" />
                  <span className="text-md text-white ml-1"> Dec 20, 2022</span>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#212529] overflow-hidden shadow-lg mt-10">
            <div className="relative h-48">
              <Image
                src={Username1} // You can replace this with an appropriate image
                alt="Profile picture"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2 gap-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
                <Tag className="h-4 w-4 text-yellow-500 ml-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="pt-2">
              <div className="flex items-center justify-between mb-4 mt-8">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 text-yellow-500 ml-4" />
                  <span className="text-md text-white ml-1"> Dec 20, 2022</span>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                  Read More
                </button>
              </div>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
              <button className="text-white p-2 rounded-full mb-[350px] mr-[100px]">
                <ChevronLeft className="h-10 w-10" />
              </button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
              <button className="text-white p-2 rounded-full mb-[350px]">
                <ChevronRight className="h-10 w-10" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10">
            <div className="relative h-48">
              <Image
                src={user3}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2 gap-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
                <Tag className="h-4 w-4 text-yellow-500 ml-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="pt-2">
              <div className="flex items-center justify-between mb-4 mt-8">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 text-yellow-500 ml-4" />
                  <span className="text-md text-white ml-1"> Dec 20, 2022</span>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
        </div>
      </section>

      <section className="mx-auto service-section px-4 md:px-40 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Other cards or content can go here */}
        </div>
        <div className="flex justify-center">
          <button className="mt-10 border px-5 py-3 rounded-full bg-yellow-400 hover:bg-black"> Load More </button>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
