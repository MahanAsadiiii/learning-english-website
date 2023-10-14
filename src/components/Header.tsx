import  { useState, useEffect } from 'react'
import { NavLogo } from '../utilities/Index'
import { LoginCurve } from "iconsax-react"
import { Link, useLocation } from 'react-router-dom'
import { NavbarItem } from '../static'

function Header() {
  const [marker, setMarker] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname
    const activeIndex = NavbarItem.findIndex((item) => item.to === pathname)
    setMarker(activeIndex)
  }, [location])

  return (
    <div className="flex justify-between mt-6">
      <nav className='flex justify-between basis-2/5 items-center'>
        <img src={NavLogo} width={110} alt="" />
        {NavbarItem.map((item, index) => {
          return (
            <Link key={index} to={item.to} className={`${marker === index ? "border-b-2 border-b-[--primary] text-[--primary] " : "text-[--navy-2]"} text-base font-normal `}>{item.content}</Link>
          )
        })}
      </nav>
      <nav className="flex justify-between items-center">
        <Link to="/login" className='flex text-[--navy-2]'>Login<LoginCurve className='ml-2' /></Link>
        <Link to="" className='py-4 px-8 bg-[--dark-navy] text-white rounded-2xl ml-10 '>Sign up</Link>
      </nav>
    </div>
  )
}

export { Header }
