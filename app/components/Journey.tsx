import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Journey = () => {
    return (
        <div>
            <div className="relative pt-[185px] h-[700px] pb-[145px]">
        <div className="journey-section">
        </div>
        <div className="overlayImage"></div>
        <div className="w-full text-center absolute z-10">
            <h6 className="text-[18px] pb-[18px] leading-[26px] text-primary tracking-[2px] font-normal">Work With Us</h6>
            <h2 className="text-[66px] px-[150px] font-semibold leading-[80px] indent-[100px]">Start Your Customer Journey With Us.</h2>
            <div className="flex items-center group gap-4 w-fit pl-[670px] pt-8">
                <a className="items-center text-[20px] text-[#ffff] group-hover:text-primary" href="./service.html">
                Get Started
                </a>
                <span className="p-5 border bg-primary text-white border-[#E1B261] group-hover:bg-transparent group-hover:text-primary group-hover:border-primary transition-all duration-800 rounded-full cursor-pointer"><ArrowUpRight/></span>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Journey