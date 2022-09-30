import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import './style.css'
import { useParams } from 'react-router-dom';

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemListContainer = () => {



const [productos, setProductos] = useState([]);

const {categoryId} = useParams();

useEffect(()=>{

  (async()=>{
    
  try {
    if(categoryId){
      setProductos([])
      const q = query(collection(db, "products"), where("category", "==", categoryId));

      const querySnapshot = await getDocs(q);
      const productosFirebase = [];
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      productosFirebase.push({id: doc.id, ...doc.data()})
      });
      setProductos(productosFirebase)

      // setProductos([])
      // const response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
      // const productos = await response.json( );
      // setProductos(productos)

    }else{
      setProductos([])
      const q = query(collection(db, "products"));

      const querySnapshot = await getDocs(q);
      const productosFirebase = [];
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      productosFirebase.push({id: doc.id, ...doc.data()})
      });
      setProductos(productosFirebase)

      // setProductos([])
      // const response = await fetch("https://fakestoreapi.com/products");
      // const productos = await response.json( );
      // setProductos(productos)
      
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