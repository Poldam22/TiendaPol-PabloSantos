import React from 'react'
import Item from '../Item'
import './style.css'
import DotLoader from "react-spinners/DotLoader"

const ItemList = ({products}) => {
  return (
    <div className='bg'>
        {products.length ? products.map(product => {
            return <Item key={product.id} product={product}/>
        })
      :
      <div className='load'>
      <DotLoader color="#e8ecff" size={90} />
      </div>
      
      }
    </div>
  )
}

export default ItemList