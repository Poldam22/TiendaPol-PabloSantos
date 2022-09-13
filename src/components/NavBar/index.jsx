import React from 'react'
import CartWidget from '../CartWidget/index';
import './style.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category/men's clothing">Men's clothing</Link></li>
          <li><Link to="/category/women's clothing">Women's clothing</Link></li>
          <li><Link to="/category/electronics">Electronics</Link></li>
          <li><Link to="/category/jewelery">Jewelery</Link></li>
          <li><Link to="/"><CartWidget/></Link></li>
      </ul>
    </div>

  )
}

export default NavBar; 