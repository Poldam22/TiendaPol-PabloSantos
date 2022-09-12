import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import './style.css'

const ItemListContainer = ({greeting}) => {

const [productos, setProductos] = useState([])

useEffect(()=>{

  (async()=>{
    // const obtenerProductos = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(products)
    //   }, 3000);
    // })
    
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const productos = await response.json( );
    setProductos(productos)
  } catch (error) {
    console.log(error);
  }
  })()
}, [])

console.log(productos)

  return (
    <div className='item-list-container'>
      <ItemList products = {productos}/>
    </div>
  )
}

export default ItemListContainer