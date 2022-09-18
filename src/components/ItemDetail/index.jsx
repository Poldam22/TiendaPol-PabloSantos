import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ProvedorCart';
import ItemCount from '../ItemCount'
import './style.css'

const ItemDetail = ({product}) => {

  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  const {addItem} = useContext(Shop);

  const addCart = (quantity) => {
   setQty(quantity);
  }

  const handleFinish = () =>{
    const guardarProducto = {...product, quantity: qty}
    addItem(guardarProducto);
    navigate('/cart')
  }

  return (
    <>
    {product.image ?    
    <div className='container'>
      <div className='title'>
        <h1 style={{color:'white'}}>{product.title}</h1>
        {!qty ? (<ItemCount initial={1} stock={10} onAdd={addCart}/>) : 
        (<button className='btn btn-secondary boton' onClick={handleFinish} >Finalizar compra</button>)}
      </div>
      <div className='container-image'>
        <img src={product.image} style={{width:'25vw', marginBottom:'1rem', marginTop:'3rem'}}  className='image-detail' alt="detail"/>
      </div>
    </div>
    : 
    <h2 style={{color:'white', padding:'1rem'}}>Loading...</h2>
    }
    </>

  )
}

export default ItemDetail

        
        
