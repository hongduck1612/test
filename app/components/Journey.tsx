import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Journey = () => {
    return (
        <div>
            <div className="relative lg:pt-[185px] custom-mobile:pt-[0px] lg:h-[700px] lg:pb-[145px] custom-mobile:h-[400px]">
                <div className="journey-section"></div>
                <div className="overlayImage"></div>
                <div className="w-full text-center absolute z-10 custom-mobile:pt-[100px]">
                    <h6 className="lg:text-[18px] pb-[18px] lg:leading-[26px] custom-mobile:text-[14px] custom-mobile:leading-[20px] text-primary tracking-[2px] font-normal">Work With Us</h6>
                    <h2 className="lg:text-[60px] lg:px-[130px] custom-mobile:px-[15px] text-center font-bold lg:leading-[80px] custom-mobile:text-start custom-mobile:text-[19px] custom-mobile:leading-[30px]">Start Your Customer Journey With Us.</h2>
                    <div className="flex items-center custom-mobile:justify-center w-[100%] group gap-4 lg:pt-8 custom-mobile:pt-[15px]">
                        <a className="items-center lg:text-[20px] custom-mobile:text-[14px] lg:leading-[22px] custom-mobile:leading-[20px] text-[#ffff] group-hover:text-primary" href="./service.html">
                            Get Started
                        </a>
                        <span className="lg:p-5 custom-mobile:p-2 border bg-primary text-white border-[#E1B261] group-hover:bg-transparent group-hover:text-primary group-hover:border-primary transition-all duration-800 rounded-full cursor-pointer"><ArrowUpRight/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journey