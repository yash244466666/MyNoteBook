import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
// import necessary packages 

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context; //useContext is a react hook that is used to consume the context
    const { note, updateNote } = props; // getting the note and updateNote from the props
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
