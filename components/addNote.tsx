import React from 'react'
import { MdOutlineEdit } from "react-icons/md";


function AddNote() {
  return (
    <div className='bg-gray-400 bg-opacity-50 w-[70px] h-[70px] rounded-[25px] pt-4 fixed ml-[76%] mt-[125%]'>
        <MdOutlineEdit size={42} className='m-auto '/>
    </div>
  )
}

export default AddNote