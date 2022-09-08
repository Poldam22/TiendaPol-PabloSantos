import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import { products } from '../../data/products';
import './style.css'

const ItemListContainer = ({greeting}) => {

const [productos, setProductos] = useState([])

useEffect(()=>{

  (async()=>{
    const obtenerProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 3000);
    })
    
  try {
    const response = await obtenerProductos;
    console.log(response)
    setProductos(response)
  } catch (error) {
    console.log(error);
  }
  })()
}, [])



  return (
    <div className='item-list-container'>
      <ItemList products = {productos}/>
    </div>
  )
}

export default ItemListContainer