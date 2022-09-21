import { useState } from 'react';

const AddNote = ({ saveNote }) => {
  const [newNote, setNewNote] = useState('');
  const characterLimit = 200;

  const handleChange = (e) => {
    if(characterLimit - e.target.value.length >= 0) {
      let note = e.target.value;
      setNewNote(note);
    }
    
  }

  const handleSubmit = () => {
    if(newNote.trim().length > 0) {
      saveNote(newNote)
      setNewNote('')
    }
  }

  return (
    <div className='note new'>
        <textarea value={newNote} onChange={handleChange} placeholder="Type to add a row..." cols="10" rows="8"></textarea>
        <div className="note-footer">
            <small>{characterLimit - newNote.length} Remaining</small>
            <button onClick={handleSubmit} className='save'>Save</button>
        </div>
    </div>
  )
}

export default AddNote