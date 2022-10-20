import React, { useContext, useState} from 'react'
import CartWidget from '../CartWidget/index';
import './style.css'
import { Link} from 'react-router-dom';
import { Shop } from '../../context/ProvedorCart';



const NavBar = () => {

const {cart} = useContext(Shop)
const [btnburger, setBtnburger] = useState(false)

const handleNav = () =>{
  setBtnburger(!btnburger)
}




  return (
    <div className='nav'>
    <div className='aa'><h2 style={{padding:'2rem'}}><Link to='/' className='logo'>Poldam</Link></h2></div> 

      <ul className={btnburger ? 'btnBurger' :''}>
          <li className={btnburger ?'burgerItem':'item'}><Link to="/" className='abc'>Home</Link></li>
          <li className={btnburger ?'burgerItem':'item'}><Link to="/category/men's clothing" className='abc'>Men's clothing</Link></li>
          <li className={btnburger ?'burgerItem':'item'}><Link to="/category/women's clothing" className='abc'>Women's clothing</Link></li>
          <li className={btnburger ?'burgerItem':'item'}><Link to="/category/electronics" className='abc'>Electronics</Link></li>
          <li className={btnburger ?'burgerItem':'item'}><Link to="/category/jewelery" className='abc'>Jewelery</Link></li>
          { cart.length ? <li><Link to="/cart" className='abc'><CartWidget/>{cart.length}</Link></li> : ''}
          <li style={{width:'23px'}} onClick={handleNav} className='botonHambur'><svg className='burger' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></li>
      </ul>
    </div>

  )
}

export default NavBar; 