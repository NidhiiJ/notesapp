import React from 'react'

export default function Main() {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input 
        type="text"
        id="title"
        autoFocus
        />
        <textarea
        id="body"
        placeholder='Write your note here'
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">Title</h1>
        <p className='markdown-preview'>your typed note</p>
      </div>
    </div>
   
  )
}
