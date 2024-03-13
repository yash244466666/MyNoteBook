import { createContext } from "react";
// contains the noteContext and exports it
const noteContext = createContext();
// {props.children} = { notes, addNote, deleteNote, editNote, getNotes }
export default noteContext;