'use client'

import React, { useEffect, useState } from 'react';
import { Modal } from './modal';


export default function PhotoModal({
  params: { id: noteId },
}: {
  params: { id: number };
}) {

  const [text, setText] = useState<string>("")
  const [notes, setNotes] = useState<any[]>([])

  const fetchNotes = async () => {
    try{
      const response = await fetch('../../../api/data', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
      })

      if(!response.ok){
        const message = `an error ocured ${response.status}`
        throw new Error(message)
      }

      const data = await response.json()

      setNotes([...data.data])
      console.log("my array",notes)

       
      
    } 
    catch(error){
      console.log(`an error`,error)
    }
  }

  //fetch notes when component mounts
  useEffect(()=>{
    fetchNotes()
    setText(notes[noteId]?.bodyText)
   console.log('me data',notes)
    console.log(notes.length)
  }, [])

  // useEffect(() => {
  //   console.log(`photoId:${noteId}`)
    
  //   setText(notes[noteId]?.text)
  // },[])

  //change edit the text in input field
  const editText = (event:React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
    
    //chec what is being typed in consol
    console.log("value",event.target.value)
    notes[noteId].bodyText = event.target.value;
  }

  return <Modal>
    <input  value={text} type="text" name="note" id="note" onChange={editText}/>
  </Modal>;
}
