const notes:any[] = []
  
  const fetchNotes = async () => {
    try{
      const response = await fetch('../api/data', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
      })

      if(!response.ok){
        const message = `an error ocured ${response.status}`
        throw new Error(message)
      }

      const data = await response.json()

      notes.push([...data.data])
      console.log(notes[0])

       
      
    } 
    catch(error){
      console.log(`an error`,error)
    }

    return notes
  }


   fetchNotes()
   console.log('me data',notes)
    console.log(notes.length)

  export default fetchNotes