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
      <h2 style={{color:'white', paddingLeft:'1rem'}}>Loading..</h2>
      }
    </div>
  )
}

export default ItemList