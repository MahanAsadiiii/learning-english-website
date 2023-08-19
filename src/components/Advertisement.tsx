import { advertisement } from '../utilities/Index'

const Advertisement = () => {
  return (
    <div className='flex border-2 border-[var(--light-gray)] rounded-2xl mt-28 py-4 px-6 items-center'>
        <img src={advertisement} alt="" />
        <div className="flex flex-col ml-4">
            <h5 className='text-lg font-bold text-[var(--headers-color)]'>14-day money back guarantee</h5>
            <span className='text-lg font-light text-[var(--headers-color)]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </span>
        </div>
    </div>
  )
}

export {Advertisement}