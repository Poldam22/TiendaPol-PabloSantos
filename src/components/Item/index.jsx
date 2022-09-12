import React from 'react'
import './style.css'




const Item = ({product}) => {
  return (
<>
{/* <div>
      <h1>{product.title}</h1>
      <img src = {product.image} alt={product.id} width={250}/>
      </div> */}


      <div className="card m-2 tarjeta" id={product.id}>
         <img src={product.image} className="card-img-top p-2" style={{height:'45vh'}}  alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
              <button className="btn btn-primary m-1 w-100">Comprar</button>
          </div>
      </div>

</>
  )
}


export default Item

