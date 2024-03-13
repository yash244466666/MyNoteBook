import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
// import necessary packages 

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context; // deconstructure to include deleteNote
    const { note, updateNote } = props; // deconstructure to include note and updateNote
    //  remember we export 
     //  <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
     //  {props.children}
     //  </NoteContext.Provider>
     // in the ../context/notes/NoteState.js 
    return ( // display the content of the note
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem
