import React, {useState} from 'react'
import swal from 'sweetalert';


import './style.css'

const ItemCount = ({stock, initial, onAdd, product}) => {

    const[count, setCount] = useState(initial);




    const handleAdd = () => {
      if(count < stock){
        setCount(count + 1);
      }else
      swal("Disculpa, hay stock disponible", "", "error");
    }

    const subtract = () => {
      if (count > initial){
      setCount(count - 1);
      }
    }

    const addCart = () => {
      onAdd(count);
      setCount(1);
    }

  return (
    <div>
        <h3 style={{textAlign:'center'}}>${product.price*count}</h3>
        <h2 className='contador' style={{color:'grey'}}> Unidades: {count}</h2>
        <div className='container-count'>
        <button  className='btn btn-secondary boton' onClick={handleAdd}>+</button>
        <button  className='btn btn-secondary boton' onClick={subtract}>-</button>
        <button className='btn btn-secondary boton' onClick={addCart}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount
   
