import React from 'react'
import { TickCircle } from "iconsax-react"
import { cardBg } from '../utilities/Images'
import { cardElem } from '../static'

type card = {
    item: cardElem
}


let Card = (prop: card) => {

    let nameColorVar
    let contentColor

    if (prop.item.nameColor === 'black' || prop.item.priceColor === 'black') {
        nameColorVar = 'text-black'
    } else if (prop.item.nameColor === 'gold' || prop.item.priceColor === 'gold') {
        nameColorVar = 'text-[#F2C41F]'
    } else if (prop.item.nameColor === 'white' || prop.item.priceColor === 'white') {
        nameColorVar = 'text-white'
    }

    if (prop.item.btnContentColor === 'gray') {
        contentColor = 'text-[var(--gray-2)]'
    } else if (prop.item.btnContentColor === 'white') {
        contentColor = 'text-white'
    } else if (prop.item.btnContentColor === 'violet') {
        contentColor = 'text-[var(--primary)]'
    }

    return (

        <div className={`flex flex-col relative border-2 px-6 pb-4 rounded-3xl z-50  ${prop.item.bgColor === 'violet' && 'bg-[var(--primary)]'}`} >
            <img src={cardBg} alt="" className={`absolute left-0 top-0 h-full -z-20 ${prop.item.bgOpacity === true && 'opacity-30'}`} />
            <div className="flex justify-between mt-6 items-center">
                <h4 className={` text-xl font-bold ${nameColorVar}`}>{prop.item.name}</h4>
                <h6 className={`font-medium ${prop.item.tagColor === 'gold' ? 'text-[var(--gold)]' : "text-black"} `}>{prop.item.tag}</h6>
            </div>
            <div className="mt-5">
                <h2 className={`text-4xl font-black ${nameColorVar} `}>{prop.item.price}</h2>
                <span className={`mt-2 text-xl ${prop.item.periodColor === 'gray' ? 'text-[var(--gray-2)]' : 'text-white'}`}>{prop.item.period}</span>
            </div>
            <button className={`px-16 py-4 rounded-2xl mt-8  ${prop.item.btnBorder === true && 'border-2 border-[var(--light-gray)]'} ${prop.item.btnColor === 'violet' ? 'bg-[var(--primary)]' : 'bg-white'} `}>
                <a href="#" className={`text-xl ${contentColor}`}>{prop.item.btnContent}</a>
            </button>

            <div className="mt-4">
                {prop.item.features.map((feature: any) => {
                    return (
                        <div className="flex items-center">
                            <TickCircle size="16" color="#51d987" />
                            <h6 className={`flex py-2 ml-4 ${prop.item.featuresColor === 'white' && 'text-white'}`}>{feature}</h6>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export { Card }

