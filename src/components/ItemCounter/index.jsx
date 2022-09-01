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

  return (
    <div>
        <h2 className='contador'> Producto: {count}</h2>
        <div className='container'>
        <button  className='btn' onClick={handleAdd}>+</button>
        <button  className='btn' onClick={subtract}>-</button>
        <button className='btn' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
   

    </div>
  )
}

export default ItemCount