import React, { useState } from 'react';
import { ProfilePic1 } from '../utilities/Index';
import { SocialMedia } from './index';
import { commentType } from '../static';


type propType = {
    item: commentType ;
}



const CommentCard = ( prop : propType ) => {

    return (
        <div className="flex basis-full px-20 translate-x-5" key={prop.item.id}>
            <img src={ProfilePic1} alt="" />
            <div className="mx-20">
                <h4 className='text-3xl text-[var(--headers-color)] mb-4'>{prop.item.name}</h4>
                <SocialMedia />
                <p className='mt-6 text-[var(--navy-2)] text-xl leading-9 pr-20'>{prop.item.content}</p>
            </div>
        </div>
    );
};

export { CommentCard };
