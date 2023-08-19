import React from 'react'
import { FooterBG, NavLogo } from '../utilities/Index'
import { Youtube, Facebook, Whatsapp, Instagram } from "iconsax-react"

function Footer() {
    return (
        <div className='mt-40'>
            <img src={FooterBG} alt="" className='absolute w-full left-0 -z-20' />
            <div className='flex flex-col items-center relative'>
                <div className="my-8 ">
                    <img src={NavLogo} alt="" width={64} height={64} />
                </div>
                <nav className='flex justify-between basis-4/5'>
                    <a href="" className=' text-base font-normal text-[var(--navy-2)] mx-5'>Home</a>
                    <a href="" className=' text-base font-normal text-[var(--navy-2)] mx-5'>About Us</a>
                    <a href="" className=' text-base font-normal text-[var(--navy-2)] mx-5'>How it Works</a>
                    <a href="" className=' text-base font-normal text-[var(--navy-2)] mx-5'>Pricing</a>
                    <a href="" className=' text-base font-normal text-[var(--navy-2)] mx-5'>Download app</a>
                </nav>
            </div>
            <hr className='mt-8 border-[var(--gray-2)]' />
            <div className="flex justify-between mt-6 mb-5">
                <div className="flex">
                    <Facebook color='#D6DAE4' variant="Bold" className='mr-5' />
                    <Youtube color='#5F35F2' variant="Bold" className='mx-5' />
                    <Whatsapp color='#D6DAE4' variant="Bold" className='mx-5' />
                    <Instagram color='#D6DAE4' variant="Bold" className='ml-5' />
                </div>
                <span className='text-sm  text-[var(--navy-2)]'>© Copyright 2021 by learn english. All rights reserved.</span>
            </div>
        </div>
    )
}

export { Footer }