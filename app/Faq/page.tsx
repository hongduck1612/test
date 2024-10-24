"use client"
import React from 'react';
import Image from 'next/image';
import faqs from "../public/image/faq-bannerimage.jpg";
import { motion } from 'framer-motion';
import { MessageCircleQuestion, ArrowRight } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import Journey from '../components/Journey';
import Service from '../components/Service';
const Faqs = () => {
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
            className="w-full lg:w-1/2 z-10 flex justify-center order-1 lg:order-2"
            initial="hidden"
            animate="visible"
            variants={variantdowntoup}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={faqs}
              width={743}
              height={428}
              alt="faqs"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Left Column (Text) */}
          <motion.div
            className="w-full lg:w-1/2 text-left z-10 mt-8 lg:mt-0 order-2 lg:order-1"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
            initial="hidden"
            animate="visible"
            variants={variantrighttoleft}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Faq`&apos;`s
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
              <span className="text-[#E1B261]">Faq`&apos;`s</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="process-section pt-[142px] pb-[150px]">
        <div className="container mx-auto px-4 md:px-20 lg:px-40">
          <div className="text-center">
            <motion.div
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={variantlefttoright}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[22px] pb-[18px] text-primary tracking-[2px]">Faq`&apos;`s</p>
              <h2 className="text-[50px] font-semibold">Frequently Asked Questions</h2>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
            initial="hidden"
            animate="visible"
            variants={variantdowntoup}
            transition={{ duration: 0.5 }}
          >
            {/* FAQ Boxes */}
            {[
              "Antis unde omnis natus error?",
              "Quasi sed architecto ae vitae?",
              "Totam rem aperiam earue uae?",
              "Vivamus aorte iasum accon?",
              "Duis lacinia eulvinar turis lacinia?",
              "Integer lobortis sem conserua?",
              "Pretium ruisuam sed laoret meus?",
              "Eiusmod temor incididunt rao?",
            ].map((question, index) => (
              <div key={index} className="w-full h-[75px] bg-[#222224] flex items-center justify-between p-4">
                <div className="flex items-center">
                  <MessageCircleQuestion className="w-10 h-10 mr-4 text-[#F8B400]" size={26} />
                  <span className="text-white text-xl">{question}</span>
                </div>
                <ArrowRight className="text-white w-10 h-10" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <Testimonials/>
      <Journey/>
      <Service/>
    </>
  );
};

export default Faqs;
