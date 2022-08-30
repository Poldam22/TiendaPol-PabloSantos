import React from 'react'
import CartWidget from './CartWidget';
import './style.css'

const NavBar = () => {
  return (
    <div className='nav'>
      <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
          <li><a href='#a'><CartWidget/></a></li>
      </ul>
    </div>

  )
}

export default NavBar; 