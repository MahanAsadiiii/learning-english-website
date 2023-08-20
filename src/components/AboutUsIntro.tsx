import React from 'react'
import { aboutUsIntro } from '../utilities/Index'

const AboutUsIntro = () => {
    return (
        <div className='flex flex-col mt-32'>
            <div className="flex justify-evenly mx-10">
                <h1 className='text-6xl text-[var(--headers-color] font-bold basis-1/3'>About us <br/>learn english</h1>
                <p className='text-xl text-[var(--gray-2)] basis-1/2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpatLorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
            </div>
            <div className="mt-7">
                <img src={aboutUsIntro} alt="" />
            </div>
        </div>
    )
}

export {AboutUsIntro}