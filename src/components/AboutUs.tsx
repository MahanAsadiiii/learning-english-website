import React from 'react'
import { AboutUs, AboutUsBg  } from "../utilities/Images"
import { ArrowRight2 } from "iconsax-react"

function AboutUsSec() {
    return (
        <div className='flex justify-between mt-52'>
            <img src={AboutUsBg} alt="" className='absolute -z-20 left-0'/>
            <img src={AboutUs} alt="" className='left-0 basis-1/3' />
            <div className="mt-48 basis-3/5 ml-5">
                <h1 className="text-6xl font-bold ">About us</h1>
                <p className="text-[#7B8188] text-xl mt-20 mb-10">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                <button className="flex p-5 bg-[#2E3047] rounded-2xl text-white">
                    <a href="#" className='flex'>Read more</a>
                    <ArrowRight2 />
                </button>
            </div>
        </div>
    )
}

export { AboutUsSec }