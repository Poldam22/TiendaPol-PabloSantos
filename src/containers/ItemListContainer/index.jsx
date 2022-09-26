import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import './style.css'
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

const [productos, setProductos] = useState([]);

const {categoryId} = useParams();

useEffect(()=>{

  (async()=>{
    
  try {
    if(categoryId){
      setProductos([])
      const response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
      const productos = await response.json( );
      setProductos(productos)

    }else{
      setProductos([])
      const response = await fetch("https://fakestoreapi.com/products");
      const productos = await response.json( );
      setProductos(productos)
    }
  } catch (error) {
    console.log(error);
  }
  })()
}, [categoryId])


  return (
    <div className='item-list-container'>
      <ItemList products = {productos}/>
    </div>
  )
}

export default ItemListContainer