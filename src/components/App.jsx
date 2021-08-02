import React, { useState } from 'react'

import Header from './Header'
import Form from './Form'
// import notes from '../notes'
import Note from './Note'
import Footer from './Footer'

const App = () => {

  const [notes, setNotes] = useState([]);

  function addNote(note){
    setNotes(prevVal => {
      return [...notes, note];
    });
  }

  function deleteNote(id) {
    // console.log(id)
    setNotes(prevVal => {
      return prevVal.filter((note, index) => index !== id)
    });
  }

  return (
    <div className="App">
      <Header />
      <Form
        onAdd={addNote}
      />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
