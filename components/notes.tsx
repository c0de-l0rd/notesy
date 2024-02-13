import React from 'react'

interface NotesProps {
  text:string
}

function Notes(props:NotesProps) {
  return (

    <div className="grid grid-cols-1 ml-8 mr-8 mt-3">
        <div className="card line-clamp-3">
          {props.text} 
        </div>
    </div>

    
  )
}

export default Notes