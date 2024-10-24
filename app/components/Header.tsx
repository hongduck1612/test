"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import logo from '../public/image/logo.png';
import lightimage from "../public/image/top-lightimage.png";
import { AlignJustify, ArrowUpRight, ChevronDown, X } from 'lucide-react';



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        };
    const [isOpen2, setIsOpen2] = useState(false);
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
        };

    const [isOpenMenuMobile, setOpenMenuMobile] = useState(false);

    return (
        <div className='md:px-[85px] md:py-[30px] flex justify-between items-center md:font-extralight custom-mobile:px-[15px] custom-mobile:py-[25px]'>
                <Image className=' md:block md:absolute md:z-0 md:top-0 md:left-7 custom-mobile:hidden' src={lightimage} alt='lightimage' width={156} height={284}/>
                <Image className='z-10 lg:w-[180px] lg:h-[53px] custom-mobile:w-[145px] custom-mobile:h-[42px]' src={logo} alt="logo" width={180} height={180} />
                <ul className='md:flex hidden items-center gap-14 text-[18px] cursor-pointer'>
                    <li className='p-2 hover:text-[#E1B261] border-top-50 relative'><a href="/">Home</a></li>
                    <li className='p-2 hover:text-[#E1B261] border-top-50 relative'><a href="/About">About</a></li>
                    <li className='p-2 hover:text-[#E1B261] border-top-50 relative'><a href="">Services</a></li>
                    <li className='p-2 hover:text-[#E1B261] border-top-50 relative'><a href="/Portfolio">Portfolio</a></li>
                    <li className='p-2 hover:text-[#E1B261] border-top-50 relative z-20' onClick={toggleDropdown}>
                        <span className='flex justify-between items-center'>Pages<ChevronDown className='w-5' size={16} strokeWidth={3} /></span>
                        {isOpen && (
                            <ul className='absolute top-10 left-0 bg-white text-[#000] shadow-md text-nowrap'>
                                <li className='hover:bg-[#E1B261] px-5 py-3 transition-all duration-300'><a href="">Our Team</a></li>
                                <li className='hover:bg-[#E1B261] px-5 py-3 transition-all duration-300'><a href="">Faq&apos;s</a></li>
                            </ul>
                        )}
                    </li>
                    <li className='p-2 hover:text-[#E1B261] border-top-50 relative z-20' onClick={toggleDropdown2}>
                        <span className='flex justify-between items-center'> Blogs <ChevronDown className='w-5' size={16} strokeWidth={3} /></span>
                        {isOpen2 && (
                            <ul className='absolute top-10 left-0 bg-white text-[#000] shadow-md text-nowrap '>
                                <li className='hover:bg-[#E1B261] px-5 py-3 transition-all duration-300'><a href="..app/Blogs/Blog.tsx">Blog</a></li>
                                <li className='hover:bg-[#E1B261] px-5 py-3 transition-all duration-300'><a href="..app/SingleBlog.tsx">Single Blog</a></li>
                                <li className='hover:bg-[#E1B261] px-5 py-3 transition-all duration-300'><a href="/InfiniteScroll">Infinite Scroll</a></li>
                                <li className='hover:bg-[#E1B261] px-5 py-3 transition-all duration-300'><a href="">Load More</a></li>
                                <li className='hover:bg-[#E1B261] px-5 py-3 transition-all duration-300'><a href="">One Column</a></li>
                                <li className='hover:bg-[#E1B261] px-5 py-3 transition-all duration-300'><a href="/TwoColumn">Two Column</a></li>
                                <li className='hover:bg-[#E1B261] px-5 py-3 transition-all duration-300'><a href="/Three">Three Column</a></li>
                                <li className='hover:bg-[#E1B261] px-5 py-3 transition-all duration-300'><a href="">Three Column Sidebar</a></li>
                                <li className='hover:bg-[#E1B261] px-5 py-3 transition-all duration-300'><a href="/fourcolumn">Four Column</a></li>
                                <li className='hover:bg-[#E1B261] px-5 py-3 transition-all duration-300'><a href="/sixcolumn">Six Column</a></li>
                            </ul>
                        )}
                    </li>
                    <li className='flex items-center gap-5 pl-[60px] group cursor-pointer'>
                        <a className='group-hover:text-[#E1B261] transition-all duration-300' href="">Contact Us</a>
                        <span className='rounded-full bg-[#E1B261] border border-transparent w-fit p-5 group-hover:bg-transparent group-hover:border-[#E1B261] group-hover:text-[#E1B261] transition-all duration-300'><ArrowUpRight /></span>
                    </li>
                </ul>
                <div className="lg:hidden flex relative">
                    <div className="" onClick={()=> setOpenMenuMobile(!isOpenMenuMobile)}>
                        {isOpenMenuMobile ? <X /> : <AlignJustify size={30} />}
                    </div>
                    {isOpenMenuMobile && (
                    <div className="absolute bg-white right-0 top-10 z-10">
                        <ul className='w-[260px]'>
                            <li className='py-[10px] px-[30px]'><a href="" className=''>item 1</a></li>
                            <li className='py-[10px] px-[30px]'><a href="" className=''>item 2</a></li>
                            <li className='py-[10px] px-[30px]'><a href="" className=''>item 3</a></li>
                            <li className='py-[10px] px-[30px]'><a href="" className=''>item 4</a></li>
                            <li className='py-[10px] px-[30px]'><a href="" className=''>item 5</a></li>
                            <li className='py-[10px] px-[30px]'><a href="" className=''>item 6</a></li>
                            <li className='py-[10px] px-[30px]'><a href="" className=''>item 7</a></li>
                        </ul>
                    </div>)}
                </div>
            
            </div>
    )
}

export default Header