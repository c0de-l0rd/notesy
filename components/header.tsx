import React from 'react'
import Image from 'next/image';
import { IoSearchOutline } from "react-icons/io5";
import { MdDehaze, MdMenu } from "react-icons/md";
import UserImage from '@/public/34.jpg'

function Header() {
  return (
    <div className='bg-white flex flex-row justify-between mb-[7rem]'>
      <div className='bg-white fixed z-1 flex flex-row justify-between '>

        <div className='mr-[10rem] flex justify-center items-center pt-2 pb-8'>
        <MdMenu className='text-lg ml-3 mr-3'/>
        <h1 className='text-lg antialiased font-mono font-bold mr-3'>Notesy</h1>
        </div>
        <div className=' flex justify-center items-center pt-2 pb-8'>
        <IoSearchOutline className='text-lg ml-3 mr-3' />
        <Image className='w-8 h-8 rounded-full ml-3 mr-3'
        src={UserImage}
        alt="user's image"/>            
        </div>
        </div>
    </div>
  )
}

export default Header