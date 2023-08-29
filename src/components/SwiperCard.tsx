import React, { useState } from "react"
import "../styles/style.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { comments } from "../static/index"
import { CommentCard } from "./index"
import { commentBg } from "../utilities/Index"


export default function SwiperCard() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <>
            <div className='my-28 '>
                <img src={commentBg} alt="" className='absolute left-0 w-full -z-30 ' />
                <div className="flex justify-center pt-20 "><h2 className="text-6xl text-[var(--headers-color)] font-bold">Comments of some users</h2></div>
                <div className="bg-white mt-20 pt-20 px- pb-5 rounded-[30px] relative shadow-md ">
                    <div ref={sliderRef} className="keen-slider ">
                        {comments.map((comment) => {
                            return (
                                <CommentCard item={comment} />
                            )
                        })}
                    </div>
                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </>
                    )}
                    {loaded && instanceRef.current && (
                        <div className="dots">
                            {comments.map((comment, index) => {
                                return (
                                    <button
                                        key={comment.id}
                                        onClick={() => {
                                            instanceRef.current?.moveToIdx(index)
                                        }}
                                        className={"dot" + (currentSlide === index ? " active" : "")}
                                    >

                                    </button>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow mx-4 ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}


export { SwiperCard }