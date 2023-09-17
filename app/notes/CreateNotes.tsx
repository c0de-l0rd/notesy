'use client'
import React, {useState, FormEvent} from 'react'
import {useRouter} from 'next/navigation'

function CreateNotes() {

  const [title, setTitle] = useState('')
  const [text, setContent] = useState('')

  const router = useRouter()

  const create = async (event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    try{
      await fetch(
      'http://127.0.0.1:8090/api/collections/notes/records',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          text,
        }),
      }
    )
    } catch(e){
      console.error(`and error has: ${e}`)
    }

    

    setContent('')
    setTitle('')

    router.refresh()
  }

  return (
    <form onSubmit={create} className='flex flex-col'>
      <input
      type='text'
      placeholder='enter note title'
      value={title}
      onChange={e=> setTitle(e.target.value)}
      />

       <textarea
      placeholder='enter note'
      value={text}
      onChange={e=> setContent(e.target.value)}
      />

      <button
      type='submit'
      >
        Create note
      </button>
    </form>
  )
}

export default CreateNotes