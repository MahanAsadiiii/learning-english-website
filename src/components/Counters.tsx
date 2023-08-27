import { counterBg } from "../utilities/Index"
import CountUp from 'react-countup';
import { TypeAnimation } from 'react-type-animation';



const Counters = () => {


    return (
        <div className="flex flex-col mt-14 justify-center">
            <img src={counterBg} alt="" className="absolute left-0 -z-20 w-full  " />
            <div className='flex justify-between text-white py-28'>
                <div className="flex flex-col items-center basis-1/5">
                    <CountUp start={0} end={500} duration={8} prefix="+" className="text-5xl font-bold"/>
                    <small className="text-3xl text-[var(--gray-2)] mt-2">videos</small>
                </div>
                <div className="flex flex-col items-center basis-1/5">
                    <CountUp start={0} end={15000} duration={8} prefix="+" className="text-5xl font-bold"/>
                    <small className="text-3xl text-[var(--gray-2)] mt-2">User</small>
                </div>
                <div className="flex flex-col items-center basis-1/5">
                    <CountUp start={0} end={95} duration={8} prefix="%" className="text-5xl font-bold"/>
                    <small className="text-3xl text-[var(--gray-2)] mt-2">Satisfaction</small>
                </div>
                <div className="flex flex-col items-center basis-1/4">
                    <TypeAnimation sequence={['Easy',2500, 'Hard',2500,'Intermediate',2500,]} speed={5} repeat={Infinity} cursor={false} className="text-5xl font-bold"/>
                    <small className="text-3xl text-[var(--gray-2)] mt-2">Hardship</small>
                </div>
            </div>
        </div>
    )
}

export { Counters }