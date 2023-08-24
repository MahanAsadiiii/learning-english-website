import { ProfilePic1 } from "../utilities/Index"


export interface commentType {
    id: number;
    name: string;
    profilePic: string;
    content: string;
};


export const comments:commentType[] =[
    {
        id:1,
        name: "Kate Tanner",
        profilePic: ProfilePic1,
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl "
    },
    {
        id:2,
        name: "Donald trump",
        profilePic: ProfilePic1,
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. "
    },
    {
        id:3,
        name: "Mike tyson",
        profilePic: ProfilePic1,
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "
    },
    {
        id:4,
        name: "Gigi Hadid",
        profilePic: ProfilePic1,
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "
    },
    {
        id:5,
        name: "Barack obama",
        profilePic: ProfilePic1,
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "
    },

]