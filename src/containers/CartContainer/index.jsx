
import React, { useContext, useState } from 'react'
import { Link} from 'react-router-dom'
import { Shop } from '../../context/ProvedorCart'
// import generarOrden from '../../services/generarOrden'
import './style.css'
// import { collection, addDoc } from "firebase/firestore";
// import { db } from '../../firebase/config'
// import { doc, updateDoc } from "firebase/firestore";
import Formulario from '../../components/Formulario'


const Cart = () => {

const {cart, setCart, totalCart, vaciarCart} = useContext(Shop)

const [formularioShow, setFormularioShow] = useState(false)


const eliminarProductos = (product) => {
  const result = cart.filter(objeto => objeto !== product )
  setCart(result);
  }

  const handleBuy = async () =>{
    setFormularioShow(true)
}
 
const vaciar = () =>{
  vaciarCart()
}


  return (
    <div className='contenedor'>
    <table className='contenedorTable'>
<tbody>
  <tr>
    <th className='unidades'></th>
    <th>Producto</th>
    <th>Unidades</th>
    <th className='unidades'>Precio</th>
  </tr>
      {cart.map(product => { 
             return(<tr key={product.id}>
                <td><img  style={{width:'50px'}} src={product.image} alt={product.title}/></td>
                <td style={{textAlign:'center'}} className='unidades'>{product.title}</td>
                <td style={{textAlign:'center'}}>{product.quantity}</td>
                <td className='unidades'>${product.price}</td>
                <td><button className='btn btn-danger m-2 a unidades' onClick={()=>eliminarProductos(product)}>Eliminar</button></td>
              </tr>

             )
              
        })}
      {cart.length ? <tr><td></td><td className='unidades'></td><td className='unidades'></td><td style={{borderTop:'1px solid', color: 'green'}}>Total: ${totalCart()}</td></tr>  
      : <tr><td></td><td className='m'>No hay productos en el carrito</td></tr>}

<tr className='button'>
  <td className='button'>
    <button className='btn btn-danger m-4 a' onClick={vaciar}>Vaciar carrito</button>
    <Link to={"/"}><button type='button' className='btn btn-primary m-4 a'>Agregar otro producto</button></Link>
    <button className='btn btn-success m-4 a' onClick={handleBuy}>Confirmar compra</button>
  </td>
</tr>

</tbody>
  </table>
  {formularioShow && cart.length ? <Formulario cancelare = {setFormularioShow}/> : ''}
  </div>
  )
}
 

export default Cart
      

  



        
          
// const handleBuy = async () =>{
//   // const importeTotal = totalCart()
//   setFormularioShow(true)
//   // navigate('/formulario')
// //     const orden = generarOrden('Pedrito', 12334442, 'pedrito@gmail.com', cart, importeTotal);
// //     console.log(orden);

// // // Add a new document with a generated id.
// // const docRef = await addDoc(collection(db, "orders"), orden);

// // cart.forEach(async(productoEnCarrito) => {
// //   const productRef = doc(db, "products", productoEnCarrito.id);
// //   await updateDoc(productRef, {
// //     stock: productoEnCarrito.stock - productoEnCarrito.quantity
// //   });

// // });
// // alert("Gracias por su compra! El ID de la orden de su compra es:" + docRef.id);
// }