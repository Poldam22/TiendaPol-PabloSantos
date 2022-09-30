
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Shop } from '../../context/ProvedorCart'
import './style.css'


const Cart = () => {

const {cart, setCart} = useContext(Shop)


const eliminarProductos = (product) => {
  const result = cart.filter(objeto => objeto !== product )
  setCart(result);
  }



  return (
    <table className='contenedorTable'>
<tbody>
  <tr className='m'>
    <th></th>
    <th>Producto</th>
    <th>Unidades</th>
    <th>Precio</th>
  </tr>
      {cart.map(product => { 
             return(<tr key={product.id}>
                <td><img  style={{width:'50px'}} src={product.image} alt={product.title}/></td>
                <td style={{textAlign:'center'}}>{product.title}</td>
                <td style={{textAlign:'center'}}>{product.quantity}</td>
                <td>${product.price}</td>
                <td><button className='btn btn-danger m-2 a' onClick={()=>eliminarProductos(product)}>Eliminar</button></td>
              </tr>

             )
              
        })}
      {cart.length ? '' : <tr><td></td>
      <td>No hay productos en el carrito</td></tr>}
      {/* <tr><td></td><td></td><td>Total:</td><td style={{borderTop:'1px solid'}}></td></tr>   */}

<tr>
  <td>
  </td>
  <td>

  <Link to={"/"}><button type='button' className='btn btn-primary m-3 a'>Agregar otro producto</button></Link>
  </td>
  <td>
    <button className='btn btn-success m-3 a'>Finalizar comprar</button>
  </td>
</tr>

</tbody>
  </table>
  
  )
}
 

export default Cart
      

  



        
          
