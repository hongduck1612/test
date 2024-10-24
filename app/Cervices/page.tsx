"use client";
import React, { useEffect, useState } from "react"; 
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; 
// import icon from "../public/image/arrow.png";
import cervices from "../public/image/service-image1.jpg";
import cervices1 from "../public/image/service-image2.jpg";
import cervices2 from "../public/image/service-image3.jpg";
import cervices3 from "../public/image/service-image4.jpg";
import iconcervices1 from "../public/image/service-icon1.png";
import iconcervices2 from "../public/image/service-icon2.png";
import iconcervices3 from "../public/image/service-icon3.png";
import iconcervices4 from "../public/image/service-icon4.png";
import lightimage from "../public/image/top-lightimage.png";
import arrowImage from "../public/image/arrow.png"; 
import workImage from "../public/image/work-image.jpg";
import about from "../public/image/about-bannerimage.jpg";
import serviceBackground from "../public/image/service-background.jpg"; 


const Cervices = () => {
  const [count, setCount] = useState(0); 

  useEffect(() => {
    AOS.init({ duration: 1000 });
  
    let timer: NodeJS.Timeout;
    if (count < 10) { 
      timer = setTimeout(() => {
        setCount(prevCount => prevCount + 1); 
      }, 200); 
    }
  
    return () => clearTimeout(timer); 
  }, [count]);
  

  return (
    <div>
   
   <div>
  <div className="relative">
    
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-">
      <div className="w-full lg:w-1/2 z-10 lg:order-1 pl-10">
        <h1 className="text-6xl font-bold text-white mb-6">Our Cervices</h1>
        <p className="text-xl text-gray-300 mb-6">
          Ruis aute irure dolor in rearehenderit <br /> in eouta velireu esse fugiat nulla <br />pariatur
        </p>
        <div className="flex space-x-2 mb-6">
          <a href="#" className="text-white">Home</a>
          <span className="text-gray-400">-</span>
          <span className="text-[#E1B261]">Cervices</span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 z-10 lg:order-2 relative">
        <Image src={about} width={743} height={428} alt="about" />
      </div>
    </div>
  </div>
</div>



<section
  className="aboutpage-section py-24"
  style={{
    backgroundImage: `url(${serviceBackground.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
      {[
        { image: cervices, icon: iconcervices1, title: "Architecture" },
        { image: cervices1, icon: iconcervices2, title: "Interior Work" },
        { image: cervices2, icon: iconcervices3, title: "Renovation" },
        { image: cervices3, icon: iconcervices4, title: "Decor & Art" },
      ].map((service, index) => (
        <div key={index} className="service-box flex flex-col lg:flex-row bg-stone-800 p-6 rounded-lg shadow-lg relative items-stretch">
          <div className="lg:w-1/2 flex-shrink-0 relative overflow-hidden"> {/* Thêm overflow-hidden */}
            <figure className="mb-0">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg transition-transform hover:scale-110" // Thay đổi scale nếu cần
              />
            </figure>
            <figure className="absolute top-4 left-4 transition-transform hover:-translate-y-3">
              <div className="bg-yellow-300 p-5 rounded-full">
                <Image
                  src={service.icon}
                  alt="Service Icon"
                  width={50}
                  height={50}
                  className="w-auto h-auto"
                />
              </div>
            </figure>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-6 flex flex-col justify-between">
            <h5 className="text-white text-xl font-semibold">{service.title}</h5>
            <p className="text-gray-400 text-base mt-2">
              Duis aute irure dolor in reare aenderit in voluptate velit es cillum dolore maiores alias co sequatur aut perferendis dolor aut rerum...
            </p>
            <a className="read_more text-orange-300 flex items-center mt-4 hover:text-white" href="./service.html">
              Read More
              <i className="fa-solid fa-chevron-right ml-2"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      <section className="work-section relative pb-40   ">
        <figure className="light-image absolute top-0 left-[130px] z-0">
          <Image src={lightimage} alt="light" width={100} height={150} />
        </figure>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-center">
              <div className="work_content">
              <div className="year">
  <span className="value text-[300px] font-bold leading-none">{count}</span> 
  <sup className="text-[100px] text-yellow-500 align-super font-bold">+</sup>
</div>

<h2 className="text-[30px]">Years of Successful <br /> Work in Market</h2>
<div className="discover-button flex items-center space-x-4 mt-4 group">
  <a
    className="discover_more text-decoration-none group-hover:text-yellow-300 transition duration-300"
    href="./portfolio.html"
  >
    Discover More
  </a>
  <a
    className="image-button text-decoration-none border border-yellow-500 p-4 rounded-full transition duration-300 group-hover:bg-yellow-200" 
    href="./portfolio.html"
  >
    <figure className="arrow mb-0 p-2">
      <Image
        src={arrowImage}
        alt="arrow"
        width={20} 
        height={20} 
        className="transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
      />
    </figure>
  </a>
</div>

              </div>
            </div>

            <div className="relative flex justify-center mt-10">
  <div className="work_wrapper relative">
    <figure className="work-imagebackground mb-0 relative z-20 mt-7" data-aos="fade-up">
      <Image
        src={workImage}
        alt="Work Background"
        width={550}
        height={450}
        className="img-fluid filter blur-sm mx-auto" 
        style={{ filter: "blur(4px)", maxWidth: "80%" }}
      />
    </figure>
    <figure className="work-image absolute top-16 left-8 z-20" data-aos="fade-right">
      <Image
        src={workImage}
        alt="Work"
        width={550}
        height={450}
        className="img-fluid"
        style={{ maxWidth: "83%" }}
      />
    </figure>
  </div>
</div>

          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Cervices;
