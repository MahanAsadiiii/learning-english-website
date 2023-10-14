import React from 'react'
import { InputForm } from "../components/index"
import { loginPic, NavLogo } from "../utilities/Index"

const Login = () => {
    return (
        <div className='flex'>
            <div className="w-1/2 ">
                <InputForm />
            </div>
            <div className="bg-[--primary-light-purple] px-8 w-1/2 pt-7">
                <div className="flex justify-end">
                    <img src={NavLogo} width={80} alt="Logo-sign" className=''/>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <h1 className='text-[--headers-color] text-4xl font-bold '>Try Learn free for 15 Days</h1>
                    <h4 className='text-[--navy-2] font-normal mt-4 mb-14 w-2/3 text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt </h4>
                    <img src={loginPic} alt="bg-photo" />
                </div>
            </div>
        </div>
    )
}

export { Login }