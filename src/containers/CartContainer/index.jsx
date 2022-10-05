
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Shop } from '../../context/ProvedorCart'
import generarOrden from '../../services/generarOrden'
import './style.css'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config'
import { doc, updateDoc } from "firebase/firestore";


const Cart = () => {

const {cart, setCart, totalCart, totalUnidades} = useContext(Shop)


const eliminarProductos = (product) => {
  const result = cart.filter(objeto => objeto !== product )
  setCart(result);
  }

  const handleBuy = async () =>{
    const importeTotal = totalCart()
    const orden = generarOrden('Pedrito', 12334442, 'pedrito@gmail.com', cart, importeTotal);
    console.log(orden);

// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "orders"), orden);

cart.forEach(async(productoEnCarrito) => {
  const productRef = doc(db, "products", productoEnCarrito.id);
  await updateDoc(productRef, {
    stock: productoEnCarrito.stock - productoEnCarrito.quantity
  });
  
});






alert("Gracias por su compra! El ID de la orden de su compra es:" + docRef.id);
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
      {cart.length ?
       
      <tr><td></td><td style={{borderTop:'1px solid', color:'green'}}>Total:</td><td style={{borderTop:'1px solid', color:'green'}}>{totalUnidades()}</td><td style={{borderTop:'1px solid', color: 'green'}}>${totalCart()}</td></tr>  
      : <tr><td></td>
      <td>No hay productos en el carrito</td></tr>}

<tr>
  <td>
  </td>
  <td>

  <Link to={"/"}><button type='button' className='btn btn-primary m-3 a'>Agregar otro producto</button></Link>
  </td>
  <td>
    <button className='btn btn-success m-3 a' onClick={handleBuy}>Finalizar comprar</button>
  </td>
</tr>

</tbody>
  </table>
  
  )
}
 

export default Cart
      

  



        
          
