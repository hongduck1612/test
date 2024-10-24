"use client";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import ligh_img from "../app/public/image/top-lightimage.png";
import { motion } from "framer-motion";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Journey from "./components/Journey";
import Blog from "./components/Blog";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div>
      <Banner />
      {/* Service Section start */}
      <Service />
      {/* End of Service Section */}
      {/* About Section */}
      <div className="about-section relative pt-[145px] pb-[120px]">
        <div className="absolute left-[1340px] top-0 z-0">
          <Image className="" src={ligh_img} alt="" width={157} height={284} />
        </div>
        <div className="flex justify-center items-center gap-4 mb-5 relative z-10">
          <motion.div ref={ref} initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 1.5, ease: 'easeOut' }}>
            <Image className="z-10" src={about_img1} width={457} height={533} alt="about_img1" />
          </motion.div>
          <div>
            <div className="w-[457px] h-[533px] px-4">
              <div className="" data-aos="fade-right">
                <p className="text-[18px] text-primary tracking-widest">About Us</p>
                <p className="text-[46px] leading-[58px] font-semibold">We Provide Best Interior Design Services</p>
                <p className="pl-[17px] mb-[18px] text-[20px] font-medium border-l border-l-[#E1B261]">Molestias exceaturi sint ecaecati cua non provident similiue</p>
                <p className="text-[#A7A7A7] pb-[32px] text-[20px]">Dolores aet ruas molestias exceaturi sint ecaecati cupiditate non provident, similiue sunt in culpa qui officia deserunt mollitia animi facere omnis.</p>
                <div className="flex items-center group gap-4 w-fit">
                  <a className="items-center text-[20px] text-[#ffff] group-hover:text-primary" href="./service.html">
                    Read More
                  </a>
                  <span className="p-5 border text-primary border-[#E1B261] group-hover:text-[#ffff] group-hover:bg-[#E1B261] transition-all duration-800 rounded-full cursor-pointer"><ArrowUpRight /></span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <motion.div ref={ref} initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 1.5, ease: 'easeOut' }}>
              <Image className="z-10" src={about_img2} width={457} height={533} alt="about_img2" />
            </motion.div>
          </div>
        </div>
      </div>
      {/* End of About Section */}
    </div>
  );
}
