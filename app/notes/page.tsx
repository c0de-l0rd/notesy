import Link from "next/link"
import CreateNotes from "./CreateNotes"

async function getNotes(){
    try
{const res = await fetch(
    'http://127.0.0.1:8090/api/collections/notes/records?page=1&perpage=30',
    {cache: 'no-store'}
    ) 

if(!res.ok){
    throw new Error(`and error has occured, ${res.status}`)
}
    const data = await res.json()
    return data?.items as any[]}
    catch(e){
        console.error('error has occured:', e)
    }
}

async function NotesPage() {
    const arr = await getNotes()

    return(

        <div>
            <h1 className="bg-yellow-600">My Notes</h1>
            <div className="bg-yellow-300 w-fit h-fit rounded-md shadow-md m-10 mt-2 mb-2">
             {arr?.map((note) => {
          return  <Note key={note.id} note={note} className="bg-yellow-600"/>
        })}
       
            </div>
            <CreateNotes/>
        </div>
        
    )
        
  
}

function Note({note}:any){

    const {id, text, title, created} = note || {}

    return(
        <Link href={`/notes/${id}`} >
            <div>
                <h2>{title}</h2>
                <h5>{text}</h5>
                
                <p>{created}</p>
            </div>
        </Link>
    )
}

export default NotesPage