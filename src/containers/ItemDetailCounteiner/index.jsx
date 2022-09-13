import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();
    
    useEffect(()=>{

        const getProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                setProductDetail(data);
               
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();
        
    }, [productId])
  


    
  return (
      <ItemDetail product={productDetail}/>
      )
      
    }
    
    export default ItemDetailContainer
  


