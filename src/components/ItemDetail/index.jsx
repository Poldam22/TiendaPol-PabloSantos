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
      <div className='title'>
        <h1>{product.title}</h1>
        <ItemCount initial={1} stock={10} onAdd={agregarAlCarrito}/>
      </div>
      <div className='container-image'>
        <img src={product.image} style={{width:'25vw', marginBottom:'1rem', marginTop:'3rem'}}  className='image-detail' alt="detail"/>
      </div>
    </div>
    </>
  )
}

export default ItemDetail

        
        
