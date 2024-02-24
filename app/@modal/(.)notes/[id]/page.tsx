'use client'

import React, { useEffect, useState } from 'react';
import { Modal } from './modal';




export default function PhotoModal({
  params: { id: noteId },
}: {
  params: { id: number };
}) {


  //get the current url
  const path = window.location.pathname;

  // current url path by slashes and get the last part of the url to get doc _id
  const parts = path.split('/')
  const lastPart = parts[parts.length - 1]

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
  //  console.log('me data',notes)
  //   console.log(notes.length)
  }, [])


  //change edit the text in input field
  const editText = async (event:React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
    
    //check what is being typed in consol
    console.log("value",event.target.value)

    //check the note id
    console.log("here is your id")
    console.log(lastPart)
    notes[noteId].bodyText = event.target.value;
  }

  return <>
  
  <Modal id= {lastPart} bodytext= {text}>
    <input  value={text} type="text" name="note" id="note" onChange={editText}/>
  

  </Modal>
    </>
}
