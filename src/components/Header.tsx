import React from 'react'
import { NavLogo } from '../utilities/Index'
import { LoginCurve } from "iconsax-react"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="flex justify-between mt-6">
            <nav className='flex justify-between basis-2/5 items-center'>
                <img src={NavLogo} width={110} alt="" />
                <Link to="/" className='text-base font-normal text-[#363853]'>Home</Link>
                <Link to="/about-us" className='text-base font-normal text-[#363853]'>About Us</Link>
                <Link to="" className='text-base font-normal text-[#363853]'>How it Works</Link>
                <Link to="" className='text-base font-normal text-[#363853]'>Pricing</Link>
            </nav>
            <nav className="flex justify-between items-center">
                <a href="" className='flex text-[#363853]'>Login<LoginCurve className='ml-2'/></a>
                <a href="" className='py-4 px-8 bg-[#2E3047] text-white rounded-2xl ml-10 '>Sign up</a>
            </nav>
        </div>

    )
}

export { Header }