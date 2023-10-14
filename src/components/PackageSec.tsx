// import React from 'react'
import { PackageCard } from './index'


function PackageSec() {


  return (
    <div className='flex flex-col items-center mt-40'>
      <h1 className='text-6xl font-bold'>Ready to get started?</h1>
      <p className='flex text-center text-xl text-[--gray-2] w-2/3 mt-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
      <PackageCard />
    </div >
  )
}

export { PackageSec }