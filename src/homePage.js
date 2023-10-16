import React, { useState } from 'react'
import Home from './Home'

const HomePage = () => {
    const [name,setName]= useState(false)
  
    const changeName = () =>{
        setName(!name)
    }
    return (
    <div>
        <h1>homePage</h1>
        <button onClick={changeName}>Click</button>
        {
            name&&<Home/>
        }
        </div>
  )
}

export default HomePage