import React, { useEffect, useState } from 'react'
import { Lock1, User, Google, ArrowLeft2 } from 'iconsax-react'
import { Form } from 'antd';
import { Link } from 'react-router-dom';

const InputForm = () => {

  const [checked, setChecked] = useState(false);
  const [acceptAble, setAcceptable] = useState(false)
  const [submite, setSubmite] = useState(false)

  const handleCheckboxChange = () => {
    setChecked(!checked);
  }
  const handlechange = (value: string) => {
    const lenght = new RegExp('(?=.{8,})')
    if (lenght.test(value)) {
      setAcceptable(true);
    } else {
      setAcceptable(false)
    }
  }
  const submiteHandler = () => {
    if(acceptAble && checked){setSubmite(true)} 
  }

  return (
    <div className='px-12 h-screen pt-7'>
      <Link to={'/'} className="flex">
        <ArrowLeft2 color="#7B8188" />
        <h3 className='text-[--gray-2]'>Back</h3>
      </Link>
      <div className='px-11 mt-8'>
        <div className="text-center">
          <h2 className='text-4xl font-bold'>Welocome back</h2>
          <h4 className='text-[--headers-color] mt-2 text-xl font-light'>
            Don't have an account?
            <Link to={'/'} className='text-[--primary] text-xl font-bold pl-2 cursor-pointer'>Sign up for free</Link>
          </h4>
        </div>
        <Form onFinish={submiteHandler} className="mt-5">
          <div className="">
            <label htmlFor='username-input' className="text-[--gray-2]">Username</label>
            <div className="flex items-center border-[1px] rounded-2xl border-[--light-gray] mt-2 gap-4 px-4 py-4">
              <User color='#7B8188' />
              <input id='username-input' type="email" placeholder='username@idealink.com.tr' className='font-normal w-full outline-none' />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor='password-input' className="text-[--gray-2]">Password</label>
            <div className="flex items-center border-[1px] rounded-2xl border-[--light-gray] mt-2 gap-4 px-4 py-4">
              <Lock1 color="#7B8188" />
              <input id='password-input' type="password" placeholder='********' className='font-normal w-full outline-none ' onChange={(e) => handlechange(e.target.value)} />
            </div>
          </div>
          <div className="flex justify-between mt-7 px-1">
            <div className="flex gap-1 cursor-pointer" >
              <input type="checkbox" checked={checked} className='w-5 cursor-pointer' onChange={handleCheckboxChange} />
              <h3 className={`text-[--dark-navy] ${!checked && 'opacity-40'}`} >Remember me</h3>
            </div>
            <h3 className="text-[--gray-2] cursor-pointer">Forget password?</h3>
          </div>
          <button className={`w-full bg-[--primary] py-4 rounded-2xl mt-6 text-white text-xl ${!submite && 'opacity-50'}`}>Login</button>
        </Form>
        <div className="my-8">
          <div className="flex items-center w-full justify-evenly">
            <div className="h-1 border-b-[1px] border-[--light-gray] basis-1/4"></div>
            <div className="text-xl text-[--light-gray] basis-2/5 text-center">Or Sign in with</div>
            <div className="h-1 border-b-[1px] border-[--light-gray] basis-1/4"></div>
          </div>
        </div>
        <div className="border-[1px] rounded-2xl border-[--light-gray] flex justify-center gap-4 items-center w-full py-4">
          <Google color="#5F35F2" />
          <h3 className='text-[--headers-color]'>Sign in whith Google</h3>
        </div>
      </div >
    </div>
  )
}

export { InputForm }