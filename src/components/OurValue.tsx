import React from 'react'
import { valueCard } from '../static/index'

let OurValue = () => {

    return (
        <div className='mt-44'>
            <h1 className='text-6xl text-[var(--headers-color)] font-bold flex justify-center'>our value</h1>
            <div className="flex justify-evenly mt-28">
                {valueCard.map((item) => {
                    return (
                        <div className="text-center basis-1/4">
                            <img src={item.image} alt="" className='flex mx-auto' />
                            <h5 className='text-3xl text-[var(--headers-color)] font-bold my-6 px-auto'>{item.title}</h5>
                            <p className='text-lg text-[var(--headers-color)] px-2'>{item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export { OurValue }