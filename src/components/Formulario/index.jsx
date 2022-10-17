import React, { useContext, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ProvedorCart';
import generarOrden from '../../services/generarOrden'
import DotLoader from "react-spinners/DotLoader"

import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config'
import { doc, updateDoc } from "firebase/firestore";



const Formulario = ({cancelare}) => {

const navigate = useNavigate()

const {cart, totalCart, setCart} = useContext(Shop)

const [compraExitosa, SetcompraExitosa] = useState(false)

const [ordenDeCompra, SetordenDeCompra] = useState('')

  const finalizarCompra = async (e) =>{
    e.preventDefault();
    const nombre = e.target[0].value;
    const apellido = e.target[1].value;
    const email = e.target[2].value;
    const telefono = e.target[3].value;
    const direccion = e.target[4].value;
    const importeTotal = totalCart()

SetcompraExitosa(true)


const orden = generarOrden(nombre, apellido, telefono, email, direccion, cart, importeTotal);
console.log(orden);

// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "orders"), orden);

cart.forEach(async(productoEnCarrito) => {
  const productRef = doc(db, "products", productoEnCarrito.id);
  await updateDoc(productRef, {
    stock: productoEnCarrito.stock - productoEnCarrito.quantity
  });
  
});
  SetordenDeCompra(docRef.id)
  }
 
  
  const cancel = () =>{
    cancelare(false)
  }

  const final = () => {
    navigate('/')
    setCart([])
  }


  return (
    <div className='background'>
    {compraExitosa ? 
    <div className='row g-3 modal-container' style={{textAlign:'center'}}>
    {ordenDeCompra ? 
    <div>
    <h2>Gracias por su compra!</h2> 
    <h4 style={{marginTop:'4rem'}}>Su codigo de orden es: ${ordenDeCompra}</h4>
    <div style={{marginTop:'10rem'}}><button onClick={final} className='btn btn-success'>Aceptar</button></div>
    </div>
    : <div className='load'><DotLoader
      color="#e8ecff"
      size={90}
      /></div>}
    </div> 
     :
     <div className="animate__animated animate__backInDown modal-container" >
     <h2 style={{textAlign:'center'}} className='titulo-form'>Datos del comprador</h2>
     <form className="row g-3 mt-3" onSubmit={finalizarCompra}>
  <div className="col-md-4">
    <label className="form-label">Nombre</label>
    <input type="text" className="form-control" id="validationDefault01" required/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Apellido</label>
    <input type="text" className="form-control" id="validationDefault02" required/>
  </div>
  <div className="col-md-4">
    <label  className="form-label">Email</label>
    <input type="text" className="form-control" id="validationDefault02" required/>
  </div>
 
  <div className="col-md-6">
    <label  className="form-label">Telefono</label>
    <input type="text" className="form-control" id="validationDefault03" required/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Dirección</label>
    <input type="text" className="form-control" id="validationDefault03" required/>
  </div>
  <div className="col-12 botones">
    <button className="btn btn-danger m-2 width" type="button" onClick={cancel}>Cancelar</button>
    <button className="btn btn-success m-2 width" type="submit">Finalizar compra</button>
  </div>
</form>
</div>
    }
</div>

  )
}

export default Formulario

