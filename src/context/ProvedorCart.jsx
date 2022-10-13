import { createContext, useState } from "react";
import React from 'react'


export const Shop = createContext(null);

const Provedor = ({children}) => {

  const [cart, setCart] = useState([]);


  const addItem = (item) =>{
    const productoRepetido = isInCart(item.id)
    
    if(productoRepetido){
     const cartMapeo = cart.map(producto =>{
        if(producto.id === item.id){
          producto.quantity += item.quantity
          producto.price += (item.price*item.quantity)
          
          return producto
        }else{
          return producto
        }
      })
      console.log(cartMapeo);
    }else{
      const cartModificado = [...cart, item];
      const precioMulti = cartModificado.map(product =>{
        product.price = product.price*product.quantity
        return product
      })
      setCart(precioMulti)
    
    }
  }


  const isInCart = (id) =>{
    return cart.some(product => product.id === id)
  }

  const totalCart = () =>{
    const total = cart.reduce((acc, producto) => acc + producto.quantity*producto.price, 0)
   return total
  }


  return (
    <Shop.Provider value={{cart, setCart, addItem, totalCart}}>
        {children}
    </Shop.Provider>
  )
}

export default Provedor