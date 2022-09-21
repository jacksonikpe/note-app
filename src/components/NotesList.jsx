import React from 'react'
import Note from './Note.jsx'
import AddNote from './AddNote.jsx'

const NotesList = ({ notes, saveNote }) => {
  return (
    <div className="notes-list">
        {notes.map((note) => (
          <Note key={note.id} text={note.text} date={note.date} />
        ))}
        <AddNote saveNote={saveNote} />
    </div>
  )
}

export default NotesList