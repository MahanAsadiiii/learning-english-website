import { FooterBG, NavLogo  } from '../utilities/Index'
import { SocialMedia } from './index'


function Footer() {
    return (
        <div className='mt-40'>
            <img src={FooterBG} alt="" className='absolute w-full left-0 -z-20' />
            <div className='flex flex-col items-center relative'>
                <div className="my-8 ">
                    <img src={NavLogo} alt="" width={100} />
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
            <div className="flex items-center justify-between mt-6 mb-5">
                <SocialMedia />
                <span className='text-sm  text-[var(--navy-2)]'>© Copyright 2023 Mahan asadi.</span>
            </div>
        </div >
    )
}

export { Footer }