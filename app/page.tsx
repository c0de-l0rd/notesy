'use client'

import Link from 'next/link';
import Notes from '@/components/notes';
import { useEffect, useState } from 'react';
import fetchNotes from '@/utils/fetchtNotes';

export default function Page() {
  //let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  const [notes, setNotes] = useState<any[]>([])

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicked")

    try {
      //fetch notes from mongo
      const response = await fetch('api/test', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
         bodyText: 'Hi',
         title: 'value 1',
          // other key-value pairs
        }),
      })
      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`
        throw new Error(message)
      }
    
      // const data = await response.json();
      // return data;
    } 
    catch (error) {
      
    } 
  };

  useEffect(()=>{
   fetchNotes().then(data=>setNotes(data[0]))
   console.log('me data',notes)
    console.log(notes.length)
  }, [])


  return (
    <section >
      {notes.map((note:any) => (
        <Link  key={note._id} href={`/notes/${note._id}`} passHref>
          <Notes text={note.bodyText}/>
        </Link>
      ))}
<button onClick={()=>handleClick}>Click me</button>
    </section>
  );
}
