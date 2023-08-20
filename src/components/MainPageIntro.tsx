import React from 'react'
import { IntroImg, IntroBgImg, Rectangle1, Rectangle2 } from '../utilities/Index'
import { Teacher, Money } from "iconsax-react"


function Intro() {
    return (
        <div className='mt-16'>
            <img src={IntroBgImg} alt="" className='absolute w-full top-0 left-0 -z-50' />
            <div className='w-full flex justify-between relative'>
                <div className="flex flex-col justify-end basis-2/5 pb-16">
                    <h1 className='text-6xl font-bold'>Watch movies and learn languages</h1>
                    <p className='text-[#7B8188] text-3xl mt-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
                    <div className="flex mt-8">
                        <button className='mr-12'>
                            <img src={Rectangle1} alt="" className='absolute' />
                            <div className="relative flex items-center pl-5">
                                <Teacher variant="Bold" color='#FFFFFF' />
                                <a href="" className='flex text-white py-4 rounded-xl ml-2'> Get Started</a>
                            </div>
                        </button>
                        <button>
                            <img src={Rectangle2} alt="" className='absolute' />
                            <div className="relative flex items-center pl-12">
                                <Money variant="Bold" color='#5F35F2' />
                                <a href="" className='flex text-[#5F35F2] py-4 ml-2'>Pricing</a>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="">
                    <img src={IntroImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export { Intro }