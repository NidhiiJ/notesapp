import { useState } from 'react';
import './App.css';
import uuid from "react-uuid";
import Sidebar from './Sidebar.js';
import Main from './Main.js'

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote =() => {
    const newNote={
      id: uuid() ,
      title: "Untitled Note" ,
      body: "",
      lastModified: Date.now().toLocaleString()
    };

    console.log({newNote});
    setNotes([newNote, ...notes]);
    console.log({notes});
  };
  
  return (
    <div className="App">
    <Sidebar
    notes={notes} 
    onAddNote={onAddNote}/>
    <Main/>
    </div>
  );
}

export default App;
