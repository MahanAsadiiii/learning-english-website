import React, { ReactNode } from 'react';
import { Heart } from 'iconsax-react';

interface Step {
    icon: ReactNode;
    content: string;
}

const Steps: Step[] = [
    {
        icon: <Heart size="32" color="#18232f" />,
        content: "Lorem ipsum dolor sit amet consectetuer ",
    },
    {
        icon: <Heart size="32" color="#18232f" />,
        content: "Lorem ipsum dolor sit amet consectetuer ",
    },
    {
        icon: <Heart size="32" color="#18232f" />,
        content: "Lorem ipsum dolor sit amet consectetuer ",
    },
    {
        icon: <Heart size="32" color="#18232f" />,
        content: "Lorem ipsum dolor sit amet consectetuer ",
    },
];

export { Steps };
