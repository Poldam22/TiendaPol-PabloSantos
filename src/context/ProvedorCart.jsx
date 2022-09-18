import { createContext, useState } from "react";
import React from 'react'


export const Shop = createContext(null);

const Provedor = ({children}) => {

  const [cart, setCart] = useState([]);

  const addItem = (item) =>{
    const productoRepetido = isInCart(item.id)
    console.log(productoRepetido);
    if(productoRepetido){
     const cartMapeo = cart.map(producto =>{
        if(producto.id === item.id){
          producto.quantity += item.quantity
          return producto
        }else{
          return producto
        }
      })
      console.log(cartMapeo);
    }else{
      const cartModificado = [...cart, item];
      setCart(cartModificado)
    }
  }
  console.log(cart);


  const isInCart = (id) =>{
    return cart.some(product => product.id === id)
  }

  return (
    <Shop.Provider value={{cart, addItem}}>
        {children}
    </Shop.Provider>
  )
}

export default Provedor