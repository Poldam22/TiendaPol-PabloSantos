import React, {useState} from 'react'
import './style.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const[count, setCount] = useState(initial);
    

    const handleAdd = () => {
      if(count < stock){
        setCount(count + 1);
      }else
      alert('No hay stock disponible')
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
        <h2 className='contador'> Unidades: {count}</h2>
        <div className='container-count'>
        <button  className='btn btn-primary boton' onClick={handleAdd}>+</button>
        <button  className='btn btn-primary boton' onClick={subtract}>-</button>
        <button className='btn btn-primary boton' onClick={addCart}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount
   
