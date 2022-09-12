import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail'


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    useEffect(()=>{

        const getProduct = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/1');
                const data = await response.json();
                setProductDetail(data);
               
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();
        
    }, [])
  


    
  return (
      <ItemDetail product={productDetail}/>
      )
      
    }
    
    export default ItemDetailContainer
  


