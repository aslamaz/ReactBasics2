import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ToDoList from './toDoList';
import HomePage from './homePage'
import ArrayMap from './arrayMap'
import Nav from './Nav';

const App = () => {
  return (
    <div>
     <Nav/>
    <Routes>
      
      <Route path='toDoList' element={<ToDoList/>} />
     <Route path='arrayMap' element={<ArrayMap/>} />
     <Route path='homePage' element={<HomePage/>}/>
    </Routes>
    </div>
  )
}

export default App