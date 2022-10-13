import React from 'react'
import Item from '../Item'
import './style.css'

const ItemList = ({products}) => {
  return (
    <div className='bg'>
        {products.length ? products.map(product => {
            return <Item key={product.id} product={product}/>
        })
      :
      <div className='load'>
      <h2>Loading..</h2>
      </div>
      }
    </div>
  )
}

export default ItemList