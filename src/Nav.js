import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{width:'100%',height:'100px',border:'1px solid'}}>
        <Link to={'./toDoList'}>Todo</Link>
        <Link to={'./arrayMap'}>ArrayMap</Link>
        <Link to={'./homePage'}>homePage</Link>
    </div>
  )
}

export default Nav
