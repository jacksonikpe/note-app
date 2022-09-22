import React from 'react'
import Note from './Note.jsx'
import AddNote from './AddNote.jsx'

const NotesList = ({ notes, saveNote, deleteNote }) => {
  return (
    <div className="notes-list">
        {notes.map((note) => (
          <Note key={note.id} text={note.text} date={note.date} deleteNote={deleteNote} id={note.id} />
        ))}
        <AddNote saveNote={saveNote} />
    </div>
  )
}

export default NotesList