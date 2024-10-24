"use client";
import React from "react";
import Image from "next/image";
import serviceBackground from "../public/image/service-background.jpg";
import blog8 from "../public/image/blog-image8.jpg";
import singleblog2 from "../public/image/singleblog-image2.jpg";
import singleblog from "../public/image/singleblog-review1.png";
import about from "../public/image/about-bannerimage.jpg";
import blog4 from "../public/image/blog-image4.jpg";
import blog6 from "../public/image/blog-image6.jpg";
import blog9 from "../public/image/blog-image9.jpg";
import singleblog3 from "../public/image/singleblog-review2.png";
import singleblog4 from "../public/image/singleblog-review3.png";
import blog7 from "../public/image/blog-image7.jpg";
import testimonial_img1 from "../public/image/testimonial-image1.png";
import testimonial_img2 from "../public/image/testimonial-image2.png";
import { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Circle, Quote, Star } from "lucide-react";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'; 
const SingleBlog = () => {
  // Khởi tạo AOS trong useEffect
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Điều chỉnh thời gian cho tốc độ animation
  }, []);
  return (
    <div className="container mx-auto max-w-screen-xl px-4">
    <div className="relative bg-dark py-24" style={{ paddingLeft: "20px" }}>
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
    {/* Phần văn bản bên trái */}
    <div
      className="w-full lg:w-1/2 text-left z-10"
      style={{ paddingLeft: "20px", paddingRight: "20px" }} // Adjust padding for smaller screens
      data-aos="fade-left" // Animation cho văn bản
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Single Blog</h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6">
        Nuis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur. <br />
        velit esse fugiat nulla pariatur.
      </p>
      {/* Điều hướng Breadcrumb */}
      <div className="flex space-x-2 mb-6">
        <a href="#" className="text-white"> Home</a>
        <span className="text-gray-400">-</span>
        <span className="text-[#E1B261]">Single Blog</span>
      </div>
    </div>
    {/* Phần hình ảnh bên phải */}
    <div className="w-full lg:w-[48%] z-10" data-aos="fade-up">
      <Image
        src={about}
        width={743}
        height={428}
        alt="about"
        priority={true} // Đảm bảo hình ảnh được ưu tiên tải
      />
    </div>
  </div>
</div>

      <section
        className="aboutpage-section py-12 lg:py-24 flex"
        style={{
          backgroundImage: `url(${serviceBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full lg:w-[60%] p-4  bg-[#222224] ">
          {/* Left Side (60%) */}
          <Image
            src={blog8}
            width={734}
            height={508}
            alt="Testimonial 1"
            className="rounded border border-gray-400 shadow-lg"
          />
          <h2 className="text-white text-1xl font-bold mt-4">
            {" "}
            {/* Increased font size */}
            Why You Need Virtual Assistant for Your Company
          </h2>
          <div className="flex items-center mt-2">
            <h3 className="text-white mr-4">By: Admin</h3>
            <h3 className="text-white">Virtual Assistant</h3>
          </div>

          <p className="text-[#6e6e73] mt-4 leading-relaxed">
            {" "}
            {/* Added line height for readability */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae.
          </p>
          <br />

          <p className="bg-[#E1B261] 00 white-black p-4 rounded my-4 ">
            {" "}
            <span>
              <Quote size={50} strokeWidth={3} />
            </span>
            <br />
            {/* Added margin for spacing */}
            “Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat”
          </p>
          <p className=" text-[#6e6e73] mt-4">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas.
          </p>

          <Image
            src={singleblog2}
            width={743}
            height={314}
            alt="blog6"
            className="rounded-lg mt-4" // Added margin top
          />
          <p className="text-[#6e6e73] mt-4">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa
            quiofficia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas.
          </p>

          <div className=" rounded-md mt-8 p-4">
            <div className="flex justify-between">
              {/* Related Tags Section */}
              <div className="w-1/2 text-left ">
                <h3 className="font-semibold text-xl mb-2">Related Tags</h3>
                <div className="flex space-x-2">
                  <button className="bg-[#E1B261] text-white p-2 rounded hover:bg-yellow-400">
                    Assistant
                  </button>
                  <button className="bg-[#E1B261] text-white p-2 rounded hover:bg-yellow-400">
                    Advice
                  </button>
                  <button className="bg-[#E1B261] text-white p-2 rounded hover:bg-yellow-400">
                    Virtual
                  </button>
                </div>
              </div>

              {/* Social Share Section */}
              <div className="w-1/2 text-right ">
                <h3 className="font-semibold text-xl mb-2">Social Share</h3>
                <div className="flex justify-end space-x-2 mt-2">
                  {/* Social Media Icons */}
                  <a href="#" className="text-yellow-500 hover:text-yellow-400">
                    <Linkedin />
                  </a>
                  <a href="#" className="text-yellow-500 hover:text-yellow-400">
                    <Instagram />
                  </a>
                  <a href="#" className="text-yellow-500 hover:text-yellow-400">
                    <Facebook />
                  </a>
                  <a href="#" className="text-yellow-500 hover:text-yellow-400">
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center bg-black">
            {" "}
            {/* Added margin for spacing */}
            <div className="bg-red-500 rounded-full overflow-hidden mb-2  ">
              <Image
                src={singleblog}
                width={132}
                height={132}
                alt="Testimonial 1"
                className="rounded"
              />
            </div>
            <h2>Billy Wallson</h2>
            <h3> Senior Director</h3>
            <p className="max-w-md text-[#6e6e73]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut ali, <br /> <br />
            </p>
          </div>
          {/* Comments Section */}
          <div className="p-4 rounded-md mt-4">
            <h3 className="font-semibold text-xl mb-3 text-left border-b-2 border-yellow-500 inline-block">
              2 Comments
            </h3>

            <div className="mb-4 flex">
              <Image
                src={singleblog3}
                width={140}
                height={140}
                alt="singleblog3"
                className="rounded mr-4"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">Roseanne Williams</h4>
                    <span className="text-yellow-500">Dec 29, 2022</span>
                  </div>
                  <button className="bg-yellow-500 text-white p-2 rounded hover:bg-slate-600">
                    Reply
                  </button>
                </div>
                <p className="text-[#6e6e73] mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>

            <div className="flex">
              <Image
                src={singleblog4}
                width={140}
                height={140}
                alt="singleblog4"
                className="rounded mr-4"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">Samantha Nicolan</h4>
                    <span className="text-yellow-500">Dec 29, 2022</span>
                  </div>
                  <button className="bg-yellow-500 text-white p-2 rounded hover:bg-slate-600">
                    Reply
                  </button>
                </div>
                <p className="text-[#6e6e73] mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>

          {/* Leave a Comment Section */}
          <div className="p-4 rounded-md mt-4">
            <h3 className="font-semibold text-xl mb-2 text-yellow-500">
              Leave a Comment
            </h3>

            <form className="space-y-4">
              {/* Textarea */}
              <textarea
                placeholder="Enter your comment here..."
                className="w-full p-2 border border-gray-300 rounded bg-[#222224] h-40 mt-2"
              ></textarea>

              {/* Input fields in two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border-[1px] border-gray-300 rounded bg-[#222224]"
                />
                <input
                  type="email"
                  placeholder="Your E-mail"
                  className="w-full p-2 border-[1px] border-gray-300 rounded bg-[#222224]"
                />
              </div>

              <input
                type="text"
                placeholder="Your Topic"
                className="w-full p-2 border-[1px] border-gray-300 rounded bg-[#222224]"
              />

              <button
                type="submit"
                className="bg-yellow-500 text-black p-2 rounded w-auto hover:bg-slate-600"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-[30%] p-4 ml-5"> {/* Right Side (30%) */}
          {/* Right Side (40%) */}
          <div className="space-y-6">
            {/* Bốc 1: Search News */}
            <div className="border border-[#222224] p-4 rounded-md bg-[#222224]">
              <h3 className="font-semibold text-center text-xl mb-2 text-white">
                Search News
                <span className="block h-0.5 w-12 bg-yellow-500 mx-auto mt-1"></span>
              </h3>
              <input
                type="text"
                placeholder="Search..."
                className="border border-yellow-500 bg-[#222224] text-white rounded p-2 w-full"
              />
            </div>

            {/* Bốc 2: Popular Categories */}
            <div className="border border-[#222224] p-4 rounded-md bg-[#222224]">
              <h3 className="font-semibold text-center text-xl mb-2 text-white">
                Popular Categories
                <span className="block h-0.5 w-12 bg-yellow-500 mx-auto mt-1"></span>
              </h3>
              <ul className="list-none text-center text-white space-y-2">
                <li>Digital Business</li>
                <li>Business Consulting</li>
                <li>Consulting</li>
                <li>Business & Finance</li>
              </ul>
            </div>

            {/* Bốc 3: Follow Us */}
            <div className="border border-[#222224] p-4 rounded-md bg-[#222224]">
              <h3 className="font-semibold text-center text-xl mb-2 text-white">
                Follow Us
                <span className="block h-0.5 w-12 bg-yellow-500 mx-auto mt-1"></span>
              </h3>
              <div className="flex justify-center space-x-4 text-yellow-500">
                <a href="#" className="hover:text-yellow-400">
                    <Linkedin />
                  </a>
                  <a href="#" className="hover:text-yellow-400">
                    <Instagram />
                  </a>
                  <a href="#" className="hover:text-yellow-400">
                    <Facebook />
                  </a>
                  <a href="#" className="hover:text-yellow-400">
                    <Twitter />
                  </a>
              </div>
            </div>

            {/* Bốc 4: Tags */}
            <div className="border border-[#222224] p-4 rounded-md bg-[#222224]">
              <h3 className="font-semibold text-center text-xl mb-2 text-white">
                Tags
                <span className="block h-0.5 w-12 bg-[#E1B261] mx-auto mt-1"></span>
              </h3>
              <div className="grid grid-cols-3 gap-2 justify-center">
                <button className="bg-[#E1B261] text-black p-2 rounded hover:bg-yellow-400">
                  Assistant
                </button>
                <button className="bg-[#E1B261] text-black p-2 rounded hover:bg-yellow-400">
                  Advice
                </button>
                <button className="bg-[#E1B261] text-black p-2 rounded hover:bg-yellow-400">
                  Virtual
                </button>
                <button className="bg-[#E1B261] text-black p-2 rounded hover:bg-yellow-400">
                  Designer
                </button>
                <button className="bg-[#E1B261] text-black p-2 rounded hover:bg-yellow-400">
                  Blog
                </button>
                <button className="bg-[#E1B261] text-black p-2 rounded hover:bg-yellow-400">
                  Support
                </button>
                <button className="bg-[#E1B261] text-black p-2 rounded hover:bg-yellow-400">
                  Finance
                </button>
                <button className="bg-[#E1B261] text-black p-2 rounded hover:bg-yellow-400">
                  Projects
                </button>
              </div>
            </div>

            {/* Bốc 5: Feed */}
            <div className="border border-[#222224] p-4 rounded-md bg-[#222224]">
              <h3 className="font-semibold text-center text-xl mb-2 text-white">
                Feed
                <span className="block h-0.5 w-12 bg-[#E1B261] mx-auto mt-1"></span>
              </h3>
              {/* Blog Items */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Image src={blog7} width={100} height={80} alt="blog4" />
                  <p className="text-white">
                    Why You Need Virtual Assistant for Your Company
                  </p>
                </div>
                <hr className="border-yellow-500" />
                <div className="flex items-center space-x-4">
                  <Image src={blog4} width={100} height={80} alt="blog6" />
                  <p className="text-white">
                    Why You Need Virtual Assistant for Your Company
                  </p>
                </div>
                <hr className="border-yellow-500" />
                <div className="flex items-center space-x-4">
                  <Image src={blog6} width={100} height={80} alt="blog9" />
                  <p className="text-white">
                    Why You Need Virtual Assistant for Your Company
                  </p>
                </div>
                <hr className="border-yellow-500" />
                <div className="flex items-center space-x-4">
                  <Image src={blog9} width={100} height={80} alt="blog9" />
                  <p className="text-white">
                    Why You Need Virtual Assistant for Your Company
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <br />
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
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ el: ".second-swiper-pagination", clickable: true }}
          modules={[Pagination, Navigation, Autoplay]}
        >
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
        <div className="second-swiper-pagination flex justify-center items-center gap-8 mt-12">
          <span className="text-gray-500 bg-gray-500 rounded-full hover:bg-primary hover:text-primary cursor-pointer hover:-translate-y-2 transition-all duration-500">
            <Circle />
          </span>
          <span className="text-gray-500 bg-gray-500 rounded-full hover:bg-primary hover:text-primary cursor-pointer hover:-translate-y-2 transition-all duration-500">
            <Circle />
          </span>
          <span className="text-gray-500 bg-gray-500 rounded-full hover:bg-primary hover:text-primary cursor-pointer hover:-translate-y-2 transition-all duration-500">
            <Circle />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
