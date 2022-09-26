import React, { useContext } from 'react'
import CartWidget from '../CartWidget/index';
import './style.css'
import { Link} from 'react-router-dom';
import { Shop } from '../../context/ProvedorCart';



const NavBar = () => {

const {cart} = useContext(Shop)


  return (
    <div className='nav'>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category/men's clothing">Men's clothing</Link></li>
          <li><Link to="/category/women's clothing">Women's clothing</Link></li>
          <li><Link to="/category/electronics">Electronics</Link></li>
          <li><Link to="/category/jewelery">Jewelery</Link></li>
          { cart.length ? <li><Link to="/cart"><CartWidget/>{cart.length}</Link></li> : ''}
      </ul>
    </div>

  )
}

export default NavBar; 