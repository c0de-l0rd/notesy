'use client'

import Link from 'next/link';
import Notes from '@/components/notes';
import { Suspense, useEffect, useState, useRef } from 'react';
import fetchNotes from '@/utils/fetchtNotes';

export default function Page() {
  //let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  const [notes, setNotes] = useState<any[]>([])
  const [modalActive, setModalActive] = useState<Boolean>(false)

  const [title, setTitle] = useState<string>("")
  const [bodyText, setBodyText] = useState<string>("")

 


  const saveNote = async (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicked")

    setModalActive(false)


    try {
      //fetch notes from mongo
      const response = await fetch('api/createNote', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          bodyText: bodyText,
          // other key-value pairs
        }),
      })
      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`
        throw new Error(message)
      }
    
      
    } 
    catch (error) {
      console.log("an error has occured in fetch API", error)
    } 
    
    //fetch all notes including newly added
   const response = await fetchNotes()
   setNotes(response[response.length - 1])

   setTitle('')
   setBodyText('')

  };

  const editTitle = async (event:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
    
  }

  const editBodyText = async (event:React.ChangeEvent<HTMLInputElement>) => {
    setBodyText(event.target.value)
    
  }

  const deleteNote = async ( event: React.MouseEvent<HTMLButtonElement>, id:string) => {

   setNotes(notes.filter(note=> note._id !== id))

    try{
      const response = await fetch("api/deleteNote",{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        id: id
      })
    })

    if(!response.ok){
      const message = `an error has ocurred ${response.status}`
      throw new Error(message)
    }
  } catch(error){
    console.log(error)
  }

  }


  //fetch all notes on component mount
  useEffect(()=>{
    console.log("not running on state change")
   fetchNotes().then(data=>setNotes(data[0]))
   console.log('me data',notes)
    console.log(notes.length)
  }, [])


  return (
    <section>
      {notes?.map((note:any) => (

      <Suspense fallback={<div>loading...</div>}>
        <Link  key={note._id} href={`/notes/${note._id}`}
        as={`/notes/${note._id}`} // Use the same URL pattern for consistency
        passHref
        >
          <Notes text={note.bodyText}/>
        </Link>
        
        <button onClick={(e)=>deleteNote(e, note?._id)}>delete</button>
        </Suspense>
        
      ))}

      {modalActive &&
         <div>
        
        <input  value={title} type="text" name="title" id="note" onChange={editTitle}/>
        <input  value={bodyText} type="text" name="bodyText" id="note" onChange={editBodyText}/>
        <button onClick={saveNote}>save</button>

      </div>
      }

<button onClick={ ()=>setModalActive(true)}>New note</button>
    </section>
  );
}
