"use client"; // Next.js client component directive
import React, { useEffect, useState } from "react"; 
import Image from "next/image";
import AOS from "aos"; // Importing AOS for animations
import "aos/dist/aos.css"; // Importing AOS styles
import about from "../public/image/about-bannerimage.jpg"; 
import about1 from "../public/image/about-image1.png"; 
import about2 from "../public/image/about-image2.png"; 
import about3 from "../public/image/partner1.png"; 
import about4 from "../public/image/partner2.png"; 
import about5 from "../public/image/partner3.png"; 
import about6 from "../public/image/partner4.png"; 
import processIcon1 from "../public/image/process-icon1.png"; 
import processIcon2 from "../public/image/process-icon2.png"; 
import processIcon3 from "../public/image/process-icon3.png"; 
import Logo from "../public/image/about-logoimage.png"; 
import aboutlogo from "../public/image/top-lightimage.png"; 
import icon from "../public/image/arrow.png"; 
import serviceBackground from "../public/image/service-background.jpg"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick"; 
import yourImage from "../public/image/journey-backgroundimage.jpg"; 


const About = () => {
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [count, setCount] = useState(0); 
  const [clicked, setClicked] = useState(false); // State to track if the button is clicked
  const [isButtonHovered, setIsButtonHovered] = useState(false); // Track button hover state
  const [isArrowHovered, setIsArrowHovered] = useState(false); // Track arrow hover state
  
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

  const handleClick = () => {
    setClicked(!clicked); // Toggle clicked state when button is clicked
  };

  const handleLogoClick = () => {
    setIsLogoVisible(!isLogoVisible); // Toggle logo visibility when clicked
  };  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1000, 
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto max-w-screen-xl px-4">
      <div className="relative">
        <div className="container mx-auto flex items-center justify-between px-0"> 
          <div className="w-full lg:w-1/2 z-10 pl-10">
            <h1 className="text-6xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-gray-300 mb-6">
              Nuis aute irure dolor in reprehenderit in eouta <br /> velireu esse fugiat nulla pariatur
            </p>
            <div className="flex space-x-2 mb-6">
              <a href="#" className="text-white">Home</a>
              <span className="text-gray-400">-</span>
              <span className="text-[#E1B261]">About</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 z-10 lg:ml-0">
            <Image src={about} width={743} height={428} alt="about" className="rounded-lg" />
          </div>
        </div>
      </div>

      <section
  className="aboutpage-section py-24"
  style={{
    backgroundImage: `url(${serviceBackground.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="container mx-auto">
    <div className="flex flex-wrap">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 p-4 relative">
        <div className="aboutpage_wrapper">
          <figure className="aboutpage-image1 mb-0" data-aos="fade-down">
            <div className="image-frame">
              <Image
                src={about1}
                alt="About image 1"
                width={400}
                height={200} // Giảm chiều cao xuống 400px
                className="rounded-lg"
              />
            </div>
          </figure>
{/* Logo chồng lên hai hình ảnh và căn giữa */}
<div className="absolute top-[calc(50%-50px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
  <div className="bg-amber-900 p-5 rounded-full flex items-center justify-center animate-spin" style={{ width: '80px', height: '80px' }}> {/* Đặt kích thước khung tròn */}
    {isLogoVisible && (
      <Image
        src={Logo}
        alt="Logo"
        width={50}
        height={50}
        className="object-cover" // Giữ nguyên kích thước logo
        onClick={handleLogoClick}
      />
    )}
  </div>
</div>



          {/* Hình ảnh chồng lên, giảm kích thước */}
          <div className="absolute bottom-0 right-0 mb-4 mr-4 z-1" data-aos="fade-up">
            <figure className="aboutpage-image2 mb-0">
              <div className="image-frame" style={{ position: 'relative', zIndex: 1 }}>
                <Image
                  src={about2}
                  alt="About image 2"
                  width={300} // Giảm chiều rộng
                  height={300} // Giảm chiều cao
                  className="rounded-lg"
                  style={{ transform: 'scale(1.1)' }} // Có thể giữ lại để tăng kích thước nhẹ
                />
              </div>
            </figure>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 p-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-[#E1B261]">About Us</h2>
        <p className="text-lg text-gray-300 mb-4">
          <h2>We are The Leader in Interior Design Services</h2>
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae reiciendis maiores.
        </p>
        <div>
          <p className="text2">
            Reprehenderit rui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum ui dolorem.
          </p>
          <div className="progress-outer">
            <div className="progress-inner flex flex-row justify-between">
              <div className="box w-1/3 mx-2">
                <div className="chart" data-percent="85">
                  85%
                  <canvas height="350" width="350"></canvas>
                </div>
                <h6>Interior Design</h6>
              </div>
              <div className="box w-1/3 mx-2">
                <div className="chart" data-percent="78">
                  78%
                  <canvas height="350" width="350"></canvas>
                </div>
                <h6>Architect Services</h6>
              </div>
              <div className="box w-1/3 mx-2">
                <div className="chart" data-percent="64">
                  64%
                  <canvas height="350" width="350"></canvas>
                </div>
                <h6>Idea & Planning</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="partner-section py-24">
      <div className="container mx-auto text-center">
        <div className="flex justify-end mb-4">
          <div className="image-frame" style={{ marginTop: '-100px' }}>
            <Image
              src={aboutlogo}
              alt="Partner logo"
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>
        </div>
        <h6 className="text-[#E1B261] text-lg">Customers</h6>
        <h2 className="text-white text-4xl font-bold mb-8">Our Trusted Clients</h2>
        <Slider {...settings} className="owl-carousel owl-theme">
          {[
            { src: about3, alt: "Client 1" },
            { src: about4, alt: "Client 2" },
            { src: about5, alt: "Client 3" },
            { src: about6, alt: "Client 4" },
            
          ].map((client, index) => (
            <div className="item" key={index}>
              <div
                className="box flex justify-center items-center p-4 rounded-lg border-b-4 border-[#a3782e] bg-gray-800"
                style={{ margin: '0 10px', width: '390px', height: '200px' }}
              >
                <Image
                  src={client.src}
                  className="img-fluid"
                  alt={client.alt}
                  width={150}
                  height={150}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>


      <section
        className="journey-section py-24"
        style={{
          backgroundImage: `url(${serviceBackground.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto">
          <div className="flex justify-center gap-8">
          <div className="process-section pt-[142px] pb-[150px]  ">
        <div className="container mx-[0px] px-20" >
          <div className="text-center" data-aos="fade-up">
            <p className="text-[18px] pb-[18px]  text-[#E1B261] tracking-[2px]">Our Prosess</p>
            <h2 className=" text-gray-300 text-[46px] mb-[48px] font-semibold">See How We Work For You</h2>
          </div>
          <div className="flex justify-between gap-8 items-center">
            <div className="w-fit pt-[50px] relative pb-[20px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary hover:-translate-y-2 transition-all duration-700 text-[#E1B261]">
              <p className="text-[80px] font-semibold leading-[90px] text-primary mb-[18px]">01</p>
              <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Strategy and Planning</h5>
              <p className="font-normal text-[#a7a7a7] text-[18px]">Aut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
              <Image className="relative top-[-245px] right-[-200px] hover:-translate-y-2 transition-all duration-700" src={processIcon1} width={78} height={78} alt="process_1"/>
            </div>
            <div className="w-fit pt-[50px] relative pb-[20px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary hover:-translate-y-2 transition-all duration-700 text-[#E1B261]">
              <p className="text-[80px] font-semibold leading-[90px] text-primary mb-[18px]">02</p>
              <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Concept Design</h5>
              <p className="font-normal text-[#a7a7a7] text-[18px]">Dut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
              <Image className="relative top-[-245px] right-[-200px] hover:-translate-y-2 transition-all duration-700" src={processIcon2} width={78} height={78} alt="process_2"/>
            </div>
            <div className="w-fit pt-[50px] relative pb-[20px] px-[30px] bg-[#222224] border-b-[2px] border-b-primary hover:-translate-y-2 transition-all duration-700 text-[#E1B261]">
              <p className="text-[80px] font-semibold leading-[90px] text-primary mb-[18px]">03</p>
              <h5 className="font-semibold text-white mb-[8px] text-[20px] leading-[30px]">Design Development</h5>
              <p className="font-normal text-[#a7a7a7] text-[18px]">Aut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.</p>
              <Image className="relative top-[-245px] right-[-200px] hover:-translate-y-2 transition-all duration-700 " src={processIcon3} width={78} height={78} alt="process_3"/>
            </div>
          </div>
        </div>
      </div>


</div>

<div className="about-section1 flex items-center justify-center min-h-screen relative">
      <div className="row">
        <div className="col-12 text-center">
          <div
            className="journey_content aos-init aos-animate mb-8"
            data-aos="fade-right"
          >
            <h6 className="text-[#E1B261] text-lg uppercase mb-4 transition-transform duration-300 transform hover:scale-110"> 
              Work With Us
            </h6>
            <h2 className="brightness-200 z-10 text-4xl text-white font-bold mb-6 transition-transform duration-300 transform hover:scale-110"> 
              Start Your Customer Journey With Us.
            </h2>
          </div>

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={yourImage} 
              alt="Background image"
              layout="fill" 
              objectFit="cover" 
              className="opacity-50" 
            />
          </div>

          {/* Journey Button */}
          <div className="journey-button flex justify-center items-center space-x-4 mt-8 z-10 relative">
            <a className="flex items-center space-x-2" onClick={handleClick}>
              <span 
                className={`transition-colors duration-300 ${clicked ? 'text-[#E1B261]' : isButtonHovered ? 'text-[#E1B261]' : 'text-white'}`}
                onMouseEnter={() => setIsButtonHovered(true)} // Change text color on hover
                onMouseLeave={() => setIsButtonHovered(false)} // Revert color on mouse leave
              >
                Get Started
              </span>
              <div 
                className={`border border-[#e9e8e6] p-2 rounded-full inline-flex items-center transition-transform duration-300 transform ${clicked ? 'bg-transparent border-transparent' : isArrowHovered ? 'bg-gray-200' : 'bg-amber-300'}`}
                onMouseEnter={() => setIsArrowHovered(true)} // Change arrow color on hover
                onMouseLeave={() => setIsArrowHovered(false)} // Revert color on mouse leave
              >
                <Image
                  src={icon}
                  className="img-fluid"
                  alt="Arrow icon"
                  width={20}
                  height={20}
                />
              </div>
            </a>
   
      </div>
 


              </div>
            </div>
          </div>
        </div>
      </section>
     

    </div>
  );
};

export default About;

