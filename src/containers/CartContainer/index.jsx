import React, { useContext, useState } from 'react'
import { Link} from 'react-router-dom'
import { Shop } from '../../context/ProvedorCart'
import './style.css'
import Formulario from '../../components/Formulario'
// import FormularioContainer from '../../containers/FormularioContainer'


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
    <th className='small medium'></th>
    <th>Producto</th>
    <th>Unidades</th>
    <th className='small'>Precio</th>
  </tr>
      {cart.map(product => { 
             return(<tr key={product.id}>
                <td><img  style={{width:'50px'}} src={product.image} alt={product.title}/></td>
                <td style={{textAlign:'center'}} className='small medium'>{product.title}</td>
                <td style={{textAlign:'center'}}>{product.quantity}</td>
                <td className='small'>${product.price}</td>
                <td><button className='btn btn-danger m-2 a unidades' onClick={()=>eliminarProductos(product)}>Eliminar</button></td>
              </tr>

             )
              
        })}
      {cart.length ? <tr><td></td><td className='small'></td><td className='small medium'></td><td style={{borderTop:'1px solid', color: 'green'}}>Total: ${totalCart()}</td></tr>  
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
      

  