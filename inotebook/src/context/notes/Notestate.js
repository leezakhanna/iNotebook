import NoteContext from "./notecontext";
import { useState } from "react";

const Notestate = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDk0NzU2NGM0NGI4NTNhOTcyYzU5In0sImlhdCI6MTY4NzE5NjgxNn0.LHNZSeQhW6JFPE1TceNPRsyUPjyUCfqQWCYojMaTHMs",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note=await response.json();
    setNotes(notes.concat(note));
  
  };

  // Delete a Note
  const deleteNote = async(id) => {
    //API CALL--used to perform actions to db 
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDk0NzU2NGM0NGI4NTNhOTcyYzU5In0sImlhdCI6MTY4NzE5NjgxNn0.LHNZSeQhW6JFPE1TceNPRsyUPjyUCfqQWCYojMaTHMs",
      },
  
    });
    const json = response.json();
    console.log("Deleting a note with id = " + id);
    const dltnote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(dltnote);
  };
  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDk0NzU2NGM0NGI4NTNhOTcyYzU5In0sImlhdCI6MTY4NzE5NjgxNn0.LHNZSeQhW6JFPE1TceNPRsyUPjyUCfqQWCYojMaTHMs",
      },
    });
    const json = await response.json();
    console.log(json);
     setNotes(json)
  };
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDk0NzU2NGM0NGI4NTNhOTcyYzU5In0sImlhdCI6MTY4NzE5NjgxNn0.LHNZSeQhW6JFPE1TceNPRsyUPjyUCfqQWCYojMaTHMs",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default Notestate;
