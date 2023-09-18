import next from "next"

async function getNote(noteId:string){

    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
        {
            next: {revalidate:10},
        }
        )
    const data = await res.json()
    return data
}

async function NotePage({params}:any) {
    const note = await getNote(params.id)
  return (
    <div>
        <h1>{`Note/${params.id}`}</h1>
        <div className="bg-yellow-600">
                <h1>branch-2 0ne NotePage</h1>
                <h2>{note.title}</h2>
                <h5>{note.text}</h5>
                
        </div>
    </div>
  )
}

export default NotePage