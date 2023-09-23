import React from 'react'
import { downloadSecBg, PricingHeroPic } from '../utilities/Index'

const PricingHero = () => {
    return (
        <div className='mt-16 relative'>
            <img src={downloadSecBg} alt="Bg" className='absolute w-full top-0 left-0 -z-20 opacity-60 h-full object-cover ' />
            <div className="flex justify-around items-center">
                <div className="w-3/5">
                    <h1 className='text-[var(--headers-color)] font-bold text-6xl font-[Lato] mb-4'>Ready to get started?</h1>
                    <p className='text-gray-400 text-xl font-[Lato] font-normal '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                </div>
                <div className="">
                    <img src={PricingHeroPic} alt="bg-hero" />
                </div>
            </div>
        </div>
    )
}

export { PricingHero }