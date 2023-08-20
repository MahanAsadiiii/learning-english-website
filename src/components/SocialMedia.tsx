import React from 'react'
import { Youtube, Facebook, Whatsapp, Instagram } from "iconsax-react"

const SocialMedia = () => {
    return (
        <div className="flex">
            <Facebook color='#D6DAE4' variant="Bold" className='mr-5' />
            <Youtube color='#5F35F2' variant="Bold" className='mx-5' />
            <Whatsapp color='#D6DAE4' variant="Bold" className='mx-5' />
            <Instagram color='#D6DAE4' variant="Bold" className='ml-5' />
        </div>
    )
}

export {SocialMedia}