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
  return (
    <div className="Container">
      <NotesList notes={notes} />
    </div>
  )
}

export default App
