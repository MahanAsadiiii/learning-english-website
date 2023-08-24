import { valueCard1, valueCard2, valueCard3 } from "../utilities/Index"

export type valueCardType = {
    image: string,
    title: string,
    desc: string
}


export const valueCard: valueCardType[] = [
    {
        image: valueCard1 ,
        title: "Learn Languages Online",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore"
    },
    {
        image: valueCard2,
        title: "Daily Practice",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore"
    },
    {
        image: valueCard3 ,
        title: "Day Free Trial",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore"
    },
]