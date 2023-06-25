import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/notecontext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Added Successfully","success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <>
        <div className="flex min-h-full flex-col justify-center  lg:px-3">
       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      
         <h2 className=" mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add Notes</h2>
       </div>
     
       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         <form className="space-y-6">
      
     
           <div>
             <div className="flex items-center justify-between">
               <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
              
             </div>
             <div className="mt-2">
               <input type="text"  id="title" name="title"  value={note.title} onChange={onChange}   autocomplete="current-password" required className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
             </div>
           </div>
     
     
           <div>
             <div className="flex items-center justify-between">
               <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900"  >Description</label>
              
             </div>
             <div className="mt-2">
               <input id="description" name="description" type="text" value={note.description}  onChange={onChange} autocomplete="current-password" required className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
             </div>
           </div>
{/* tag */}
           <div>
             <div className="flex items-center justify-between">
               <label htmlFor="tag" className="block text-sm font-medium leading-6 text-gray-900">Tag</label>
              
             </div>
             <div className="mt-2">
               <input type="text"id="tag" name="tag" value={note.tag} onChange={onChange}   autocomplete="current-password" required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
             </div>
           </div>
       
     
           <div>
           <button type="button" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-25" disabled={note.title.length<5 || note.description.length<5} onClick={handleClick}>Add note</button>
 
           </div>
         </form>

       </div>
     </div>
     </>
        // <div className="container my-3">
        //     <h2>Add a Note</h2>
        //     <form className="my-3">
        //         <div className="mb-3">
        //             <label htmlFor="title" className="form-label">Title</label>
        //             <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} /> 
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="description" className="form-label">Description</label>
        //             <input type="text" className="form-control" id="description" name="description"  value={note.description} onChange={onChange} />
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="tag" className="form-label">Tag</label>
        //             <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
        //         </div>
               
        //         <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        //     </form>
        // </div>
    )
}

export default AddNote
 