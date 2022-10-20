import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import './style.css'

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
      productosFirebase.push({id: doc.id, ...doc.data()})
      });
      setProductos(productosFirebase)

    }else{
      setProductos([])
      const q = query(collection(db, "products"));

      const querySnapshot = await getDocs(q);
      const productosFirebase = [];
      querySnapshot.forEach((doc) => {
      productosFirebase.push({id: doc.id, ...doc.data()})
      });
      setProductos(productosFirebase)
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