import React from 'react';
import './style.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1 className='saludo'>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer