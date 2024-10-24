"use client"
import React from 'react';
import Image from 'next/image';
import ourteam from "../public/image/team-bannerimage.jpg";
import teamimage1 from "../public/image/team-image1.jpg";
import teamimage2 from "../public/image/team-image2.jpg";
import teamimage3 from "../public/image/team-image3.jpg";
import teamimage4 from "../public/image/team-image4.jpg";
import teamimage5 from "../public/image/team-image5.jpg";
import teamimage6 from "../public/image/team-image6.jpg";
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import Journey from '../components/Journey';
import Service from '../components/Service';
const Ourteam = () => {
  const variantrighttoleft = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const variantdowntoup = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const variantlefttoright = {
    hidden: { opacity: 0, x: -100 }, 
    visible: { opacity: 1, x: 0 },    
  };
  return (
    <>
      <div className="relative bg-dark py-24">
  <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
    
    {/* Right Column (Image) */}
    <motion.div
      className="w-full lg:w-1/2 z-10 flex justify-center order-1 lg:order-2" // Order change for mobile
      initial="hidden"
      animate="visible"
      variants={variantdowntoup}
      transition={{ duration: 0.5 }} // Adjust the duration as needed
    >
      <Image
        src={ourteam}
        width={743}
        height={428}
        alt="ourteam"
        className="w-full h-auto" // Ensure image scales well
      />
    </motion.div>

    {/* Left Column (Text) */}
    <motion.div
      className="w-full lg:w-1/2 text-left z-10 mt-8 lg:mt-0 order-2 lg:order-1" // Order change for mobile
      style={{ paddingLeft: "20px", paddingRight: "20px" }} // Adjusted padding for mobile
      initial="hidden"
      animate="visible"
      variants={variantrighttoleft}
      transition={{ duration: 0.5 }} // Adjust the duration as needed
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Our Team
      </h1>
      <p className="text-base md:text-xl text-gray-300 mb">
        Nuis aute irure dolor in rearehenderit in eouta velireu <br />esse
        fugiat nulla pariatur
      </p>
      <br />
      {/* Breadcrumb Navigation */}
      <div className="flex w-full max-w-[180px] h-[55px] bg-[#222224] items-center justify-between p-4 space-x-2 mb-6">
        <a href="#" className="text-white">
          Home
        </a>
        <span className="text-gray-400">-</span>
        <span className="text-primary">Our Team</span>
      </div>
    </motion.div>
  </div>
</div>


      <div className="process-section pt-[142px] pb-[150px] ">
        <div className="container mx-auto"  >
          <div className="text-center">
            <motion.div
                className="text-center"
                initial="hidden"
                animate="visible"
                variants={variantlefttoright}
                transition={{ duration: 0.5 }} // Thay đổi thời gian nếu cần
              >
                 <p className="text-base md:text-lg lg:text-[22px] pb-[18px] text-primary tracking-[2px]">Our Worker</p>
                 <h2 className="text-xl md:text-3xl lg:text-[50px] font-semibold">Meet Your Team Members</h2>
                <br />
                <br />
            </motion.div>
          </div>
          <motion.div
              className=""
              initial="hidden"
              animate="visible"
              variants={variantdowntoup}
              transition={{ duration: 0.5 }}
            >
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-6 gap-x-4 justify-center">
              <div className="ml-auto w-fit pt-[30px] relative pb-[32px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary overflow-hidden hover:-translate-y-2 transition-all duration-700">
                    <div className="relative w-[300px] h-[300px] overflow-hidden">
                      <Image
                        src={teamimage1}
                        width={300}
                        height={300}
                        alt="teamimage1"
                        className="transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <br />
                    <div className="text-center">
                      <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Baen James</h5>
                      <p className="font-normal text-[#a7a7a7] text-[16px]">Founder & Head</p>
                      <br />
                      <div className="flex justify-center space-x-4 mt-2">
                        <Facebook className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                        <Twitter className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                        <Instagram className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                        <Linkedin className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                      </div>
                    </div>
              </div>
              <div className="mx-auto w-fit pt-[30px] relative pb-[32px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary overflow-hidden hover:-translate-y-2 transition-all duration-700">
                <div className="relative w-[300px] h-[300px] overflow-hidden">
                  <Image
                    src={teamimage2}
                    width={300}
                    height={300}
                    alt="teamimage2"
                    className="transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <br />
                <div className="text-center">
                  <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Carly Neith</h5>
                  <p className="font-normal text-[#a7a7a7] text-[16px]">Managing Director</p>
                  <br />
                  <div className="flex justify-center space-x-4 mt-2">
                        <Facebook className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                        <Twitter className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                        <Instagram className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                        <Linkedin className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                  </div>
                </div>
              </div>
              <div className="mr-auto w-fit pt-[30px] relative pb-[32px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary overflow-hidden hover:-translate-y-2 transition-all duration-700">
                <div className="relative w-[300px] h-[300px] overflow-hidden">
                  <Image
                    src={teamimage3}
                    width={300}
                    height={300}
                    alt="teamimage3"
                    className="transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <br />
                <div className="text-center">
                  <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Trent Jeo</h5>
                  <p className="font-normal text-[#a7a7a7] text-[16px]">Trent Jeo</p>
                  <br />
                  <div className="flex justify-center space-x-4 mt-2">
                  <Facebook className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                        <Twitter className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                        <Instagram className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                        <Linkedin className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                  </div>
                </div>
              </div>
              <div className="ml-auto w-fit pt-[30px] relative pb-[32px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary overflow-hidden hover:-translate-y-2 transition-all duration-700">
                <div className="relative w-[300px] h-[300px] overflow-hidden">
                  <Image
                    src={teamimage4}
                    width={300}
                    height={300}
                    alt="teamimage4"
                    className="transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <br />
                <div className="text-center">
                  <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Christine Eve</h5>
                  <p className="font-normal text-[#a7a7a7] text-[16px]">Business Developer</p>
                  <br />
                  <div className="flex justify-center space-x-4 mt-2">
                  <Facebook className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                        <Twitter className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                        <Instagram className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                        <Linkedin className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                  </div>
                </div>
              </div>
              <div className="mx-auto w-fit pt-[30px] relative pb-[32px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary overflow-hidden hover:-translate-y-2 transition-all duration-700">
                <div className="relative w-[300px] h-[300px] overflow-hidden">
                  <Image
                    src={teamimage5}
                    width={300}
                    height={300}
                    alt="teamimage5"
                    className="transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <br />
                <div className="text-center">
                  <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Mike Hardson</h5>
                  <p className="font-normal text-[#a7a7a7] text-[16px]">Technical Director</p>
                  <br />
                  <div className="flex justify-center space-x-4 mt-2">
                    <Facebook className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                    <Twitter className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                    <Instagram className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                    <Linkedin className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                  </div>
                </div>
              </div>
              <div className="mr-auto w-fit pt-[30px] relative pb-[32px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary overflow-hidden hover:-translate-y-2 transition-all duration-700">
                <div className="relative w-[300px] h-[300px] overflow-hidden">
                  <Image
                    src={teamimage6}
                    width={300}
                    height={300}
                    alt="teamimage6"
                    className="transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <br />
                <div className="text-center">
                  <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Kerin Noreu</h5>
                  <p className="font-normal text-[#a7a7a7] text-[16px]">Interior Designer</p>
                  <br />
                  <div className="flex justify-center space-x-4 mt-2">
                    <Facebook className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                    <Twitter className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                    <Instagram className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                    <Linkedin className="text-white hover:text-[#F8B400] transform hover:translate-y-[-5px] transition duration-300 ease-in-out" size={26} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Testimonials/>
      <Journey/>
      <Service/>
    </>
  );
};

export default Ourteam;