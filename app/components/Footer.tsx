import React from 'react'
import logofooter from  '../public/image/logo.png'
import Image from 'next/image'
import footerRight from '../public/image/footer-rightimage.png'
import { ArrowUpRight, CircleCheck, MailPlus, MapPinned, Send, Smartphone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="lg:pt-28 custom-mobile:pt-[35px] overflow-hidden">
            <section className="bg-cover bg-no-repeat pt-10">
                    <div className="flex flex-wrap justify-between">
                        {/* Logo and Call to Action */}
                        <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8">
                            <div className="flex flex-col lg:items-center custom-mobile:items-center">
                                <a>
                                    <figure className="mb-10 custom-mobile:mx-auto">
                                        <Image src={logofooter} className="lg:w-[160px] md:h-auto custom-mobile:mb-[25px] custom-mobile:w-[135px] custom-mobile:h-auto" alt=""/>
                                    </figure>
                                </a>
                                <p className="text-white md:text-2xl md:font-semibold md:pb-6 custom-mobile:text-[16px] custom-mobile:leading-[28px] custom-mobile:mb-[20px] custom-mobile:text-center lg:indent-[135px] lg:w-fit">Want to Create Something Great Together?</p>
                                <div className="flex space-x-4">
                                    <div className='flex items-center gap-5 group cursor-pointer md:text-[20px] custom-mobile:text-[14px]'>
                                        <a className='group-hover:text-[#E1B261] transition-all duration-300 ' href="#">Get Started</a>
                                        <span className='rounded-full bg-[#E1B261] border border-transparent w-fit custom-mobile:p-2 group-hover:bg-transparent group-hover:border-[#E1B261] group-hover:text-[#E1B261] transition-all duration-300'><ArrowUpRight /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Contact Info */}
                        <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8">
                            <div>
                                <h4 className="text-white text-2xl font-semibold mb-4 lg:text-start custom-mobile:text-center custom-mobile:text-[16px]">Contact Info:</h4>
                                <div className="flex items-start mb-4">
                                    <figure className="mr-4 hover:-translate-y-2 transition-all duration-900">
                                        <div className='pt-[5px]'>
                                            <Smartphone size={40} color="#E1B261" strokeWidth={1.75} />
                                        </div>
                                    </figure>
                                    <div className='flex flex-col'>
                                        <span className="text-[#A7A7A7] text-base custom-mobile:text-[14px] md:text-[16px]">Call us at:</span>
                                        <p className="text-white text-base mb-0 custom-mobile:text-[14px] md:text-[16px]">+5689 2589 6325</p>
                                    </div>
                                </div>
                                <div className="flex items-start mb-4">
                                    <figure className="mr-4 hover:-translate-y-2 transition-all duration-900">
                                        <div className='pt-[5px]'>
                                            <MapPinned size={40} color="#E1B261" strokeWidth={1.75} />
                                        </div>
                                    </figure>
                                    <div className='flex flex-col'>
                                        <span className="text-[#A7A7A7] text-base custom-mobile:text-[14px] md:text-[16px]">Our Location:</span>
                                        <p className="text-white text-base custom-mobile:text-[14px] md:text-[16px]">121 King Street Melbourne, 3000</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <figure className="mr-4 hover:-translate-y-2 transition-all duration-900">
                                        <div className='pt-[5px] '>
                                            <MailPlus size={40} color="#E1B261" strokeWidth={1.75} />
                                        </div>
                                    </figure>
                                    <div className='flex flex-col'>
                                        <span className="text-[#A7A7A7] text-base custom-mobile:text-[14px] md:text-[16px]">Email us at:</span>
                                        <p className="text-white text-base mb-0 hover:text-[#E1B261] custom-mobile:text-[14px] md:text-[16px]">info@merrakiinteriors.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Newsletter and Social Media */}
                        <div className="w-full lg:w-1/3 hidden lg:block px-4 mb-8 lg:ml-[-220px]">
                            <div>
                                <h4 className="text-white text-[23px] font-semibold mb-4">Subscribe to Our Newsletter:</h4>
                                <form method="POST" className="flex">
                                    <input type="text" className="w-full px-4 py-2 border-b bg-transparent text-white placeholder-gray-500 focus:outline-none " placeholder="Enter Your Email Address:" name="email" />
                                    <button className="bg-transparent border-b px-4 py-2 "><Send size={20} color="#E1B261" strokeWidth={1.75} /></button>
                                </form>
                                <ul className="mt-4 text-gray-400 text-sm list-none flex flex-row">
                                    <li className='flex flex-row hover:text-[#E1B261]'>
                                        <CircleCheck color="#ffff"/>
                                        <p className='pl-3'>Quis autem vel eum iure reprehenderit rui in ea voluptate velit esse.</p>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <ul className='flex gap-4'>
                                        <li className='pb-3 hover:-translate-y-2 transition-all duration-500 hover:text-[#E1B261] text-white'>
                                            <a href=""><Facebook size={20} strokeWidth={2} /></a>
                                        </li>
                                        <li className='pb-3 hover:-translate-y-2 transition-all duration-500 hover:text-[#E1B261] text-white'>
                                            <a href=""><Twitter  size={20} strokeWidth={2} /></a>
                                        </li>
                                        <li className='pb-3 hover:-translate-y-2 transition-all duration-500 hover:text-[#E1B261] text-white'>
                                            <a href=""><Instagram size={20} strokeWidth={2} /></a>
                                        </li>
                                        <li className='pb-3 hover:-translate-y-2 transition-all duration-500 hover:text-[#E1B261] text-white'>
                                        <a href=""><Linkedin size={20} strokeWidth={2} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <figure className="lg:absolute lg:right-0 lg:block bottom-[49px] custom-mobile:hidden">
                            <Image src={footerRight} alt="footerRight" width={165} height={297} />
                        </figure>
                    </div>
                <div className="bg-[#222224] py-[15px]">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <p className="text-gray-400 text-sm">Copyright © 2023 merrakiinteriors All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}


export default Footer