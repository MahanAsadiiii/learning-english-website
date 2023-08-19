import React from 'react'
import { ArrowRight2 } from "iconsax-react"
import { HowItWorksBg, Mobile } from '../utilities/Index'
import { Steps } from '../static/index'


function HowItWorks() {

    return (
        <div className='mt-56 w-full'>
            <img src={HowItWorksBg} alt="" className='absolute w-full left-0 right-0 -z-50' />
            <div className='flex justify-between pt-28'>
                <div className="basis-2/5 mt-24">
                    <h1 className='text-6xl font-bold  mb-4'>How it Works?</h1>
                    <p className='text-xl text-[#7B8188]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                    <div className="mt-10">
                        {Steps.map((step) => {
                            
                            return (
                                <div className="flex mb-4">
                                    <div className="p-4 bg-[#D6DAE4] rounded-2xl">{step.icon}</div>
                                    <li className='flex list-none items-center ml-4'>{step.content}</li>
                                </div>
                            )
                        })}
                    </div>

                    <button className="flex items-center bg-[#2E3047] p-5 mt-10 rounded-2xl text-white">
                    <a href="" className=' '>Read more</a>
                    <ArrowRight2 size="16"/>
                    </button>
                </div>
                <div className="">
                    <img src={Mobile} alt="" />
                </div>

            </div>
        </div>
    )
}

export { HowItWorks }