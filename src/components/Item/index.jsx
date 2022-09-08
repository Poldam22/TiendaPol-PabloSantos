import React from 'react'
import './style.css'




const Item = ({product}) => {
  return (
  <div className='container'>
      <h1>{product.name}</h1>
      <h2>{product.id}</h2>
      <img src = {product.img} alt={product.id}/>
  </div>
  )
}


export default Item