import { GooglePlay } from 'iconsax-react'
import { downloadSecBg, downloadSecImage, appStore, googlePlay } from '../utilities/Images'

const DownloadSec = () => {
    return (
        <div className='flex relative mt-32'>
            <img src={downloadSecBg} alt="" className='absolute w-full bottom-0 left-0 -z-20' />
            <div className='flex justify-between '>
                <div className="basis-1/2 mt-36">
                    <div className="text-[var(--headers-color)] text-6xl font-medium">Download Learn App</div>
                    <div className="text-[var(--gray-2)] text-xl mt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</div>
                    <div className="flex gap-5 mt-10">
                        <button>
                            <img src={googlePlay} alt="" />
                        </button>
                        <button>
                            <img src={appStore} alt="" />
                        </button>
                    </div>
                </div>
                <div className="">
                    <img src={downloadSecImage} alt="" className='' />
                </div>
            </div>
        </div>
    )
}

export { DownloadSec }