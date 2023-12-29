import React from 'react'
import Image from 'next/image';
import { IoSearchOutline } from "react-icons/io5";
import { MdDehaze, MdMenu } from "react-icons/md";
import UserImage from '@/public/34.jpg'

function Header() {
  return (
    <div className='flex flex-row mt-3 justify-between'>
        <div className='flex align-middle justify-center'>
        <MdMenu className='ml-3 mr-3' size='40'/>
        <h1 className='text-[25px] antialiased font-mono font-bold ml-3 mr-3'>Notesy</h1>
        </div>
        <div className='flex align-middle justify-center'>
        <IoSearchOutline className='ml-3 mr-3' size='40'/>
        <Image className='rounded-full ml-3 mr-3'
        height={45}
        width={45}
        src={UserImage}
        alt="user's image"/>            
        </div>
    </div>
  )
}

export default Header