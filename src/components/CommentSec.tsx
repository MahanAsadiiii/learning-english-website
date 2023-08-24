import React, { useState } from 'react';
import { commentBg } from "../utilities/Index"
import { CommentCard, Paginator } from './index'
import { comments } from "../static/index"
import { ArrowRight, ArrowLeft } from 'iconsax-react'

const CommentSec = () => {


    const [commentIndex, setCommentIndex] = useState<number>(0)

    const nextHandler = () => {
        const isLastslide = commentIndex === comments.length -1
        const newIndex = isLastslide ? 0 : commentIndex + 1
        setTimeout(() => {
            setCommentIndex(newIndex);
        }, 500);
    }

    const PrevHandler = () => {
        const isFirstSlide = commentIndex === 0;
        const newIndex = isFirstSlide ? comments.length -1 : commentIndex -1 
        setTimeout(() => {
            setCommentIndex(newIndex);
        }, 500);
    }



    return (
        <div className='flex flex-col items-center my-28 '>
            <img src={commentBg} alt="" className='absolute left-0 w-full -z-30 ' />
            <div className="text-6xl text-[var(--headers-color)] font-bold pt-20 ">Comments of some users</div>
            <div className="bg-white mt-20 pt-20 px-6 pb-5 rounded-[30px] relative shadow-md">

                <CommentCard item={comments[commentIndex]} />

                <div className="flex items-center justify-between mt-11">
                    <button onClick={PrevHandler} className='flex items-center'>
                        <ArrowLeft size="16" color='var(--gray-2)' />
                        <h6 className='text-[var(--gray-2)] text-sm ml-2'>Previous</h6>
                    </button>

                    <Paginator commentArray={comments} bulletColored={commentIndex} />

                    <button onClick={nextHandler} className='flex items-center'>
                        <h6 className='text-[var(--gray-2)] text-sm mr-2'>Next</h6>
                        <ArrowRight size="16" color='var(--gray-2)' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export { CommentSec };
