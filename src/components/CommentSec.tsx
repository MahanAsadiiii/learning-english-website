import React from 'react'
import { commentBg } from "../utilities/Index"
import { SocialMedia } from './index'
import { ProfilePic } from "../utilities/Index"
import { ArrowRight, ArrowLeft } from 'iconsax-react'

const CommentSec = () => {
    return (
        <div className='flex flex-col items-center my-28 '>
            <img src={commentBg} alt="" className='absolute left-0 w-full -z-20 ' />
            <div className="text-6xl text-[var(--headers-color)] font-bold pt-20 ">Comments of some users</div>
            <div className="bg-white mt-20 pt-20 px-5 pb-5 rounded-[30px]">
                <div className="flex px-20">
                    <img src={ProfilePic} alt="" />
                    <div className="mx-20">
                        <h4 className='text-3xl text-[var(--headers-color)] mb-4'>Kate Tanner</h4>
                        <SocialMedia />
                        <p className='mt-6 text-[var(--navy-2)] text-xl leading-9 pr-20'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                        </p>
                    </div>
                </div>
                <div className="flex justify-between mt-11">
                    <button className='flex items-center'>
                        <ArrowLeft size="16" color='var(--gray-2)'/>
                        <h6 className='text-[var(--gray-2)] text-sm ml-2'>Previous</h6>
                    </button>
                    <div className="flex gap-2">
                        <div className="bg-[var(--primary)] rounded-full h-2 w-2"></div>
                        <div className="bg-[var(--gray-3)] rounded-full h-2 w-2"></div>
                    </div>
                    <button className='flex items-center'>
                        <h6 className='text-[var(--gray-2)] text-sm mr-2'>Next</h6>
                        <ArrowRight size="16" color='var(--gray-2)'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export { CommentSec }