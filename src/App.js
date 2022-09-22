import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

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
    <div className="Container">
      <NotesList notes={notes} saveNote={saveNote} deleteNote={deleteNote} />
    </div>
  )
}

export default App
