import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "My first Note",
      date: "15/04/2021"
    },
    {
      id: nanoid(),
      text: "Coding Journey",
      date: "9/04/2021"
    },
    {
      id: nanoid(),
      text: "Millioniare mindset",
      date: "5/04/2021"
    },
    {
      id: nanoid(),
      text: "This is 100daysofcode",
      date: "18/04/2021"
    },
  ])

  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  //retrieve note data from local storage
  useEffect(() => {
    let noteData = JSON.parse(localStorage.getItem('note-app-data')); 
    if(noteData) {
      setNotes(noteData);
    }
  },[])

  //send note data to local storage
  useEffect(() => {
    localStorage.setItem('note-app-data', JSON.stringify(notes))
  },[notes])

  const saveNote = (text) => {
    let date = new Date()
    let note = {
        id: nanoid(),
        text,
        date: date.toLocaleDateString()
      }
    
    let newNotes = [...notes, note ]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="Container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearch={setSearchText} />
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} saveNote={saveNote} deleteNote={deleteNote} />
      </div>
    </div>    
  )
}

export default App
