import React from 'react'
import { MdOutlineEdit, MdShare, MdOutlineDelete } from "react-icons/md";
import { PiShareLight } from "react-icons/pi";


interface NotesProps {
  text:string
}

function Notes(props:NotesProps) {
  return (

    <div className="grid grid-cols-1 ml-8 mr-8 mt-3 rounded-[20px] bg-red-600">
        <div className="card line-clamp-3">
          {props.text} 
        </div>
        {/* <hr className="bg-black"/> */}
        <div className='px-6'>  <div className='bg-gray-500 px-[3rem] h-[0.1px]'></div>
            </div>
        <div className='flex flex-row justify-around px-[3rem]'>
        <MdOutlineEdit  size={24}/>
        <PiShareLight size={24}/>
        {/* <MdShare  size={24}/> */}
        <MdOutlineDelete size={24} />
        </div>
    </div>

    
  )
}

export default Notes