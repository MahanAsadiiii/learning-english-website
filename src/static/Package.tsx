import { TickCircle } from "iconsax-react"

export interface cardElem {
    name: string,
    nameColor: 'black' | 'gold' | 'white',
    tag?: string,
    tagColor?: 'gold',
    price: string,
    priceColor: 'black' | 'gold' | 'white',
    period: string,
    periodColor?: 'gray',
    btnContent: string,
    btnContentColor:'gray'|'white'|'violet',
    btnColor?: 'violet' ,
    icon: React.ReactElement,
    features: string[],
    featuresColor?: 'white'
    bgColor?: 'violet',
    bgOpacity? : boolean,
    btnBorder?: boolean,


}

export const Packages: cardElem[] = [
    {
        name: "Simple",
        nameColor: "black",
        price: "Free",
        priceColor: 'black',
        period: "For a life time",
        periodColor: 'gray',
        btnContent: "Get Started",
        btnContentColor: "gray",
        btnBorder: true,
        icon: <TickCircle />,
        features: ["Watch 3 movies for free", "Daily practice of flash cards", "Save practice"],
    },
    {
        name: "Golden",
        nameColor: "gold",
        price: "$50",
        priceColor: 'gold',
        period: "/month",
        periodColor: 'gray',
        btnContent: "Subscribe",
        btnContentColor: 'white',
        btnColor: "violet",
        icon: <TickCircle />,
        features: ["Watch 3 movies for free", "Daily practice of flash cards", "Save practice"],
    },
    {
        name: "Diamond",
        nameColor: "white",
        tag: "Economical",
        tagColor: "gold",
        price: "$40",
        priceColor: "white",
        period: "/month",
        btnContent: "Subscribe",
        btnContentColor: 'violet',
        icon: <TickCircle />,
        features: ["Watch 3 movies for free", "Daily practice of flash cards", "Save practice"],
        featuresColor: 'white',
        bgColor: "violet",
        bgOpacity: true 
    },

]

