import { commentType } from "../static/index"

type propType = {
    bulletColored: number;
    commentArray: commentType[]
}

const Paginator = (prop: propType) => {

    return (

        <div className='flex gap-2'>
            {prop.commentArray.map((comment, index) => {
                return (
                    <div className={`${ comment.id === index ? "bg-[var(--primary)] ": "bg-[var(--gray-3)]"} rounded-full h-2 w-2`} key={comment.id}></div>
                )
            })}

        </div>

    )
}

export { Paginator }