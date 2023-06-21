import NoteContext from "./notecontext";
import { useState } from "react";

const Notestate = (props)=>{
    const notesInitial =[
        {
          "_id": "649097110a3a57df130e6da6",
          "user": "6490947564c44b853a972c59",
          "title": "my title",
          "description": "hello my first desc",
          "tag": "personal",
          "__v": 0
        },
        {
          "_id": "649322edea2f127564837899",
          "user": "6490947564c44b853a972c59",
          "title": "my second note",
          "description": "hello my second desc",
          "tag": "personal",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(notesInitial)
    return (
      
            <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default Notestate;