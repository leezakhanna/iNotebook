import React,{useContext} from 'react'
import noteContext from "../context/notes/notecontext"

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote}=context;
    const { note,updateNote } = props;
    return (

        <div className="col-md-3">
        <div className="card my-3 mx-3 ">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <h5 className="card-title">{note.title?note.title:"No Title"}</h5>
                    <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                    <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                </div>
              
                <div className="card-text card-text-truncate ">
                <p className="card-text ">{note.description}</p>
                </div>
                </div>
       
        </div>
        </div>
    )
}

export default Noteitem