import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"
// import necessary packages 
const AddNote = () => {
    const context = useContext(noteContext); //This line uses the useContext hook to access the context object named noteContext.
    const {addNote} = context; //This line destructures the addNote function from the context object obtained in the previous step.
    // {addNote} allows the component to access the addNote function from the noteContext
    //  because we export 
     //  <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
     //  {props.children}
     //  </NoteContext.Provider>
     // in the ../context/notes/NoteState.js
    const [note, setNote] = useState({title: "", description: "", tag: ""})
    // initialize a template of the note
    const handleClick = (e)=>{
        e.preventDefault(); // prevent form default 
        addNote(note.title, note.description, note.tag); // add a note that contains new information 
        setNote({title: "", description: "", tag: ""}) // set note to default value after adding a new one 
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        // provide a form that asks the user to input information about the form they want to submit 
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label> 
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>
               
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
