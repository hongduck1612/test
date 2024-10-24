"use client";
import Image from "next/image";
import { useState } from "react";
import Banner from "../public/image/about-bannerimage.jpg";
import Username from "../public/image/user-1.jpg";
import Testimonials from "../components/Testimonials";
import user5 from "../public/image/standard_post_img05.jpg";
import {
  CalendarDays,
  User,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Star } from "lucide-react";
import Username1 from "../public/image/carosel-1.jpg";
import Username2 from "../public/image/carosel-2.jpg";
import Username3 from "../public/image/carosel-3.jpg";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
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
              Six Column
            </h1>
            <p className="mt-4 text-gray-500 font-bold text-xl">
              Nuis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur.
            </p>
            <div className="bg-[#222224] p-2 w-full md:w-[250px] flex items-center mt-4 px-4">
              <div className="text-white text-sm gap-1">
                <span className="text-xl md:text-2xl">Home</span>
                <span className="mx-1">-</span>
                <span className="text-yellow-400 text-xl md:text-2xl">
                  Six Column
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

      <section className="mx-auto service-section px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
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
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#212529] overflow-hidden shadow-lg mt-10">
            <div className="relative h-48">
              <Image
                src={images[currentImageIndex]} // Sử dụng ảnh hiện tại
                alt="Profile picture"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By: Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
              <button
                onClick={handlePrev}
                className="text-white p-2 rounded-full mb-[350px] mr-[100px]"
              >
                <ChevronLeft className="h-10 w-10" />
              </button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
              <button
                onClick={handleNext}
                className="text-white p-2 rounded-full mb-[350px]"
              >
                <ChevronRight className="h-10 w-10" />
              </button>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48">
              <Image
                src={user5}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10 relative">
            <div className="relative h-48">
              <Image
                src={Username}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
              <audio
                controls
                className="absolute bottom-0 left-0 right-0 z-10 p-0 outline-none rounded"
              >
                <source src="/path-to-your-audio-file.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By: Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48 flex flex-col items-center justify-center bg-black">
              <h1 className="text-white text-center text-5xl">Désolé</h1>
              <p className="text-white text-center">
                Cette vidéo n’existe pas.
              </p>
            </div>

            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/dA8Smj5tZOQ?si=XY06spdEK9nfvskc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>

          
        </div>
      </section>

      <section className="mx-auto service-section px-4 md:px-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Card 1 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10 relative">
            <div className="relative h-48">
              <Image
                src={Username}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
              <audio
                controls
                className="absolute bottom-0 left-0 right-0 z-10 p-0 outline-none rounded"
              >
                <source src="/path-to-your-audio-file.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By: Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48 flex flex-col items-center justify-center bg-black">
              <h1 className="text-white text-center text-5xl">Désolé</h1>
              <p className="text-white text-center">
                Cette vidéo n’existe pas.
              </p>
            </div>

            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/dA8Smj5tZOQ?si=XY06spdEK9nfvskc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48">
              <Image
                src={user5}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10 relative">
            <div className="relative h-48">
              <Image
                src={Username}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
              <audio
                controls
                className="absolute bottom-0 left-0 right-0 z-10 p-0 outline-none rounded"
              >
                <source src="/path-to-your-audio-file.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By: Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-[#212529] overflow-hidden shadow-lg mt-10  ">
            <div className="relative h-48">
              <Image
                src={user5}
                alt="Profile picture of a woman with glasses"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-white">By : Admin</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 text-yellow-500 mr-2" />
                <div className="text-white text-sm">Virtual Assistant</div>
              </div>
              <p className="text-gray-400 text-base">
                Curabitur pulvinar euismod ante, ac sagittis ante posuere ac.
                Vivamus luctus commodo dolor porta feugiat.
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-md text-white">Dec 20, 2022</span>
              </div>
            </div>
            <div className="relative flex justify-end ml-10 pb-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-l-full">
                Read More
              </button>
            </div>
          </div>

          {/* Các thẻ khác sẽ được thêm ở đây */}
        </div>
      </section>

      <Testimonials/>
    </div>
  );
}
