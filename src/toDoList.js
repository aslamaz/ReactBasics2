import React, { useState } from 'react'
import './app.css'

const App = () => {
  const [content,setContent]=useState([])
  const [value,setValue]=useState('')

const insertContent = () =>{
  setContent([...content,value])
  setValue('')
}

const deleteContent = (key) => {
  const updatedContent = [...content];
  updatedContent.splice(key, 1);
  setContent(updatedContent)

}



  return (
    
    <div className='box1'>
      <h1>To Do List</h1>
      <hr></hr>
      <input type='text' value={value} name='content'onChange={(event) => setValue(event.target.value)}/>
      <input type='submit' onClick={insertContent}/>

      <div>
        <h1>My Lists</h1>
        <hr></hr>

        {content.map((cont,key) =>(
          <div key={key} className='key'>
            <h1>{cont}</h1>
            <div className='button'>
            <button onClick={() => deleteContent(key)}>Click</button>
            </div>
          </div>

        ))}
      </div>

    
    </div>
  )
}

export default App
