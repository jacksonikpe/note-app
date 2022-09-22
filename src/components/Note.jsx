import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
const Note = ({ text, date, deleteNote, id }) => {

  return (
    <div className='note'>
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>              
              <MdDeleteOutline onClick={() => deleteNote(id)} className="delete-icon" size='1.3em' />                        
        </div>
    </div>
  )
}

export default Note