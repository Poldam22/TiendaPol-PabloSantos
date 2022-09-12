import React from 'react'
import ItemCount from '../ItemCounter'
import './style.css'

const ItemDetail = ({product}) => {
    
  const agregarAlCarrito = (cantidad) => {
    alert(`Se agregaron ${cantidad} unidades al carrito`);
  }



  return (
    <>
      
    <div className='container'>
        <h1>{product.title}</h1>
        <img src={product.image} style={{width:'40%', marginBottom:'1rem'}} alt="detail"/>
    </div>
    <div>
        <ItemCount initial={1} stock={10} onAdd={agregarAlCarrito}/>
    </div>
        
    </>
  )
}

export default ItemDetail
        
