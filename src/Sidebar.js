import React from 'react'


export default function Sidebar({notes, onAddNote}) {
 
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        
        {notes.map(note => {

        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
          
          <strong>TITLE</strong>
          <button>Delete</button>

          </div>
          

          <p>This the your note</p>
          <small> Last Modified [date]</small>

          
        </div>

        })}

      </div>
    </div>

  )
}
      



