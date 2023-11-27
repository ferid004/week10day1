import React from 'react'
import {NavLink} from 'react-router-dom';
import  '../src/Navbar.css'



function Navbar() {
  return (
    <div className='nav'>
    <NavLink className='bunaneceolur' to='/'>Home</NavLink>
    <NavLink className='bunaneceolur'  to='/galery'>GALERY</NavLink>
    <NavLink className='bunaneceolur'  to='/shortcode'>ShortCode</NavLink>
    <NavLink className='bunaneceolur'  to='/about'>About</NavLink>
    <NavLink className='bunaneceolur'  to='/language '>Language</NavLink>
    <NavLink className='bunaneceolur'  to='/login '>loginnnnnnnn</NavLink>
    </div>
  )
}

export default Navbar