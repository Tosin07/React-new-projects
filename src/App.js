// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { data } from './data';
import { List } from './List';
import Note from './Note';
import Header from './Header';

function App() {

  const [notes, setNotes] = useState([])
  
  function addNote(newNote) {
   setNotes(prevNotes => {
    return [...prevNotes, newNote]
   })

  }

  function deleteNote(id) {
   setNotes(prevNote => {
    return prevNote.filter((pItem, index) =>{
      return index !== id
    })
   })
  }

  return (<>
   <Header/>
   <List
   onAdd={addNote}
   />
   {notes.map((noteItem, index) => {
    return <Note key={index} id={index} title={noteItem.title} content={noteItem.content}
    onDelete={deleteNote}/>
   })}
   
  </>)
}

export default App;